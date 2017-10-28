using System;
using System.Linq.Expressions;

namespace RestauranteApi.Helpers.Specification
{
  public abstract class BaseSpecification<T>
  {
    protected Expression<Func<T, object>>[] _expressions;
    protected T _target;
    protected string _notSatisfiedReasonText;

    public BaseSpecification(T target, string notSatisfiedReasonText, params Expression<Func<T, object>>[] expressions)
    {
      _notSatisfiedReasonText = notSatisfiedReasonText;
      _target = target;
      _expressions = expressions;
    }

    protected MemberExpression GetMemberExpression(Expression expression)
    {
      LambdaExpression lambda = expression as LambdaExpression;
      if (lambda == null)
        throw new ArgumentException("expression");
      MemberExpression member = null;
      if (lambda.Body.NodeType == ExpressionType.Convert)
        member = ((UnaryExpression)lambda.Body).Operand as MemberExpression;
      else if (lambda.Body.NodeType == ExpressionType.MemberAccess)
        member = lambda.Body as MemberExpression;
      else
        throw new ArgumentException("expression");
      return member;
    }

    protected void ThrowSpecificationException(string propertyName)
    {
      throw new SpecificationException(string.Format(_notSatisfiedReasonText, propertyName, typeof(T).Name));
    }
  }
}