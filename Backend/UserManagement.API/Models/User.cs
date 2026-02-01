using System.ComponentModel.DataAnnotations;

namespace UserManagement.API.Models
{
    public class User
    {
        public User(string name,string email,string phone, int age )
        {
            Name = name;
            Email = email;
            Phone = phone;
            Age = age;
        
        }
        private User() { }

        public int Id { get; private set; }
        [Required]
        [StringLength(100)]
        public string Name { get;private set; }
        [Required]
        [StringLength(100)]
        [EmailAddress]
        public string Email { get;private set; }
        [Required]
        [StringLength(100)]
        [Phone]
        public string Phone { get; private set; }
        [Range(0, 120)]
        public int Age { get; private set; }

        public void Update(String name, string email, string phone, int age)
        {
            Name = name;
            Email = email;
            Phone = phone;
            Age = age;
        }
    }
}
