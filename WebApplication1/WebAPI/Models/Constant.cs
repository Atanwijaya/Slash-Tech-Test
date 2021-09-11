using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Constant
    {
        public static class StoredProcedure
        {
            public const string GetUserByUserNamePass = "GetUserByUserNamePass";
            public const string UpdateTodoTask = "UpdateTodoTask";
            public const string CreateTodoTask = "CreateTodoTask";
            public const string GetAllTodoTask = "GetAllTodoTask";
            public const string DeleteTodoTask = "DeleteTodoTask";
        }

        public static class IdentityServer
        {
            public const string IdentityAPI = "identityAPI";
            public const string Scope = "scope";
            public const string IdentityAPIPolicy = "ApiScope";
        }
        public static class Messages
        {
            public const string InvalidUsernameOrPassword = "Invalid Username / Password";
        }
    }
}
