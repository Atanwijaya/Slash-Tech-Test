using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Interfaces;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILoginService loginService;
        public HomeController(ILoginService loginService)
        {
            this.loginService = loginService;
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("/Login")]
        public IActionResult Login([FromQuery] string login)
        {
            if(login == "success")
            {
                ViewBag.LoginResult = "(Success)";
            }
            else if(login == "fail")
            {
                ViewBag.LoginResult = "(Fail)";
            }
            else
            {
                ViewBag.LoginResult = "";
            }
            return View();
        }

        [HttpPost]
        [Route("/Login")]
        public async Task<IActionResult> Login(UserDTO userDTO)
        {
            var resultUserDTO = await loginService.DoLoginAsync(userDTO);
            if(resultUserDTO != null)
            {
                //ViewBag.LoginResult = "Success";
                return Redirect("/Login?login=success");
            }
            //ViewBag.LoginResult = "Fail";
            return Redirect("/Login?login=fail");
        }
    }
}
