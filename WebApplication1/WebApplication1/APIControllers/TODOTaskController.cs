using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using System.Net.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Interfaces;
using WebApplication1.Models;

namespace WebApplication1.APIControllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class TODOTaskController : ControllerBase
    {
        private readonly IHttpClientService httpClientService;
        public TODOTaskController(IHttpClientService httpClientService)
        {
            this.httpClientService = httpClientService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var todoTasks = await httpClientService.DoNonAuthorizedCallAsync<List<TODOTaskDTO>>(null, "http://localhost:1088/api/TODOTask/Get", HttpMethod.Get);
            return Ok(todoTasks);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] TODOTaskDTO taskDTO)
        {
            await httpClientService.DoNonAuthorizedCallAsync(taskDTO, "http://localhost:1088/api/TODOTask/Create", HttpMethod.Post);
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] TODOTaskDTO taskDTO)
        {
            await httpClientService.DoNonAuthorizedCallAsync(taskDTO, "http://localhost:1088/api/TODOTask/Update", HttpMethod.Put);
            return Ok();
        }

        [HttpDelete("{taskID}")]
        public async Task<IActionResult> Delete([FromRoute] int taskID)
        {
            await httpClientService.DoNonAuthorizedCallAsync<TODOTaskDTO>(null, "http://localhost:1088/api/TODOTask/Delete/"+taskID.ToString(), HttpMethod.Delete);
            return Ok();
        }
    }
}