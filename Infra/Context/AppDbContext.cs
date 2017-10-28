using Microsoft.EntityFrameworkCore;
using Npgsql;
using RestauranteApi.Infra.Entity;

namespace RestauranteApi.Infra.Context
{
  public class AppDbContext : DbContext
  {
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
      var connection = this.Database.GetDbConnection() as NpgsqlConnection;
      // if (connection != null)
      //   connection.UserCertificateValidationCallback = delegate { return true; };
    }
    public DbSet<Item> Item { get; set; }
    public DbSet<Pedido> Pedido { get; set; }
  }
}