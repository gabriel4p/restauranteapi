using Contract;
using Microsoft.AspNetCore.Mvc;

namespace Controllers
{
  [Route("api/[controller]")]
  public class PedidoController : BaseController
  {
    public PedidoController(IUnitOfWork uow) : base(uow) { }
  }
}