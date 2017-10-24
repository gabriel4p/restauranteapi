FROM microsoft/dotnet:latest
WORKDIR /app
COPY . .
ENTRYPOINT ["dotnet", "RestauranteApi.dll"]