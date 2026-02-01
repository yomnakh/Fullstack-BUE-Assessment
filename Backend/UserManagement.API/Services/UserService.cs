using System.Net.Cache;
using System.Security.Cryptography.Xml;
using UserManagement.API.DTOs;
using UserManagement.API.Models;
using UserManagement.API.Repositories.Interfaces;
using UserManagement.API.Services.Interfaces;

namespace UserManagement.API.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly ILogger<UserService> _logger;  

        public UserService(IUserRepository userRepository)  
        {
            _userRepository = userRepository;
        }

        public async Task<GetUserDto> CreateAsync(CreateUserDto userDto)
        {
            var user = new User(userDto.Name, userDto.Email, userDto.Phone, userDto.Age);
            var createdUser = await _userRepository.AddAsync(user);

            return new GetUserDto
            {
                Id = createdUser.Id,
                Name = createdUser.Name,
                Email = createdUser.Email,
                Phone = createdUser.Phone,
                Age = createdUser.Age
            };
        }

        public async Task<IEnumerable<GetUserDto>> GetAllAsync()
        {
            try
            {
                var users = await _userRepository.GetAllAsync();

                return users.Select(x => new GetUserDto
                {
                    Id = x.Id,
                    Name = x.Name,
                    Email = x.Email,
                    Phone = x.Phone,
                    Age = x.Age
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while retrieving users");
                throw;
            }
        }


        public async Task<GetUserDto?> GetByIdAsync(int id)
        {
            var user = await _userRepository.GetByIdAsync(id);
            if (user == null) return null;

            return new GetUserDto
            {
                Id = user.Id,
                Name = user.Name,
                Email = user.Email,
                Phone = user.Phone,
                Age = user.Age
            };
        }

        public async Task UpdateAsync(int id, CreateUserDto userDto)
        {
            var user = await _userRepository.GetByIdAsync(id);
            if (user == null)
            {
                throw new KeyNotFoundException($"User with id {id} not found.");
            }

            user.Update(userDto.Name, userDto.Email, userDto.Phone, userDto.Age);
            await _userRepository.UpdateAsync(user);
        }
    }
}