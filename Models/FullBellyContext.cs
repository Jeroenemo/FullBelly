using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace FullBelly.Models
{
    public class FullBellyAPIContext : IdentityDbContext
    {
        public FullBellyAPIContext(DbContextOptions<FullBellyAPIContext> options) : base(options) { }
        public DbSet<Donation> Donations { get; set; }
        public DbSet<User> User { get; set; }
    }
}