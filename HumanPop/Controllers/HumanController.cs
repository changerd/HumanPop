using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DBRepository.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace HumanPop.Controllers
{
    [Route("api/[controller]")]
    public class HumanController : Controller
    {
        IHumanRepository _humanRepository;

        public HumanController(IHumanRepository humanRepository)
        {
            _humanRepository = humanRepository;
        }

        [Route("page")]
        [HttpGet]
        public async Task<Page<Human>> GetHumans(int pageIndex)
        {
            return await _humanRepository.GetHumans(pageIndex, 10);
        }
    }
}