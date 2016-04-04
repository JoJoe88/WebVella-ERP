﻿using Newtonsoft.Json;
using Npgsql;
using NpgsqlTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using WebVella.ERP.Api.Models;
using WebVella.ERP.Database.Models;

namespace WebVella.ERP.Database
{
	public class DbRelationRepository
	{
		static object lockObj = new object();
		static List<DbEntityRelation> relationCache = new List<DbEntityRelation>();

		public bool Create(DbEntityRelation relation)
		{
			lock (lockObj)
			{
				if (relation == null)
					throw new ArgumentNullException("relation");

				List<DbParameter> parameters = new List<DbParameter>();

				JsonSerializerSettings settings = new JsonSerializerSettings { TypeNameHandling = TypeNameHandling.Auto };

				DbParameter parameterId = new DbParameter();
				parameterId.Name = "id";
				parameterId.Value = relation.Id;
				parameterId.Type = NpgsqlDbType.Uuid;
				parameters.Add(parameterId);

				DbParameter parameterJson = new DbParameter();
				parameterJson.Name = "json";
				parameterJson.Value = JsonConvert.SerializeObject(relation, settings);
				parameterJson.Type = NpgsqlDbType.Json;
				parameters.Add(parameterJson);

				List<DbEntity> entities = DbContext.Current.EntityRepository.Read();

				DbEntity originEntity = entities.FirstOrDefault(e => e.Id == relation.OriginEntityId);
				DbEntity targetEntity = entities.FirstOrDefault(e => e.Id == relation.TargetEntityId);

				DbBaseField originField = originEntity.Fields.FirstOrDefault(f => f.Id == relation.OriginFieldId);
				DbBaseField targetField = targetEntity.Fields.FirstOrDefault(f => f.Id == relation.TargetFieldId);

				string originTableName = $"rec_{originEntity.Name}";
				string targetTableName = $"rec_{targetEntity.Name}";

				using (DbConnection con = DbContext.Current.CreateConnection())
				{
					con.BeginTransaction();

					try
					{
						bool result = DbRepository.InsertRecord("entity_relations", parameters);

						if (relation.RelationType == EntityRelationType.ManyToMany)
						{
							DbRepository.DeleteNtoNRelation(relation.Name, originTableName, targetTableName);
							DbRepository.CreateNtoNRelation(relation.Name, originTableName, originField.Name, targetTableName, targetField.Name);

							string relTableName = $"rel_{relation.Name}";
							string relOriginFieldName = $"#{relation.Name}_origins";
							string relTargetFieldName = $"#{relation.Name}_targets";

						}
						else
						{
							DbRepository.DeleteRelation(relation.Name, targetTableName);
							DbRepository.CreateRelation(relation.Name, originTableName, originField.Name, targetTableName, targetField.Name);
						}

						con.CommitTransaction();
						relationCache = new List<DbEntityRelation>();
						return true;
					}
					catch 
					{
						con.RollbackTransaction();
					}
				}

				
			}
			return false;
		}

		public bool Update(DbEntityRelation relation)
		{
			lock (lockObj)
			{
				if (relation == null)
					throw new ArgumentNullException("relation");

				using (DbConnection con = DbContext.Current.CreateConnection())
				{

					NpgsqlCommand command = con.CreateCommand("UPDATE entity_relations SET json=@json WHERE id=@id;");

					JsonSerializerSettings settings = new JsonSerializerSettings { TypeNameHandling = TypeNameHandling.Auto };

					var parameter = command.CreateParameter() as NpgsqlParameter;
					parameter.ParameterName = "json";
					parameter.Value = JsonConvert.SerializeObject(relation, settings);
					parameter.NpgsqlDbType = NpgsqlDbType.Json;
					command.Parameters.Add(parameter);

					var parameterId = command.CreateParameter() as NpgsqlParameter;
					parameterId.ParameterName = "id";
					parameterId.Value = relation.Id;
					parameterId.NpgsqlDbType = NpgsqlDbType.Uuid;
					command.Parameters.Add(parameterId);

					relationCache = new List<DbEntityRelation>();

					return command.ExecuteNonQuery() > 0;
				}

			}
		}

		public DbEntityRelation Read(Guid relationId)
		{
			lock (lockObj)
			{
				var cachedRelation = relationCache.SingleOrDefault(x => x.Id == relationId);
				if (cachedRelation != null)
					return cachedRelation;

				var relations = Read();
				return relations.FirstOrDefault(r => r.Id == relationId);
			}
		}

		public DbEntityRelation Read(string relationName)
		{
			lock (lockObj)
			{
				var cachedRelation = relationCache.SingleOrDefault(r => r.Name.ToLowerInvariant() == relationName.ToLowerInvariant());
				if (cachedRelation != null)
					return cachedRelation;

				var relations = Read();
				return relations.FirstOrDefault(r => r.Name.ToLowerInvariant() == relationName.ToLowerInvariant());
			}
		}

