using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HumanPop.ViewModels;
using Models;

namespace HumanPop.Services.Interfaces
{
    public interface IHumanService
    {
        Task<Page<HumansViewModels>> GetHumans(int pageIndex);
        Task<Human> GetHuman(int humanId);
        Task AddHuman(AddHumanRequest request);
        Task EditHuman(EditHumanRequest request);
        Task DeleteHuman(int humanId);
    }
}
