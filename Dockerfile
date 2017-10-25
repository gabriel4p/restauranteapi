FROM microsoft/dotnet:latest
WORKDIR /app
COPY . .
ENTRYPOINT ["dotnet", "bin/Debug/netcoreapp2.0/RestauranteApi.dll"]