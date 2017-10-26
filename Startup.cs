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
using Infra.UnitOfWork;
using Contract;

namespace RestauranteApi
{
  public class Startup
  {
    // This method gets called by the runtime. Use this method to add services to the container.
    // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
    public void ConfigureServices(IServiceCollection services)
    {
      string connectionString = @"Host=ec2-54-204-32-145.compute-1.amazonaws.com;Database=d4c2sd0kaho4tr;Username=nteyshyqpjkhhf;Password=fdf6d0926669601105e63c9904728b6166e84a3e14351a43ca21de740de9f0ba;SslMode=Require; UseSSLStream=true";
      //string connectionString = @"Host=localhost;Database=app;Username=app;Password=123";
      services.AddDbContext<AppDbContext>(options =>
        options.UseNpgsql(connectionString)
      );
      services.AddSingleton<IUnitOfWork, UnitOfWork>();
      services.AddMvc();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      app.UseMvc();

      app.Run(async (context) =>
      {
        await context.Response.WriteAsync("Rota não encontrada!");
      });
    }
  }
}
