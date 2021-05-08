using System.Collections.Generic;

namespace FullBelly.Models
{
    public class User
    {
        public User()
        {
          this.Donations = new HashSet<Donation>();
        }
        public string Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public virtual ICollection<Donation> Donations { get; set; }
    }
}