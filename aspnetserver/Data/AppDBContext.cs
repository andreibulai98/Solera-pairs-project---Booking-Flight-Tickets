using Microsoft.EntityFrameworkCore;

namespace aspnetserver.Data
{
    internal sealed class AppDBContext : DbContext
    {
        public DbSet<Flight> Flights { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder dbContextOptionsBuilder) => dbContextOptionsBuilder.UseSqlite("Data Source=./Data/AppDB.db");    
        
        protected override void OnModelCreating(ModelBuilder nodeBuilder)
        {
            Flight[] flightsToSeed = new Flight[6];

            for(int i = 1; i <= 6; i++)
            {
                flightsToSeed[i - 1] = new Flight
                {
                    FlightId = i,
                    AirLineName = $"Airline no. {i}",
                    Origin = $"Origin city {i}",
                    Destination = $"Destination city {i}",
                    Scales = $"<Scales for flight no. {i}>",
                    Luggage = $"<Luggage for flight no. {i}>",
                    DepartureDay = $"<Departure day for flight no. {i}>",
                    DepartureHour = $"<Departure hour for flight no. {i}>",
                    ArrivalDay = $"<Arrival day for flight no. {i}>",
                    ArrivalHour = $"<Arrival hour for flight no. {i}>",
                    // add Price if needs...
                    // add Flight number if needs...
                };
            }

            nodeBuilder.Entity<Flight>().HasData(flightsToSeed);
        }
    }
}
