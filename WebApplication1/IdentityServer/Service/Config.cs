using IdentityServer.Interface;
using IdentityServer.Models;
using IdentityServer4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdentityServer.Service
{
    public class Config : IConfig
    {
        public List<ApiResource> GetApiResources()
        {
            return new List<ApiResource>()
            {
                new ApiResource(Constant.IdentityAPI,Constant.IdentityAPIDisplayName)
            };
        }
        public List<Client> GetClients()
        {
            return new List<Client>()
            {
                new Client
                {
                    ClientId = Constant.ClientID,
                    AllowedGrantTypes = GrantTypes.ClientCredentials,
                    AccessTokenLifetime = 25 * 60,
                    ClientSecrets =
                    {
                        new Secret("97a4343c-c199-4744-8aab-17cef8a919f6".Sha256())
                    },
                    AllowedScopes = { Constant.IdentityAPI }
                }
            };
        }
    }
}
