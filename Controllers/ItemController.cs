using System;
using System.Linq;
using Contract;
using Microsoft.AspNetCore.Mvc;
using RestauranteApi.Infra.Context;
using RestauranteApi.Infra.Entity;

namespace Controllers
{
  [Route("api/[controller]")]
  public class ItemController : BaseController
  {
    public ItemController(IUnitOfWork uow) : base(uow) { }
    public object Get()
    {
      try
      {
        //return _context.Item.ToList();
        // Item item = new Item()
        // {
        //   Categoria = "Prato",
        //   Titulo = "Massa Carbonara",
        //   Descricao = "Uma maravilhosa massa ao queijo",
        //   UrlImagem = "http://imagem.com",
        //   Valor = 28.97
        // };

        // _context.Item.Add(item);

        // item = new Item()
        // {
        //   Categoria = "Sobremesa",
        //   Titulo = "Mousse Maracujá",
        //   Descricao = "Mousse para complementar uma boa refeição.",
        //   UrlImagem = "http://imagem.com",
        //   Valor = 7.32
        // };

        // _context.Item.Add(item);
        // _context.SaveChanges();
        return _uow.Item.GetAll().ToList();
      }
      catch (Exception ex)
      {
        return ex;
      }
    }
  }
}