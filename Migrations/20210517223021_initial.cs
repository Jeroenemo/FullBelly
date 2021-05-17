using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FullBelly.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Donations",
                columns: table => new
                {
                    DonationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Donor = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: true),
                    DonationName = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: true),
                    Address = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: true),
                    City = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: true),
                    State = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: true),
                    Zip = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: true),
                    Lat = table.Column<double>(type: "double", nullable: false),
                    Lng = table.Column<double>(type: "double", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Donations", x => x.DonationId);
                });

            migrationBuilder.InsertData(
                table: "Donations",
                columns: new[] { "DonationId", "Address", "City", "DonationName", "Donor", "Lat", "Lng", "State", "Zip" },
                values: new object[,]
                {
                    { 1, "8445 55th Ave S", "Seattle", "cheese", "Jeroen", 47.527229800000001, -122.2640512, "WA", "98118" },
                    { 2, "8445 55th Ave S", "Seattle", "waterloo", "Hannah", 47.527229800000001, -122.2640523, "WA", "98118" },
                    { 3, "8445 55th Ave S", "Seattle", "kibble", "Attila", 47.527229800000001, -122.26405870000001, "WA", "98118" },
                    { 4, "8445 55th Ave S", "Seattle", "eggs", "Koji", 47.527229800000001, -122.2640512, "WA", "98118" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Donations");
        }
    }
}
