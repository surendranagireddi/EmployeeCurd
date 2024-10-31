using EmployeeApp.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeeApp.DBContext
{
    public class EmployeeDbContext : DbContext
    {
        public EmployeeDbContext(DbContextOptions<EmployeeDbContext> options) : base(options)
        {

        }
        public DbSet<Employee> employees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure the Employee entity
            modelBuilder.Entity<Employee>()
                .HasKey(e => e.id);
            modelBuilder.Entity<Employee>()
           .Property(e => e.id)
           .ValueGeneratedOnAdd();

            modelBuilder.Entity<Employee>()
                .Property(e => e.name)
                .IsRequired()
                .HasMaxLength(100);

            modelBuilder.Entity<Employee>()
                .Property(e => e.email)
                .IsRequired()
                .HasMaxLength(50);

            modelBuilder.Entity<Employee>()
                .Property(e => e.salary)
                .HasColumnType("double precision");
        }
    }
}