using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ReversiMvcApp.Data;
using ReversiMvcApp.Models;

namespace ReversiMvcApp.Controllers {
    [Authorize]
    public class SpelController : Controller {
        private readonly ReversiApiService _service;
        private readonly ReversiDbContext _context;

        public SpelController(ReversiApiService service, ReversiDbContext context) {
            _service = service;
            _context = context;
        }

        public IActionResult Index() { return View(_service.GetAllOpen()); }

        public IActionResult Join(string id) {
            if (id == null) {
                return NotFound();
            }

            ClaimsPrincipal currentUser = this.User;
            var currentUserId = currentUser.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            Spel spel = _service.JoinSpel(id, currentUserId);

            return RedirectToAction(nameof(Play), new {id = spel.token});
        }

        public IActionResult Create() { return View(); }

        public IActionResult Play(string id) {
            if (id == null) {
                return NotFound();
            }

            Spel spel = _service.Get(id);

            if (spel == null) {
                return NotFound();
            }

            return View(spel);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("omschrijving")] Spel spel) {
            if (ModelState.IsValid) {
                ClaimsPrincipal currentUser = this.User;
                var currentUserId = currentUser.FindFirst(ClaimTypes.NameIdentifier)?.Value;

                spel = _service.NewSpel(currentUserId, spel.omschrijving);
                return RedirectToAction(nameof(Play), new {id = spel.token});
            }

            return View(spel);
        }

        [HttpGet]
        public async Task<IActionResult> Finish(string id) {
            if (id == null) {
                return NotFound();
            }

            Spel spel = _service.Get(id);

            if (spel == null) {
                return NotFound();
            }

            if (spel.status != 2) {
                return BadRequest();
            }
            
            ClaimsPrincipal currentUser = this.User;
            var currentUserId = currentUser.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            Speler speler1 = _context.Spelers.FirstOrDefault(s => s.Guid == spel.speler1Token);
            if (speler1 == null) {
                return NotFound();
            }

            Speler speler2 = _context.Spelers.FirstOrDefault(s => s.Guid == spel.speler2Token);
            if (speler2 == null) {
                return NotFound();
            }

            if (currentUserId != spel.beurt) return Unauthorized();

            int p1 = spel.bord.Count(v => v.Value == 1);
            int p2 = spel.bord.Count(v => v.Value == 2);

            if (p1 > p2) {
                speler1.AantalGewonnen++;
                speler2.AantalVerloren++;
            } else if (p2 > p1) {
                speler2.AantalGewonnen++;
                speler1.AantalVerloren++;
            } else {
                speler1.AantalGelijk++;
                speler2.AantalGelijk++;
            }

            await _context.SaveChangesAsync();

            if (!_service.Delete(id, currentUserId)) return BadRequest();

            return Ok();
        }
    }
}