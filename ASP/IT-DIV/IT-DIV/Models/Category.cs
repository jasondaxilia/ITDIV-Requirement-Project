using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IT_DIV.Models
{
    [Table("Category")]
    public class Category
    {
        [Key]
        public int CategoryID { get; set; }

        [MaxLength(255)]
        public string CategoryName { get; set; }

        [ForeignKey("User")]
        public Guid UserID { get; set; }
    }
}
