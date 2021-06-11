using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace ReversiMvcApp.Models {
    public class Speler {
        [Key]
        public string Guid { get; set; }

        public string Naam { get; set; }

        public int AantalGewonnen { get; set; }

        public int AantalVerloren { get; set; }

        public int AantalGelijk { get; set; }
        
        public string Role { get; set; }

        [NotMapped]
        public List<SelectListItem> Roles { get; } = new() {
            new SelectListItem { Value = "Player", Text = "Speler" },
            new SelectListItem { Value = "Admin", Text = "Beheerder" },
            new SelectListItem { Value = "Mediator", Text = "Mediator"  },
        };
    }
}