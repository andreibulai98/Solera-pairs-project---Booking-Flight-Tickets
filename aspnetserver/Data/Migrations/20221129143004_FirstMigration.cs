using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace aspnetserver.Data.Migrations
{
    /// <inheritdoc />
    public partial class FirstMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Flights",
                columns: table => new
                {
                    FlightId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    AirLineName = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Origin = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Destination = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Scales = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Luggage = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    DepartureDay = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    DepartureHour = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    ArrivalDay = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    ArrivalHour = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Flights", x => x.FlightId);
                });

            migrationBuilder.InsertData(
                table: "Flights",
                columns: new[] { "FlightId", "AirLineName", "ArrivalDay", "ArrivalHour", "DepartureDay", "DepartureHour", "Destination", "Luggage", "Origin", "Scales" },
                values: new object[,]
                {
                    { 1, "Airline no. 1", "<Arrival day for flight no. 1>", "<Arrival hour for flight no. 1>", "<Departure day for flight no. 1>", "<Departure hour for flight no. 1>", "Destination city 1", "<Luggage for flight no. 1>", "Origin city 1", "<Scales for flight no. 1>" },
                    { 2, "Airline no. 2", "<Arrival day for flight no. 2>", "<Arrival hour for flight no. 2>", "<Departure day for flight no. 2>", "<Departure hour for flight no. 2>", "Destination city 2", "<Luggage for flight no. 2>", "Origin city 2", "<Scales for flight no. 2>" },
                    { 3, "Airline no. 3", "<Arrival day for flight no. 3>", "<Arrival hour for flight no. 3>", "<Departure day for flight no. 3>", "<Departure hour for flight no. 3>", "Destination city 3", "<Luggage for flight no. 3>", "Origin city 3", "<Scales for flight no. 3>" },
                    { 4, "Airline no. 4", "<Arrival day for flight no. 4>", "<Arrival hour for flight no. 4>", "<Departure day for flight no. 4>", "<Departure hour for flight no. 4>", "Destination city 4", "<Luggage for flight no. 4>", "Origin city 4", "<Scales for flight no. 4>" },
                    { 5, "Airline no. 5", "<Arrival day for flight no. 5>", "<Arrival hour for flight no. 5>", "<Departure day for flight no. 5>", "<Departure hour for flight no. 5>", "Destination city 5", "<Luggage for flight no. 5>", "Origin city 5", "<Scales for flight no. 5>" },
                    { 6, "Airline no. 6", "<Arrival day for flight no. 6>", "<Arrival hour for flight no. 6>", "<Departure day for flight no. 6>", "<Departure hour for flight no. 6>", "Destination city 6", "<Luggage for flight no. 6>", "Origin city 6", "<Scales for flight no. 6>" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Flights");
        }
    }
}
