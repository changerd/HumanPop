using AutoMapper;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HumanPop.Helpers
{
    public static class MappingExtensions
    {
        public static Page<TDestination> ToMappedPage<TSource, TDestination>(this IMapper mapper, Page<TSource> page)
        {
            IEnumerable<TDestination> sourceList = mapper.Map<IEnumerable<TSource>, IEnumerable<TDestination>>(page?.Records);
            Page<TDestination> pageResult = new Page<TDestination>(sourceList)
            {
                CurrentPage = page.CurrentPage,
                PageSize = page.PageSize,
                TotalPages = page.TotalPages,                
            };
            return pageResult;
        }
    }
}
