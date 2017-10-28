using RestauranteApi.Infra.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using AutoMapper;

namespace RestauranteApi.Infra.Repository
{
  public abstract class BaseRepository<T> where T : class
  {
    protected readonly AppDbContext _context;
    protected readonly DbSet<T> _dbSet;

    public BaseRepository(AppDbContext context)
    {
      _context = context;
      _dbSet = _context.Set<T>();
    }

    public IQueryable<T> GetAll()
    {
      return _dbSet.AsNoTracking();
    }

    public void Add(T t)
    {
      _dbSet.Add(t);
    }
    public void Update(T t)
    {
      _dbSet.Update(t);
    }
    public void Remove(T t)
    {
      _dbSet.Remove(t);
    }
  }
}