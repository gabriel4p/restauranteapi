using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace RestauranteApi.Contract
{
  public interface IRepository<T>
  {
    IQueryable<T> GetAll();
    T GetById(int id);
    void Add(T t);
    void Update(T t);
    void Remove(T t);
  }
}