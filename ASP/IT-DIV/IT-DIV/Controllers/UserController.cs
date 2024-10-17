using IT_DIV.Data;
using IT_DIV.Models;
using IT_DIV.Models.Requests;
using IT_DIV.Models.Results;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;

namespace IT_DIV.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UserController(AppDbContext context)
        {
            _context = context;
        }
        
        // POST api/<UserController>
        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] CreateUserRequest createUserRequest)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            string pattern = @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";

            var CheckUser = _context.User.Where(x => x.UserEmail == createUserRequest.UserEmail).Count();

            if(CheckUser > 0)
            {
                return NotFound("User Already Exist");
            }

            var CheckPassword = _context.User.Where(x => x.UserPassword == createUserRequest.UserPassword).Count();

            var user = new User
            {
                UserName = createUserRequest.UserName,
                UserEmail = createUserRequest.UserEmail,
                UserPassword = createUserRequest.UserPassword
            };

            _context.User.Add(user);
            await _context.SaveChangesAsync();
            return Ok("Register Completed");
        }

        // POST api/<UserController>
        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] GetUserRequest getUserRequest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var CheckUser = await _context.User.SingleOrDefaultAsync(x => x.UserEmail == getUserRequest.UserEmail);
            if (CheckUser == null)
            {
                return NotFound("Invalid Email Address");
            }
            if(CheckUser.UserPassword != getUserRequest.UserPassword)
            {
                return NotFound("Wrong Password");
            }
            return Ok(CheckUser);
        }
    }
}