using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ReversiMvcApp.Data;
using ReversiMvcApp.Models;

namespace ReversiMvcApp.Controllers {
    [Authorize]
    public class HomeController : Controller {
        private readonly ILogger<HomeController> _logger;
        private ReversiDbContext _context;
        private readonly ReversiApiService _service;
        private readonly UserManager<IdentityUser> _userManager;

        public HomeController(ILogger<HomeController> logger, ReversiDbContext context, ReversiApiService service, UserManager<IdentityUser> userManager) {
            _logger = logger;
            _context = context;
            _service = service;
            _userManager = userManager;
        }

        public async Task<IActionResult> IndexAsync() {
            ClaimsPrincipal currentUser = this.User;
            var currentUserId = currentUser.FindFirst(ClaimTypes.NameIdentifier)?.Value;


            List<Spel> spellen = new();
            if (currentUserId != null) {
                Speler speler = _context.Spelers.FirstOrDefault(s => s.Guid == currentUserId);
                if (speler == null) {
                    speler = new Speler {
                        Guid = currentUserId,
                        Naam = "Anoniem",
                    };
                    _context.Spelers.Add(speler);
                    _context.SaveChanges();
                }
                spellen = _service.GetAll(speler.Guid);
                
                var currentIdentityUser = await _userManager.GetUserAsync(User);
                await _userManager.AddToRoleAsync(currentIdentityUser, "Player");
            }
            
            return View(spellen);
        }

        public IActionResult Privacy() { return View(); }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error() {
            return View(new ErrorViewModel {RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier});
        }
    }
}