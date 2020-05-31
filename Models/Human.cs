using System;

namespace Models
{
    public class Human
    {
        public int HumanId { get; set; }
        public string FirstName { get; set; }
        public string SurName { get; set; }        
        public DateTime BirthDate { get; set; }
        public int NumOfArrests { get; set; }
        public int UserId { get; set; }
    }
}
