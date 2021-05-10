using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace FullBelly.Models
{
    public class FullBellyContext : IdentityDbContext
    {
        public FullBellyContext(DbContextOptions<FullBellyContext> options) : base(options) { }
        public DbSet<Donation> Donations { get; set; }
        public DbSet<User> User { get; set; }
    }
}