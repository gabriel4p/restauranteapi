FROM microsoft/dotnet 
WORKDIR /app
COPY . .
ENTRYPOINT ["dotnet", "bin/Release/netcoreapp2.0/publish/RestauranteApi.dll"]