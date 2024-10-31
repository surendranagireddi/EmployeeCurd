using EmployeeApp.DBContext;
using EmployeeApp.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeeApp.Repositorys
{
    public class EmployeeRepositoryImpl : IEmployeeRepository
    {
        private readonly EmployeeDbContext _employeeDbContext;

        public EmployeeRepositoryImpl(EmployeeDbContext employeeDbContext)
        {
            _employeeDbContext= employeeDbContext;
        }

        public async Task AddEmployeeAsync(Employee employee)
        {
            Console.WriteLine($"Before adding: Id = {employee.id}, Name = {employee.name}");

            await _employeeDbContext.employees.AddAsync(employee);
            await _employeeDbContext.SaveChangesAsync();
            Console.WriteLine("Employee added successfully.");
        }

        public async Task DeleteEmployeeAsync(int id)
        {
            var employee = await _employeeDbContext.employees.FindAsync(id);
             if(employee != null)
            {
                _employeeDbContext.employees.Remove(employee);
                await _employeeDbContext.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<Employee>> GetAllEmployeesAsync()
        {
            return await _employeeDbContext.employees.ToListAsync();
        }

        public async Task<Employee> GetEmployeeByIdAsync(int id)
        {
            return await _employeeDbContext.employees.FindAsync(id);
        }

        public async Task UpdateEmployeeAsync(Employee employee)
        {
            _employeeDbContext.employees.Update(employee);
            await _employeeDbContext.SaveChangesAsync();
        }
    }
}
