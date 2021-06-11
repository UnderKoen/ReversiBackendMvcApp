using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReversiMvcApp.Data;
using ReversiMvcApp.Models;

namespace ReversiMvcApp.Controllers {
    [Authorize(Roles = "Beheerder,Mediator")]
    public class AccountController : Controller {
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly ReversiDbContext _context;
        private readonly ApplicationDbContext _dbContext;

        public AccountController(
            RoleManager<IdentityRole> roleManager,
            UserManager<IdentityUser> userManager,
            ReversiDbContext context,
            ApplicationDbContext dbContext
        ) {
            _roleManager = roleManager;
            _userManager = userManager;
            _context = context;
            _dbContext = dbContext;
        }

        public async Task<ActionResult> IndexAsync() {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var user = await _userManager.FindByIdAsync(userId);
            var role = await _userManager.GetRolesAsync(user);

            if (role.Contains("Mediator")) {
                return View("MediatorIndex", await _context.Spelers.ToListAsync());
            }

            return View(await _context.Spelers.ToListAsync());
        }

        [Authorize(Roles = "Beheerder")]
        public async Task<ActionResult> EditAsync(string id) {
            if (id == null) {
                return NotFound();
            }

            var speler = await _context.Spelers.FindAsync(id);
            if (speler == null) {
                return NotFound();
            }

            return View(speler);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Beheerder")]
        public async Task<ActionResult> EditAsync(string id, [Bind("Role")] Speler speler) {
            if (ModelState.IsValid) {
                try {
                    var user = await _userManager.FindByIdAsync(id);
                    var roles = await _userManager.GetRolesAsync(user);
                    await _userManager.RemoveFromRolesAsync(user, roles.ToArray());
                    await _userManager.AddToRoleAsync(user, speler.Role);
                } catch (DbUpdateConcurrencyException) {
                }

                return RedirectToAction(nameof(Index));
            }

            return View(speler);
        }

        public async Task<IActionResult> Delete(string id) {
            if (id == null) {
                return NotFound();
            }

            var speler = await _context.Spelers
                .FirstOrDefaultAsync(m => m.Guid == id);
            
            var user = await _userManager.FindByIdAsync(id);
            await _userManager.DeleteAsync(user);

            _context.Spelers.Remove(speler);
            await _context.SaveChangesAsync();

            return RedirectToAction(nameof(Index));
        }
    }
}