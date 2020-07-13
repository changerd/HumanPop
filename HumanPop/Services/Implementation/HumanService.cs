using AutoMapper;
using DBRepository.Interfaces;
using HumanPop.Helpers;
using HumanPop.Services.Interfaces;
using HumanPop.ViewModels;
using Microsoft.Extensions.Configuration;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace HumanPop.Services.Implementation
{
    public class HumanService : IHumanService
    {
        IHumanRepository _repository;        
        IConfiguration _config;
        IMapper _mapper;

        public HumanService(IHumanRepository repository, IConfiguration configuration, IMapper mapper)
        {
            _repository = repository;            
            _config = configuration;
            _mapper = mapper;
        }

        public async Task<Page<HumansViewModels>> GetHumans(int pageIndex, int userId)
        {            
            var pageSize = _config.GetValue<int>("pageSize");
            var page = await _repository.GetHumans(pageIndex, pageSize, userId);
            var result = _mapper.ToMappedPage<Human, HumansViewModels>(page);
            return result;
        }

        public async Task<Human> GetHuman(int humanId)
        {
            return await _repository.GetHuman(humanId);
        }

        public async Task AddHuman(AddHumanRequest request)
        {
            var human = _mapper.Map<AddHumanRequest, Human>(request);
            await _repository.AddHuman(human);
        }

        public async Task EditHuman(EditHumanRequest request)
        {
            var human = _mapper.Map<EditHumanRequest, Human>(request);
            await _repository.EditHuman(human);
        }

        public async Task DeleteHuman(int humanId)
        {
            await _repository.DeleteHuman(humanId);
        }
    }
}
