using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace aspnetserver.Data.Migrations
{
    /// <inheritdoc />
    public partial class FirstMigrationForum : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Flights",
                table: "Flights");

            migrationBuilder.DropColumn(
                name: "AirLineName",
                table: "Flights");

            migrationBuilder.DropColumn(
                name: "ArrivalDay",
                table: "Flights");

            migrationBuilder.DropColumn(
                name: "ArrivalHour",
                table: "Flights");

            migrationBuilder.DropColumn(
                name: "DepartureDay",
                table: "Flights");

            migrationBuilder.DropColumn(
                name: "DepartureHour",
                table: "Flights");

            migrationBuilder.DropColumn(
                name: "Destination",
                table: "Flights");

            migrationBuilder.DropColumn(
                name: "Luggage",
                table: "Flights");

            migrationBuilder.DropColumn(
                name: "Origin",
                table: "Flights");

            migrationBuilder.RenameTable(
                name: "Flights",
                newName: "Posts");

            migrationBuilder.RenameColumn(
                name: "Scales",
                table: "Posts",
                newName: "Category");

            migrationBuilder.RenameColumn(
                name: "FlightId",
                table: "Posts",
                newName: "PostId");

            migrationBuilder.AddColumn<string>(
                name: "Body",
                table: "Posts",
                type: "TEXT",
                maxLength: 100000,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "Posts",
                type: "TEXT",
                maxLength: 10000,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Posts",
                type: "TEXT",
                maxLength: 1000,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Posts",
                table: "Posts",
                column: "PostId");

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 1,
                columns: new[] { "Body", "Category", "Image", "Title" },
                values: new object[] { "<Body content 1>", "<Category of the post 1>", "<Image link 1>", "<Title 1>" });

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 2,
                columns: new[] { "Body", "Category", "Image", "Title" },
                values: new object[] { "<Body content 2>", "<Category of the post 2>", "<Image link 2>", "<Title 2>" });

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 3,
                columns: new[] { "Body", "Category", "Image", "Title" },
                values: new object[] { "<Body content 3>", "<Category of the post 3>", "<Image link 3>", "<Title 3>" });

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 4,
                columns: new[] { "Body", "Category", "Image", "Title" },
                values: new object[] { "<Body content 4>", "<Category of the post 4>", "<Image link 4>", "<Title 4>" });

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 5,
                columns: new[] { "Body", "Category", "Image", "Title" },
                values: new object[] { "<Body content 5>", "<Category of the post 5>", "<Image link 5>", "<Title 5>" });

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 6,
                columns: new[] { "Body", "Category", "Image", "Title" },
                values: new object[] { "<Body content 6>", "<Category of the post 6>", "<Image link 6>", "<Title 6>" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Posts",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "Body",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "Image",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "Posts");

            migrationBuilder.RenameTable(
                name: "Posts",
                newName: "Flights");

            migrationBuilder.RenameColumn(
                name: "Category",
                table: "Flights",
                newName: "Scales");

            migrationBuilder.RenameColumn(
                name: "PostId",
                table: "Flights",
                newName: "FlightId");

            migrationBuilder.AddColumn<string>(
                name: "AirLineName",
                table: "Flights",
                type: "TEXT",
                maxLength: 100,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ArrivalDay",
                table: "Flights",
                type: "TEXT",
                maxLength: 100,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ArrivalHour",
                table: "Flights",
                type: "TEXT",
                maxLength: 100,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DepartureDay",
                table: "Flights",
                type: "TEXT",
                maxLength: 100,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DepartureHour",
                table: "Flights",
                type: "TEXT",
                maxLength: 100,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Destination",
                table: "Flights",
                type: "TEXT",
                maxLength: 100,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Luggage",
                table: "Flights",
                type: "TEXT",
                maxLength: 100,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Origin",
                table: "Flights",
                type: "TEXT",
                maxLength: 100,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Flights",
                table: "Flights",
                column: "FlightId");

            migrationBuilder.UpdateData(
                table: "Flights",
                keyColumn: "FlightId",
                keyValue: 1,
                columns: new[] { "AirLineName", "ArrivalDay", "ArrivalHour", "DepartureDay", "DepartureHour", "Destination", "Luggage", "Origin", "Scales" },
                values: new object[] { "Airline no. 1", "<Arrival day for flight no. 1>", "<Arrival hour for flight no. 1>", "<Departure day for flight no. 1>", "<Departure hour for flight no. 1>", "Destination city 1", "<Luggage for flight no. 1>", "Origin city 1", "<Scales for flight no. 1>" });

            migrationBuilder.UpdateData(
                table: "Flights",
                keyColumn: "FlightId",
                keyValue: 2,
                columns: new[] { "AirLineName", "ArrivalDay", "ArrivalHour", "DepartureDay", "DepartureHour", "Destination", "Luggage", "Origin", "Scales" },
                values: new object[] { "Airline no. 2", "<Arrival day for flight no. 2>", "<Arrival hour for flight no. 2>", "<Departure day for flight no. 2>", "<Departure hour for flight no. 2>", "Destination city 2", "<Luggage for flight no. 2>", "Origin city 2", "<Scales for flight no. 2>" });

            migrationBuilder.UpdateData(
                table: "Flights",
                keyColumn: "FlightId",
                keyValue: 3,
                columns: new[] { "AirLineName", "ArrivalDay", "ArrivalHour", "DepartureDay", "DepartureHour", "Destination", "Luggage", "Origin", "Scales" },
                values: new object[] { "Airline no. 3", "<Arrival day for flight no. 3>", "<Arrival hour for flight no. 3>", "<Departure day for flight no. 3>", "<Departure hour for flight no. 3>", "Destination city 3", "<Luggage for flight no. 3>", "Origin city 3", "<Scales for flight no. 3>" });

            migrationBuilder.UpdateData(
                table: "Flights",
                keyColumn: "FlightId",
                keyValue: 4,
                columns: new[] { "AirLineName", "ArrivalDay", "ArrivalHour", "DepartureDay", "DepartureHour", "Destination", "Luggage", "Origin", "Scales" },
                values: new object[] { "Airline no. 4", "<Arrival day for flight no. 4>", "<Arrival hour for flight no. 4>", "<Departure day for flight no. 4>", "<Departure hour for flight no. 4>", "Destination city 4", "<Luggage for flight no. 4>", "Origin city 4", "<Scales for flight no. 4>" });

            migrationBuilder.UpdateData(
                table: "Flights",
                keyColumn: "FlightId",
                keyValue: 5,
                columns: new[] { "AirLineName", "ArrivalDay", "ArrivalHour", "DepartureDay", "DepartureHour", "Destination", "Luggage", "Origin", "Scales" },
                values: new object[] { "Airline no. 5", "<Arrival day for flight no. 5>", "<Arrival hour for flight no. 5>", "<Departure day for flight no. 5>", "<Departure hour for flight no. 5>", "Destination city 5", "<Luggage for flight no. 5>", "Origin city 5", "<Scales for flight no. 5>" });

            migrationBuilder.UpdateData(
                table: "Flights",
                keyColumn: "FlightId",
                keyValue: 6,
                columns: new[] { "AirLineName", "ArrivalDay", "ArrivalHour", "DepartureDay", "DepartureHour", "Destination", "Luggage", "Origin", "Scales" },
                values: new object[] { "Airline no. 6", "<Arrival day for flight no. 6>", "<Arrival hour for flight no. 6>", "<Departure day for flight no. 6>", "<Departure hour for flight no. 6>", "Destination city 6", "<Luggage for flight no. 6>", "Origin city 6", "<Scales for flight no. 6>" });
        }
    }
}
