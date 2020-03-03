using Microsoft.AspNetCore.Mvc;

namespace HumanPop.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}