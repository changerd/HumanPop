using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DBRepository
{
    public static class DbInitializer
    {
        public async static Task Initialize(RepositoryContext context)
        {
            await context.Database.MigrateAsync();

            await context.SaveChangesAsync().ConfigureAwait(false);
        }
    }
}
