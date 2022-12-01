using Microsoft.EntityFrameworkCore;

namespace aspnetserver.Data
{
    internal static class FlightsRepository
    {
        internal async static Task<List<Flight>> GetFlightsAsync()
        {
            using (var db = new AppDBContext()) //"using" makes it so that it's cleaned up by the garbage collector more efficiently after use
            {
                return await db.Flights.ToListAsync();
            }
        }

        // Getting a Flight by Id
        internal async static  Task<Flight> GetFlightByIdAsync(int flightId)
        {
            using (var db = new AppDBContext())
            {
                return await db.Flights.FirstOrDefaultAsync(flight => flight.FlightId == flightId);
            }
        }

        // Creating Flight and saving to DB
        internal async static Task<bool> CreateFlightAsync(Flight flightToCreate)
        {
            using (var db = new AppDBContext())
            {
                try
                {
                    await db.Flights.AddAsync(flightToCreate);

                    return await db.SaveChangesAsync() >= 1;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        // Updating Flight and saving to DB
        internal async static Task<bool> UpdateFlightAsync(Flight flightToUpdate)
        {
            using (var db = new AppDBContext())
            {
                try
                {
                    db.Flights.Update(flightToUpdate);

                    return await db.SaveChangesAsync() >= 1;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        // Deleting Flight and saving DB
        internal async static Task<bool> DeleteFlightAsync(int flightId)
        {
            using (var db = new AppDBContext())
            {
                try
                {
                    Flight flightToDelete = await GetFlightByIdAsync(flightId);

                    db.Remove(flightToDelete);

                    return await db.SaveChangesAsync() >= 1;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }
    }
}
