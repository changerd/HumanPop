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
        public string BirthDate { get; set; }
        public string NumOfArrests { get; set; }
        public int UserId { get; set; }
    }
}
