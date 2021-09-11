using Dapper;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Repositories
{
    public class TODOTaskRepository : ITODOTaskRepository
    {
        private readonly AppSettings appSettings;
        public TODOTaskRepository(IOptions<AppSettings> option)
        {
            this.appSettings = option.Value;
        }

        public async Task<IEnumerable<TODOTaskDTO>> GetAllAsync()
        {
            IEnumerable<TODOTaskDTO> tasks;
            using (IDbConnection db = new SqlConnection(appSettings.ConnectionString))
            {

                tasks = await db.QueryAsync<TODOTaskDTO>(Constant.StoredProcedure.GetAllTodoTask,
                    commandType: CommandType.StoredProcedure);
            }

            return tasks;
        }
        public async Task CreateAsync(TODOTaskDTO taskDTO)
        {
            using (IDbConnection db = new SqlConnection(appSettings.ConnectionString))
            {

                await db.QueryAsync<TODOTaskDTO>(Constant.StoredProcedure.CreateTodoTask,
                    new { @taskName = taskDTO.TaskName, @dueDate = taskDTO.DueDate },
                    commandType: CommandType.StoredProcedure);
            }
        }
        public async Task UpdateAsync(TODOTaskDTO taskDTO)
        {
            using (IDbConnection db = new SqlConnection(appSettings.ConnectionString))
            {

                await db.QueryAsync<TODOTaskDTO>(Constant.StoredProcedure.UpdateTodoTask,
                    new { @ID = taskDTO.ID , @taskName = taskDTO.TaskName, @dueDate = taskDTO.DueDate },
                    commandType: CommandType.StoredProcedure);
            }
        }
        public async Task DeleteAsync(int taskID)
        {
            using (IDbConnection db = new SqlConnection(appSettings.ConnectionString))
            {

                await db.QueryAsync<TODOTaskDTO>(Constant.StoredProcedure.DeleteTodoTask,
                    new { @ID = taskID},
                    commandType: CommandType.StoredProcedure);
            }
        }
    }
}
