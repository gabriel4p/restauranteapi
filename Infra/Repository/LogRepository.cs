namespace RestauranteApi.Infra.Repository
{
  public class LogRepository : BaseRepository<Entity.Log>
  {
    public LogRepository(Context.AppDbContext context) : base(context) { }
  }
}