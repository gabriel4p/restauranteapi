using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace RestauranteApi.Migrations
{
    public partial class CreateLogTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "Valor",
                table: "Item",
                type: "float8",
                nullable: false,
                oldClrType: typeof(decimal));

            migrationBuilder.CreateTable(
                name: "Log",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int4", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Data = table.Column<DateTime>(type: "timestamp", nullable: false),
                    Descricao = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Log", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Log");

            migrationBuilder.AlterColumn<decimal>(
                name: "Valor",
                table: "Item",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float8");
        }
    }
}
