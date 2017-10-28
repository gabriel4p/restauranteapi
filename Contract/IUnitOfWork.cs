using RestauranteApi.Infra.Repository;

namespace RestauranteApi.Contract
{
  public interface IUnitOfWork
  {
    ItemRepository Item { get; }
    PedidoRepository Pedido { get; }

    void Commit();
    void Rollback();
    void CreateTransaction();
    void Save();
  }
}