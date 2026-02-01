using UserManagement.API.DTOs;

namespace UserManagement.API.Services.Interfaces
{
    public interface IUserService
    {
        Task<IEnumerable<GetUserDto>> GetAllAsync();
        Task<GetUserDto?> GetByIdAsync(int id);
        Task<GetUserDto> CreateAsync(CreateUserDto userDto);
        Task UpdateAsync(int id, CreateUserDto userDto);
    }
}
