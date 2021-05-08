using System;

namespace FullBelly.Models
{
    public class Donation
    {
        public int DonationId { get; set; }
        public string DonorName { get; set; }
        public string DonationName { get; set; }
        public string DonationDescription { get; set; }
        public int Quantity { get; set; }
        public string QuantityType { get; set; }
        public string Location { get; set; }
        public DateTime Posted { get; set; }
        public int UserId { get; set; }
    }
}