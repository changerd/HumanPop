﻿using DBRepository.Interfaces;
using Microsoft.EntityFrameworkCore;
using Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DBRepository.Repositories
{
    public class IdentityRepository : BaseRepository, IIdentityRepository
    {
        public IdentityRepository(string connectionString, IRepositoryContextFactory contextFactory) : base(connectionString, contextFactory) { }

        public async Task<User> GetUser(string username)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                return await context.Users.FirstOrDefaultAsync(u => u.Login == username);
            }
        }

        public async Task RegisterUser(User user)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                await context.Users.AddAsync(user);
                await context.SaveChangesAsync();
            }
        }
    }
}
