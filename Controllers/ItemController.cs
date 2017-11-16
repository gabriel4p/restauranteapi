using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using RestauranteApi.Contract;
using Microsoft.AspNetCore.Mvc;
using RestauranteApi.Infra.Entity;
using RestauranteApi.Helpers.Specification;

namespace RestauranteApi.Controllers
{
  [Route("api/[controller]")]
  public class ItemController : BaseController
  {
    public ItemController(IUnitOfWork uow, IMapper mapper) : base(uow, mapper) { }

    [HttpGet("{id}")]
    public DTO.Response Get(int id)
    {
      try
      {
        var item = _uow.Item.GetById(id);
        var dto = _mapper.Map<DTO.Item>(item);
        return CreateResponse(item);
      }
      catch (Exception ex)
      {
        return CreateResponse(ex);
      }
    }

    [HttpGet]
    public DTO.Response Get()
    {
      try
      {
        var items = _uow.Item.GetAll();
        var dto = _mapper.Map<List<DTO.Item>>(items);
        return CreateResponse(dto);
      }
      catch (Exception ex)
      {
        return CreateResponse(ex);
      }
    }

    [HttpPut]
    public DTO.Response Put(DTO.Item item)
    {
      try
      {
        _uow.Item.Update(_mapper.Map<Item>(item));
        _uow.Save();
        return Ok("Atualizado com sucesso!");
      }
      catch (Exception ex)
      {
        return CreateResponse(ex);
      }
    }

    [HttpPost]
    public DTO.Response Post(DTO.Item item)
    {
      try
      {
        new NullOrDefaultPropertySpecification<DTO.Item>(item, 
        p => p.Categoria,
        p => p.Descricao,
        p => p.Titulo,
        p => p.Valor,
        p => p.UrlImagem).Validate();
        _uow.Item.Add(_mapper.Map<Item>(item));
        _uow.Save();
        return Ok("Inserido com sucesso!");
      }
      catch (Exception ex)
      {
        return CreateResponse(ex);
      }
    }

    [HttpDelete]
    public DTO.Response Delete(int id)
    {
      try
      {
        var item = _uow.Item.GetById(id);
        if (item == null)
          return NotFound();
        _uow.Item.Remove(item);
        _uow.Save();
        return Ok("Removido com sucesso!");
      }
      catch (Exception ex)
      {
        return CreateResponse(ex);
      }
    }
  }
}
