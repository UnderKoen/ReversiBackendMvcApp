using Microsoft.EntityFrameworkCore;
using ReversiMvcApp.Models;

namespace ReversiMvcApp.Data {
    public class ReversiDbContext : DbContext {
        public ReversiDbContext(DbContextOptions options) : base(options) { }
        
        public DbSet<Speler> Spelers { get; set; }
    }
}