		public List<DbEntityRelation> Read()
		{
			lock (lockObj)
			{
				if (relationCache.Any())
					return relationCache;

				using (DbConnection con = DbContext.Current.CreateConnection())
				{
					NpgsqlCommand command = con.CreateCommand("SELECT json FROM entity_relations;");

					using (NpgsqlDataReader reader = command.ExecuteReader())
					{
						JsonSerializerSettings settings = new JsonSerializerSettings { TypeNameHandling = TypeNameHandling.Auto };
						List<DbEntityRelation> relations = new List<DbEntityRelation>();
						while (reader.Read())
						{
							DbEntityRelation relation = JsonConvert.DeserializeObject<DbEntityRelation>(reader[0].ToString(), settings);
							relations.Add(relation);
						}

						reader.Close();

						relationCache = new List<DbEntityRelation>(relations.ToArray());

						return relations;
					}
				}
			}
		}

		public bool Delete(Guid relationId)
		{
			DbEntityRelation relation = Read(relationId);

			if (relation == null)
			{
				throw new StorageException("There is no record with specified relation id.");
			}

			List<DbEntity> entities = DbContext.Current.EntityRepository.Read();

			DbEntity originEntity = entities.FirstOrDefault(e => e.Id == relation.OriginEntityId);
			DbEntity targetEntity = entities.FirstOrDefault(e => e.Id == relation.TargetEntityId);

			DbBaseField originField = originEntity.Fields.FirstOrDefault(f => f.Id == relation.OriginFieldId);
			DbBaseField targetField = targetEntity.Fields.FirstOrDefault(f => f.Id == relation.TargetFieldId);

			string originTableName = $"rec_{originEntity.Name}";
			string targetTableName = $"rec_{targetEntity.Name}";

			lock (lockObj)
			{
				using (DbConnection con = DbContext.Current.CreateConnection())
				{

					con.BeginTransaction();

					NpgsqlCommand command = con.CreateCommand("DELETE FROM entity_relations WHERE id=@id;");

					var parameterId = command.CreateParameter() as NpgsqlParameter;
					parameterId.ParameterName = "id";
					parameterId.Value = relationId;
					parameterId.NpgsqlDbType = NpgsqlDbType.Uuid;
					command.Parameters.Add(parameterId);

					try
					{
						command.ExecuteNonQuery();

						if (relation.RelationType == EntityRelationType.ManyToMany)
						{
							DbRepository.DeleteNtoNRelation(relation.Name, originTableName, targetTableName);
						}
						else
						{
							DbRepository.DeleteRelation(relation.Name, targetTableName);
						}

						con.CommitTransaction();
						relationCache = new List<DbEntityRelation>();

						return true;
					}
					catch (Exception)
					{
						con.RollbackTransaction();
					}
				}

			
			}

			return false;
		}

		public void CreateManyToManyRecord(Guid relationId, Guid originId, Guid targetId)
		{
			var relation = Read(relationId);
			string tableName = $"rel_{relation.Name}";

			using (var connection = DbContext.Current.CreateConnection())
			{
				NpgsqlCommand command = connection.CreateCommand($"INSERT INTO {tableName} VALUES ( @origin_id,@target_id)");
				command.Parameters.Add(new NpgsqlParameter("@origin_id", originId));
				command.Parameters.Add(new NpgsqlParameter("@target_id", targetId));
				command.ExecuteNonQuery();
			}
		}

		public void DeleteManyToManyRecord(string relationName, Guid? originId = null, Guid? targetId = null)
		{
			string tableName = $"rel_{relationName}";

			using (var connection = DbContext.Current.CreateConnection())
			{
				NpgsqlCommand command;
				if (originId.HasValue && targetId.HasValue)
				{
					command = connection.CreateCommand($"DELETE FROM {tableName} WHERE origin_id=@origin_id AND target_id=@target_id");
					command.Parameters.Add(new NpgsqlParameter("@origin_id", originId));
					command.Parameters.Add(new NpgsqlParameter("@target_id", targetId));
				}
				else if(originId.HasValue)
				{
					command = connection.CreateCommand($"DELETE FROM {tableName} WHERE origin_id=@origin_id");
					command.Parameters.Add(new NpgsqlParameter("@origin_id", originId));
				}
				else
				{
					command = connection.CreateCommand($"DELETE FROM {tableName} WHERE target_id=@target_id");
					command.Parameters.Add(new NpgsqlParameter("@target_id", targetId));
				}

				command.ExecuteNonQuery();
			}
		}

		public void DeleteManyToManyRecord(Guid relationId, Guid? originId = null, Guid? targetId = null)
		{
			var relation = Read(relationId);

			DeleteManyToManyRecord(relation.Name, originId, targetId);
		}
	}
}