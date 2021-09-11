using Dapper;
using Microsoft.Extensions.Configuration;
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
    public class UserRepository : IUserRepository
    {
        private readonly AppSettings appSettings;
        public UserRepository(IOptions<AppSettings> option)
        {
            this.appSettings = option.Value;
        }
        public async Task<UserDTO> GetUserByUserNamePassAsync(string userName, string password)
        {
            UserDTO user = new UserDTO();
            using (IDbConnection db = new SqlConnection(appSettings.ConnectionString))
            {

                user = await db.QueryFirstOrDefaultAsync<UserDTO>(Constant.StoredProcedure.GetUserByUserNamePass,
                    new { @userName = userName, @password = password },
                    commandType: CommandType.StoredProcedure);
            }

            return user;
        }
    }
}
