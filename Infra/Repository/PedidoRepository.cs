using System.Linq;
using Contract;
using RestauranteApi.Infra.Context;
using RestauranteApi.Infra.Entity;

namespace Infra.Repository
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