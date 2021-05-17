using System;

namespace FullBelly.Models
{
    public class Donation
    {
        public int DonationId { get; set; }
        public string Donor { get; set; }
        public string DonationName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public double Lat { get; set; }
        public double Lng { get; set; }
    }
}