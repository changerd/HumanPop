using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HumanPop.ViewModels
{
    public class AddHumanRequest
    {
        public string FirstName { get; set; }
        public string SurName { get; set; }
        public DateTime BirthDate { get; set; }
        public int NumOfArrests { get; set; }
    }
}
