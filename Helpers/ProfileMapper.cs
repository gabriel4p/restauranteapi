using AutoMapper;
using EF = RestauranteApi.Infra.Entity;
using DTO = RestauranteApi.DTO;

namespace RestauranteApi.Helpers
{
  public class ProfileMapper : Profile
  {
    public ProfileMapper()
    {
      CreateMap<DTO.Item, EF.Item>();
      CreateMap<EF.Item, DTO.Item>();

      CreateMap<DTO.Pedido, EF.Pedido>();
      CreateMap<EF.Pedido, DTO.Pedido>();
    }
  }
}