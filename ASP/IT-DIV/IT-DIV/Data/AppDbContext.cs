using Microsoft.EntityFrameworkCore;
using IT_DIV.Models;
using Microsoft.AspNetCore.Mvc;
using IT_DIV.Models.Results;

namespace IT_DIV.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        { 
        }

        public DbSet<User> User { get; set; }
        public DbSet<Category> Category { get; set; }
    }
}