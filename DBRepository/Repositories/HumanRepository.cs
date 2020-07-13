using DBRepository.Interfaces;
using Microsoft.EntityFrameworkCore;
using Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;

namespace DBRepository.Repositories
{
    public class HumanRepository: BaseRepository, IHumanRepository
    {
        public HumanRepository(string connectionString, IRepositoryContextFactory contextFactory): base(connectionString, contextFactory) { }
        public async Task<Page<Human>> GetHumans(int index, int pageSize, int userId)
        {
            var result = new Page<Human> { CurrentPage = index, PageSize = pageSize };
            
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var query = context.Humans.Where(u => u.UserId == userId).AsQueryable();

                result.TotalPages = await query.CountAsync();
                result.Records = await query.Skip(index * pageSize).Take(pageSize).ToListAsync();
            }

            return result;
        }

        public async Task<Human> GetHuman(int humanId)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                return await context.Humans.FindAsync(humanId);
            }
        }

        public async Task AddHuman(Human human)
        {
            using(var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                await context.Humans.AddAsync(human);
                await context.SaveChangesAsync();
            }
        }

        public async Task EditHuman(Human human)
        {
            using(var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                context.Entry(human).State = EntityState.Modified;
                await context.SaveChangesAsync();
            }
        }

        public async Task DeleteHuman(int humanId)
        {
            using(var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var human = new Human() { HumanId = humanId };
                context.Remove(human);
                await context.SaveChangesAsync();
            }
        }
    }
}
