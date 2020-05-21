using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HumanPop.ViewModels
{
    public class EditHumanRequest
    {
        public int HumanId { get; set; }
        public string FirstName { get; set; }
        public string SurName { get; set; }
        public string BirthDate { get; set; }
        public string NumOfArrests { get; set; }
    }
}
