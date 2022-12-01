using aspnetserver.Data;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using Swashbuckle.AspNetCore.SwaggerUI;

var builder = WebApplication.CreateBuilder(args);

// CORS Policy (for WEB API)
builder.Services.AddCors(options =>
{
    options.AddPolicy("CORSPolicy",
        builder =>
        {
            builder
            .AllowAnyMethod()
            .AllowAnyHeader()
            .WithOrigins("http://localhost:3000", "https://appname.azurestaticapps.net");
        });
});

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(SwaggerGenOptions =>
{
    SwaggerGenOptions.SwaggerDoc("v1", new OpenApiInfo { Title = "ASP.NET React - Booking Airline Tickets", Version = "v1" });
});

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI(SwaggerUIOptions =>
{
    SwaggerUIOptions.DocumentTitle = "ASP.NET React - Booking Airline Tickets";
    SwaggerUIOptions.SwaggerEndpoint("/swagger/v1/swagger.json", "Web API model for booking flights.");
    SwaggerUIOptions.RoutePrefix = string.Empty;
});

/*
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
*/

app.UseHttpsRedirection();

// added CORS Policy
app.UseCors("CORSPolicy");

app.MapGet("/get-all-flights", async () => await FlightsRepository.GetFlightsAsync())
    .WithTags("Flights Endpoints");

app.MapGet("/get-flight-by-id/{flightId}", async (int flightId) =>
{
    Flight flightToReturn = await FlightsRepository.GetFlightByIdAsync(flightId);

    if (flightToReturn != null)
    {
        return Results.Ok(flightToReturn);
    }
    else
    {
        return Results.BadRequest();
    }
}).WithTags("Flights Endpoints");

app.MapPost("/create-flight", async (Flight flightToCreate) =>
{
    bool createSuccessful = await FlightsRepository.CreateFlightAsync(flightToCreate);

    if (createSuccessful)
    {
        return Results.Ok("Create successful.");
    }
    else
    {
        return Results.BadRequest();
    }
}).WithTags("Flights Endpoints");

app.MapPut("/update-flight", async (Flight flightToUpdate) =>
{
    bool updateSuccessful = await FlightsRepository.UpdateFlightAsync(flightToUpdate);

    if (updateSuccessful)
    {
        return Results.Ok("Update successful.");
    }
    else
    {
        return Results.BadRequest();
    }
}).WithTags("Flights Endpoints");

app.MapDelete("/delete-flight-by-id/{flightId}", async (int flightId) =>
{
    bool deleteSuccessful = await FlightsRepository.DeleteFlightAsync(flightId);

    if (deleteSuccessful)
    {
        return Results.Ok("Delete successful.");
    }
    else
    {
        return Results.BadRequest();
    }
}).WithTags("Flights Endpoints");

app.Run();