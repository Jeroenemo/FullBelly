using System;
using Microsoft.EntityFrameworkCore;

namespace FullBelly.Models
{
    public class FullBellyContext : DbContext
    {
        public FullBellyContext(DbContextOptions<FullBellyContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Donation>()
                .HasData(
                    new Donation { DonationId = 1, Donor = "Jeroen", DonationName = "cheese", Address = "8445 55th Ave S", City = "Seattle", State = "WA", Zip = "98118", Lat = 47.5272298, Lng = -122.2640512 },
                    new Donation { DonationId = 2, Donor = "Hannah", DonationName = "waterloo", Address = "8445 55th Ave S", City = "Seattle", State = "WA", Zip = "98118", Lat = 47.5272298, Lng = -122.2640523 },
                    new Donation { DonationId = 3, Donor = "Attila", DonationName = "kibble", Address = "8445 55th Ave S", City = "Seattle", State = "WA", Zip = "98118", Lat = 47.5272298, Lng = -122.2640587 },
                    new Donation { DonationId = 4, Donor = "Koji", DonationName = "eggs", Address = "8445 55th Ave S", City = "Seattle", State = "WA", Zip = "98118", Lat = 47.5272298, Lng = -122.2640512 }
                );
        }
        public DbSet<Donation> Donations { get; set; }
    }
}