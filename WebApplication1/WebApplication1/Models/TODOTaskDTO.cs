using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class TODOTaskDTO
    {
        public int ID { get; set; }
        public string TaskName { get; set; }
        public string DueDate { get; set; }
        public bool Active { get; set; }
    }
}
