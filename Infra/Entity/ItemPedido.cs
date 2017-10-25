namespace RestauranteApi.Infra.Entity
{
  public class ItemPedido
  {
    public int Id { get; set; }
    public Item Item { get; set; }
    public Pedido Pedido { get; set; }
  }
}