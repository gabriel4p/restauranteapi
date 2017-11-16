using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using RestauranteApi.Infra.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using RestauranteApi.Infra.UnitOfWork;
using RestauranteApi.Contract;
using AutoMapper;

namespace RestauranteApi
{
  public class Startup
  {
    // This method gets called by the runtime. Use this method to add services to the container.
    // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
    public void ConfigureServices(IServiceCollection services)
    {
      string connectionString = Environment.GetEnvironmentVariable("RestaurantConnectionString");
      services.AddDbContext<AppDbContext>(options =>
        options.UseNpgsql(connectionString)
      );
      services.AddSingleton<IUnitOfWork, UnitOfWork>();
      services.AddAutoMapper();
      services.AddMvc();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      app.UseStaticFiles();

      app.UseMvc();

      app.Run(async (context) =>
      {
        await context.Response.WriteAsync("Rota não encontrada!");
      });
    }
  }
}
