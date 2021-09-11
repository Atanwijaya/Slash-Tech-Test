using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IdentityServer.Interface;
using IdentityServer.Service;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace IdentityServer
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            ConfigureIdentityServer(services);
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseIdentityServer();
            app.UseMvc();
        }

        private void ConfigureIdentityServer(IServiceCollection services)
        {
            services.AddSingleton<IConfig, Config>();
            var sp = services.BuildServiceProvider();
            var config = sp.GetRequiredService<IConfig>();
            var identityServerBuilder = services.AddIdentityServer()
                       .AddDeveloperSigningCredential()
                       .AddInMemoryClients(config.GetClients())
                       .AddInMemoryApiResources(config.GetApiResources());
        }
    }
}
