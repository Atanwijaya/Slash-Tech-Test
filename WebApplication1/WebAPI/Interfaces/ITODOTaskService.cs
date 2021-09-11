using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Interfaces
{
    public interface ITODOTaskService
    {
        Task<IEnumerable<TODOTaskDTO>> GetAllAsync();
        Task CreateAsync(TODOTaskDTO taskDTO);
        Task UpdateAsync(TODOTaskDTO taskDTO);
        Task DeleteAsync(int taskID);
    }
}
