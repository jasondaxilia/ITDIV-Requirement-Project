using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace IT_DIV.Models.Results
{
    public class GetCategoryResult
    {
        public int CategoryID { get; set; }

        public string CategoryName { get; set; }

        public Guid UserID { get; set; }
    }
}
