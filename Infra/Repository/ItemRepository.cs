using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using RestauranteApi.Contract;
using RestauranteApi.Infra.Context;
using RestauranteApi.Infra.Entity;

namespace RestauranteApi.Infra.Repository
{
  public class ItemRepository : BaseRepository<Item>, IRepository<Item>
  {
    public ItemRepository(AppDbContext context) : base(context) { }

    /// <summary>
    /// Obter um item pelo identificador.
    /// </summary>
    /// <param name="id"></param>
    /// <returns>Retorna o Item ou null se a busca não houver resultados.</returns>
    public Item GetById(int id)
    {
      return _dbSet.FirstOrDefault(p => p.Id == id);
    }
  }
}