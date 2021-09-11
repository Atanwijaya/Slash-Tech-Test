using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Services
{
    public class UserService : IUsersService
    {
        private readonly IUserRepository userRepository;
        public UserService(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
        }

        public async Task<UserDTO> GetUserByUserNamePassAsync(UserDTO usersDTO)
        {
           var user = await userRepository.GetUserByUserNamePassAsync(usersDTO.UserName, usersDTO.Password);
            return user; 
        }
    }
}
