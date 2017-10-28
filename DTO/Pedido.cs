using System;
using System.Collections.Generic;

namespace RestauranteApi.DTO
{
  public class Pedido
  {
    public int Id { get; set; }
    public string Nome { get; set; }
    public int Mesa { get; set; }
    public string Resumo { get; set; }
    public DateTime Data { get; set; }
    public List<Item> Items { get; set; }
  }
}