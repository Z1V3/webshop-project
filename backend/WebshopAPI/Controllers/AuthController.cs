using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebshopAPI.Models;
using WebshopAPI.DTOs;
using WebshopAPI.Utils;
using YourProjectName.Utils;

namespace WebshopAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly WebShopDBContext _context;
        private readonly ILogger<AuthController> _logger;

        public AuthController(WebShopDBContext context, ILogger<AuthController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Email == loginDto.Email);

            if (user == null || !PasswordHasher.VerifyPassword(loginDto.Password, user.Password))
            {
                return Unauthorized(new { message = "Invalid credentials" });
            }

            var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .Build();

            JwtTokenGenerator jwtTokenGenerator = new (configuration);
            var token = jwtTokenGenerator.GenerateJwtToken(user);
            return Ok(new { token, user });
        }

    }
}
