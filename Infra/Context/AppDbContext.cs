using Microsoft.EntityFrameworkCore;
using RestauranteApi.Infra.Entity;

namespace RestauranteApi.Infra.Context
{
  public class AppDbContext : DbContext
  {
    public AppDbContext(DbContextOptions<AppDbContext> options) :base(options)  {}
    public DbSet<Item> Item { get; set; }
    public DbSet<Pedido> Pedido { get; set; }
  }
}