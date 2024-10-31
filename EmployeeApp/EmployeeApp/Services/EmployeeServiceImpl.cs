using EmployeeApp.Models;
using EmployeeApp.Repositorys;

namespace EmployeeApp.Services
{
    public class EmployeeServiceImpl : IEmployeeService
    {
        private readonly IEmployeeRepository _employeeRepository;

        public EmployeeServiceImpl(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }

        public async Task<IEnumerable<Employee>> GetAllEmployeesAsync()
        {
            return await _employeeRepository.GetAllEmployeesAsync();
        }

        public async Task<Employee> GetEmployeeByIdAsync(int id)
        {
            return await _employeeRepository.GetEmployeeByIdAsync(id);
        }

        public async Task AddEmployeeAsync(Employee employee)
        {
            // Business logic can be added here (e.g., validation)
            await _employeeRepository.AddEmployeeAsync(employee);
        }

        public async Task UpdateEmployeeAsync(Employee employee)
        {
            // Additional business logic can be added here
            await _employeeRepository.UpdateEmployeeAsync(employee);
        }

        public async Task DeleteEmployeeAsync(int id)
        {
            // Additional business logic can be added here
            await _employeeRepository.DeleteEmployeeAsync(id);
        }
    }
}
