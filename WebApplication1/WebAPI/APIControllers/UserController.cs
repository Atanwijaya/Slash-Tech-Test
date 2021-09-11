using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.APIControllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [Authorize(Constant.IdentityServer.IdentityAPIPolicy)]
    public class UserController : ControllerBase
    {
        private readonly IUsersService usersService;
        public UserController(IUsersService usersService)
        {
            this.usersService = usersService;
        }

        public async Task<IActionResult> Validate(UserDTO userLogin)
        {
            var user = await usersService.GetUserByUserNamePassAsync(userLogin);
            if(user != null)
            {
                return Ok(user);
            }
            return Ok(string.Empty);
        }
    }
}