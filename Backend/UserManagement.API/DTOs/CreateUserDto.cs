using System.ComponentModel.DataAnnotations;

namespace UserManagement.API.DTOs
{
    public class CreateUserDto
    {
        [Required]
        [StringLength(100)]
        public string Name { get; set; } = string.Empty;
        [Required]
        [StringLength(100)]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;

        [Required]
        [StringLength(100)]
        [Phone]
        public string Phone { get; set; } = string.Empty;
        [Range(0, 150)]
        public int Age { get; set; }
    }
}
