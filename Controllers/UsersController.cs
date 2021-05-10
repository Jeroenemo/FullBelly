using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FullBelly.Models;
using System;

namespace FullBelly.Controllers
{
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly FullBellyContext _db;

        public UsersController(FullBellyContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> Get()
        {
            var query = _db.User.Include(entry => entry.Donations).AsQueryable();

            return await query.ToListAsync();
        }

        [HttpGet("{type}")]
        public async Task<ActionResult<IEnumerable<User>>> GetUser(string userName)
        {
            var query = _db.User.Include(entry => entry.Donations).AsQueryable();

            if (userName != null)
            {
                query = query.Where(entry => entry.Username == userName);
            }
            else
            {
                return NotFound();
            }
            return await query.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<User>> Post(User user)
        {
            if ((_db.User.FirstOrDefault(entry => entry.Username == user.Username)) != null)
            {
                return BadRequest();
            }
        else 
        {
            _db.User.Add(user);
            await _db.SaveChangesAsync();
        }

        return CreatedAtAction("Post", new { id = user.Id }, user);
        }
    }
}