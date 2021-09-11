using IdentityServer4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdentityServer.Interface
{
    public interface IConfig
    {
        List<Client> GetClients();
        List<ApiResource> GetApiResources();
    }
}
