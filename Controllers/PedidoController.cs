using AutoMapper;
using RestauranteApi.Contract;
using Microsoft.AspNetCore.Mvc;

namespace RestauranteApi.Controllers
{
  [Route("api/[controller]")]
  public class PedidoController : BaseController
  {
    public PedidoController(IUnitOfWork uow, IMapper mapper) : base(uow, mapper) { }
  }
}