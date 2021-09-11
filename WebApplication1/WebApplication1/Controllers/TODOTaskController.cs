using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Interfaces;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class TODOTaskController : Controller
    {
        public TODOTaskController(ILoginService loginService)
        {
            
        }
        
        [Route("/TODOTask")]
        public IActionResult TODOTask()
        {
            return View();
        }
    }
}