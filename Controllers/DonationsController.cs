using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FullBelly.Models;

namespace FullBelly.Controllers
{
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/[controller]")]
    public class DonationsController : ControllerBase
    {
        private readonly FullBellyContext _db;

        public DonationsController(FullBellyContext db)
        {
            _db = db;
        }
        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Donation>>> Get()
        {
            var donations = await _db.Donations.ToListAsync();
            return Ok(donations);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Donation>> GetDonation(int id)
        {
            Donation donation = await _db.Donations.FindAsync(id);
            if (donation == null)
            {
                return NotFound();
            }
            return donation;
        }

        [HttpPost]
        public async Task<ActionResult<Donation>> Post(Donation donation)
        {
            _db.Donations.Add(donation);
            await _db.SaveChangesAsync();
            return CreatedAtAction(nameof(GetDonation), new { id = donation.DonationId}, donation);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Donation donation)
        {
            if (id != donation.DonationId)
            {
                return BadRequest();
            }
            _db.Entry(donation).State = EntityState.Modified;

            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DonationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDonation(int id)
        {
            Donation donation = await _db.Donations.FindAsync(id);
            if (donation == null)
            {
                return NotFound();
            }
            _db.Donations.Remove(donation);
            await _db.SaveChangesAsync();
            return NoContent();
        }

        private bool DonationExists(int id)
        {
            return _db.Donations.Any(entry => entry.DonationId == id);
        }
    }
}