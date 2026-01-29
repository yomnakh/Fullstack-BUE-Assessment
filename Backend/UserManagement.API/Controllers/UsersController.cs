using Microsoft.AspNetCore.Mvc;

namespace UserManagement.API.Controllers
{
    public class UsersController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
