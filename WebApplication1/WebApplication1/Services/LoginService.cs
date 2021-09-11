using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using WebApplication1.Interfaces;
using WebApplication1.Models;

namespace WebApplication1.Services
{
    public class LoginService : ILoginService
    {
        private readonly IHttpClientService httpClientService;
        public LoginService(IHttpClientService httpClientService)
        {
            this.httpClientService = httpClientService;
        }
        public async Task<UserDTO> DoLoginAsync(UserDTO userDTO)
        {
            UserDTO user = null;
            if (userDTO != null)
            {
                if (userDTO.Password != null && userDTO.UserName != null)
                {
                    user = await httpClientService.DoAuthorizedCallAsync<UserDTO>(userDTO, "http://localhost:1088/api/user/validate", HttpMethod.Post);
                }
            }
            return user;
        }

    }
}
