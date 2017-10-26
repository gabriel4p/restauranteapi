using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Contract;
using RestauranteApi.Infra.Context;
using RestauranteApi.Infra.Entity;

namespace Infra.Repository
{
  public class ItemRepository : BaseRepository<Item>, IRepository<Item>
  {
    public ItemRepository(AppDbContext context) : base(context) { }

    public Item GetById(int id)
    {
      return _dbSet.FirstOrDefault(p => p.Id == id);
    }
  }
}