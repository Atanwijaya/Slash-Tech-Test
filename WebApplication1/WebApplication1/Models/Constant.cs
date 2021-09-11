using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Constant
    {
        public static class StoredProcedure
        {
            public const string GetUserByUserNamePass = "GetUserByUserNamePass";
        }
        public static class HttpHeader
        {
            public const string Bearer = "Bearer";

        }
        public static class IdentityServer
        {
            public const string ClientID = "clientID";
            public const string IdentityAPI = "identityAPI";
            public const string AccessToken = "access_token";
        }
    }
}
