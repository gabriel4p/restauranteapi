using Contract;
using Infra.Repository;
using Microsoft.EntityFrameworkCore.Storage;
using RestauranteApi.Infra.Context;

namespace Infra.UnitOfWork
{
  public class UnitOfWork : IUnitOfWork
  {
    private ItemRepository _itemRepository;
    private PedidoRepository _pedidoRepository;
    private readonly AppDbContext _context;
    private IDbContextTransaction _transaction;

    public UnitOfWork(AppDbContext context)
    {
      _context = context;
    }

    public ItemRepository Item => _itemRepository = _itemRepository ?? new ItemRepository(_context);

    public PedidoRepository Pedido => _pedidoRepository = _pedidoRepository ?? new PedidoRepository(_context);

    public void Commit()
    {
      if (_transaction != null)
      {
        _transaction.Commit();
        _transaction.Dispose();
      }
    }

    public void CreateTransaction()
    {
      _transaction = _context.Database.BeginTransaction();
    }

    public void Rollback()
    {
      if (_transaction != null)
      {
        _transaction.Rollback();
        _transaction.Dispose();
      }
    }

    public void Save()
    {
      _context.SaveChanges();
    }
  }
}