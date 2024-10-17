using System.ComponentModel.DataAnnotations;

namespace IT_DIV.Models.Requests
{
    public class CreateUserRequest
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        public string UserEmail { get; set; }

        [Required]
        public string UserPassword { get; set; }
    }
}
