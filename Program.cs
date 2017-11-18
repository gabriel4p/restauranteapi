using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace RestauranteApi
{
  public class Program
  {
    public static void Main(string[] args)
    {
      string portEnv = Environment.GetEnvironmentVariable("PORT");
      string url = string.IsNullOrEmpty(portEnv) ? $"http://*:4000/" : $"http://*:{portEnv}/";
      BuildWebHost(url, args).Run();
    }

    public static IWebHost BuildWebHost(string url, string[] args) =>
        WebHost.CreateDefaultBuilder(args)
            .UseStartup<Startup>()
            .UseUrls(url)
            .Build();
  }
}
