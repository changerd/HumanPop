using DBRepository.Interfaces;
using HumanPop.Services.Interfaces;
using HumanPop.ViewModels;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Threading.Tasks;

namespace HumanPop.Services.Implementation
{
    public class IdentityService : IIdentityService
    {
        IIdentityRepository _repository;

        public IdentityService(IIdentityRepository repository)
        {
            _repository = repository;
        }

        public async Task<User> GetUser(string username)
        {
            return await _repository.GetUser(username);
        }

        public async Task RegisterUser(User user)
        {
            await _repository.RegisterUser(user);
        }
    }
}
