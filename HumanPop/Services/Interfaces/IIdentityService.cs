using HumanPop.ViewModels;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HumanPop.Services.Interfaces
{
    public interface IIdentityService
    {
        Task<User> GetUser(string username);
        Task RegisterUser(User user);
    }
}
