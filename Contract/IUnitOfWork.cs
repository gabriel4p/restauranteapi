using Infra.Repository;

namespace Contract
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