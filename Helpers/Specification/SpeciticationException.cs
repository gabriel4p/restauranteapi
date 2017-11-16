using System;

namespace RestauranteApi.Helpers.Specification
{
  public class SpecificationException : Exception
  {
    public SpecificationException(string message) : base(message) { }
  }
}