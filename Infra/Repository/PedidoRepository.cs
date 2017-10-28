using System.Linq;
using RestauranteApi.Contract;
using RestauranteApi.Infra.Context;
using RestauranteApi.Infra.Entity;

namespace RestauranteApi.Infra.Repository
{
  public class PedidoRepository : BaseRepository<Pedido>, IRepository<Pedido>
  {
    public PedidoRepository(AppDbContext context) : base(context) { }

    public Pedido GetById(int id)
    {
      return _dbSet.FirstOrDefault(p => p.Id == id);
    }
  }
}