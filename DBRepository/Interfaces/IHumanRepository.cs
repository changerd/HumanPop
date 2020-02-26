using Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DBRepository.Interfaces
{
    public interface IHumanRepository
    {
        Task<Page<Human>> GetHumans(int index, int pageSize);
        Task<Human> GetHuman(int humanId);
        Task AddHuman(Human human);
        Task EditHuman(Human human);
        Task DeleteHuman(int humanId);
    }
}
