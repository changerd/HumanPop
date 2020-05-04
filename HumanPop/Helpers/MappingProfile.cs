using AutoMapper;
using HumanPop.ViewModels;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HumanPop.Helpers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Human, HumansViewModels>();
            CreateMap<AddHumanRequest, Human>();
            CreateMap<EditHumanRequest, Human>();
        }
    }
}
