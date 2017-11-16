using System;
using System.Linq.Expressions;
using System.Reflection;
using RestauranteApi.Contract;

namespace RestauranteApi.Helpers.Specification
{
  public class NullOrDefaultPropertySpecification<T> : BaseSpecification<T>, ISpecification
  {
    public NullOrDefaultPropertySpecification(T target, params Expression<Func<T, object>>[] expressions)
      : base(target, "A propriedade '{0}' de '{1}' não pode ser nula ou possuir valor padrão.", expressions)
    {

    }

    public void Validate()
    {
      foreach (var exp in _expressions)
      {
        MemberExpression memberExpression = GetMemberExpression(exp);
        string propertyName = memberExpression.Member.Name;
        object propertyValue = _target.GetType().GetRuntimeProperty(propertyName).GetValue(_target);

        if (propertyValue == null)
          ThrowSpecificationException(propertyName);
        else if (propertyValue.GetType() == typeof(string))
        {
          if (string.IsNullOrEmpty((string)propertyValue))
            ThrowSpecificationException(propertyName);
        }
        else
        {
          decimal number = 0;
          if (decimal.TryParse(propertyValue.ToString(), out number))
          {
            if (number == default(decimal))
              ThrowSpecificationException(propertyName);
          }
        }
      }
    }
  }
}