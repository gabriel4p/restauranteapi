using System;
using AutoMapper;
using RestauranteApi.Contract;
using RestauranteApi.DTO;
using RestauranteApi.Helpers.Specification;
using RestauranteApi.Infra.Context;

namespace RestauranteApi.Controllers
{
  public abstract class BaseController
  {
    protected readonly IUnitOfWork _uow;
    protected readonly IMapper _mapper;

    public BaseController(IUnitOfWork uow, IMapper mapper)
    {
      _uow = uow;
      _mapper = mapper;
    }

    protected Response CreateResponse(object data)
    {
      return new Response() { Data = data };
    }

    protected Response CreateResponse(Exception ex)
    {
      int status = ex is SpecificationException ? 422 : 500;      
      return new Response() { Message = ex.Message, StatusCode = status, Exception = ex };
    }

    protected Response NotFound()
    {
      return new Response() { Message = "Not Found", StatusCode = 404 };
    }

    protected Response Unauthorized()
    {
      return new Response() { Message = "Unauthorized", StatusCode = 401 };
    }

    protected Response NoContent()
    {
      return new Response() { Message = "No Content", StatusCode = 204 };
    }

    protected Response Ok(string message = null)
    {
      string msg = message == null ? "Ok" : message;
      return new Response() { Message = msg, StatusCode = 200 };
    }
  }
}