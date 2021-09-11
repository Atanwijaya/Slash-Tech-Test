using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Services
{
    public class TODOTaskService : ITODOTaskService
    {
        private readonly ITODOTaskRepository todoTaskRepository;
        public TODOTaskService(ITODOTaskRepository todoTaskRepository)
        {
            this.todoTaskRepository = todoTaskRepository;
        }

        public async Task<IEnumerable<TODOTaskDTO>> GetAllAsync()
        {
            var todoTasks = await todoTaskRepository.GetAllAsync();
            return todoTasks; 
        }
        public async Task CreateAsync(TODOTaskDTO taskDTO)
        {
            await todoTaskRepository.CreateAsync(taskDTO);
        }
        public async Task UpdateAsync(TODOTaskDTO taskDTO)
        {
            await todoTaskRepository.UpdateAsync(taskDTO);
        }
        public async Task DeleteAsync(int taskID)
        {
            await todoTaskRepository.DeleteAsync(taskID);
        }
    }
}
