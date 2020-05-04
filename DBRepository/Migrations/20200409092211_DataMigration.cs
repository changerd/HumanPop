using Microsoft.EntityFrameworkCore.Migrations;

namespace DBRepository.Migrations
{
    public partial class DataMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Age",
                table: "Humans");

            migrationBuilder.AddColumn<int>(
                name: "NumOfArrests",
                table: "Humans",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NumOfArrests",
                table: "Humans");

            migrationBuilder.AddColumn<int>(
                name: "Age",
                table: "Humans",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
