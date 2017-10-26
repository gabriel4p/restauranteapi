using Contract;
using RestauranteApi.Infra.Context;

namespace Controllers
{
  public abstract class BaseController
  {
    protected IUnitOfWork _uow;
    public BaseController(IUnitOfWork uow)
    {
      _uow = uow;
    }
  }
}