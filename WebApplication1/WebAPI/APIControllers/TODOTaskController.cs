using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.APIControllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [EnableCors]
    public class TODOTaskController : ControllerBase
    {
        private readonly ITODOTaskService taskService;
        public TODOTaskController(ITODOTaskService taskService)
        {
            this.taskService = taskService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var todoTasks = await taskService.GetAllAsync();
            return Ok(todoTasks);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] TODOTaskDTO taskDTO)
        {
            await taskService.CreateAsync(taskDTO);
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] TODOTaskDTO taskDTO)
        {
            await taskService.UpdateAsync(taskDTO);
            return Ok();
        }

        [HttpDelete("{taskID}")]
        public async Task<IActionResult> Delete([FromRoute] int taskID)
        {
            await taskService.DeleteAsync(taskID);
            return Ok();
        }
    }
}