using HumanPop.Helpers;
using HumanPop.Services.Interfaces;
using HumanPop.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace HumanPop.Controllers
{
    [Route("api/[controller]")]
    public class IdentityController : Controller
    {
        IIdentityService _service;

        public IdentityController(IIdentityService service)
        {
            _service = service;
        }

		[Route("token")]
		[HttpPost]
		public async Task<IActionResult> Token([FromBody]IdentityViewModel model)
		{
			var identity = await GetIdentity(model.Username, model.Password);
			if (identity == null)
			{
				return Unauthorized();
			}

			var now = DateTime.UtcNow;
			// создаем JWT-токен
			var jwt = new JwtSecurityToken(
					issuer: AuthOptions.ISSUER,
					audience: AuthOptions.AUDIENCE,
					notBefore: now,
					claims: identity.Claims,
					expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
					signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
			var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

			var response = new
			{
				access_token = encodedJwt,
				username = identity.Name
			};

			return Ok(response);
		}

		private async Task<ClaimsIdentity> GetIdentity(string userName, string password)
		{
			ClaimsIdentity identity = null;
			var user = await _service.GetUser(userName);
			if (user != null)
			{
				var sha256 = new SHA256Managed();
				var passwordHash = Convert.ToBase64String(sha256.ComputeHash(Encoding.UTF8.GetBytes(password)));
				if (passwordHash == user.Password)
				{
					var claims = new List<Claim>
					{
						new Claim(ClaimsIdentity.DefaultNameClaimType, user.Login),
					};
					identity = new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
				}
			}
			return identity;
		}

		public async Task RegisterUser([FromBody]RegisterViewModel request)
		{
			if(String.Equals(request.Password, request.ConfirmPassword))
			{
				var sha256 = new SHA256Managed();
				var passwordHash = Convert.ToBase64String(sha256.ComputeHash(Encoding.UTF8.GetBytes(request.Password)));
				if (passwordHash == request.Password)
				{
					await _service.RegisterUser(new Models.User
					{
						Login = request.Username,
						Password = passwordHash
					});
				}
			}
		}
	}
}
