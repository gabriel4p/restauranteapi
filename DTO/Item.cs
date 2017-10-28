using Microsoft.Rest;

namespace RestauranteApi.DTO
{
  public class Item
  {
    public int Id { get; set; }
    public string Titulo { get; set; }
    public string Descricao { get; set; }
    public string UrlImagem { get; set; }
    public string Categoria { get; set; }
    public double Valor { get; set; }

    public void Validate()
    {
      if (string.IsNullOrEmpty(Titulo))
        throw new ValidationException("");
    }
  }
}