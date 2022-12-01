import React, { useState } from "react";
import Constants from "./utilities/Constants";
import FlightCreateForm from "./components/FlightCreateForm";
import FlightUpdateForm from "./components/FlightUpdateForm";
import ReservationCreateForm from "./components/ReservationCreateForm";
import "./App.css";

function App() {
  const [flights, setFlights] = useState([]);
  const [showingCreateNewFlightForm, setShowingCreateNewFlightForm] =
    useState(false);
  const [flightCurrentlyBeingUpdated, setFlightCurrentlyBeingUpdated] =
    useState(null);
  const [showingCreateNewReservationForm, setShowingCreateNewReservationForm] =
    useState(false);

  function getFlights() {
    const url = Constants.API_URL_GET_ALL_FLIGHTS; // changed from this: "https://localhost:7099/get-all-flights";

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((flightsFromServer) => {
        console.log(flightsFromServer);
        setFlights(flightsFromServer);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }

  function deleteFlight(flightId) {
    const url = `${Constants.API_URL_DELETE_FLIGHT_BY_ID}/${flightId}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((responseFromServer) => {
        setFlights(responseFromServer);
        console.log(responseFromServer);
        onFlightDeleted(flightId);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }

  return (
    <div className="container">
      <div className="row min-vh-100">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          {showingCreateNewFlightForm === false &&
            flightCurrentlyBeingUpdated === null &&
            showingCreateNewReservationForm === false && (
              <div>
                <h1>Booking Flight Tickets - pairs project</h1>

                <div className="mt-5">
                  <button
                    onClick={getFlights}
                    className="btn btn-dark btn-lg w-100"
                  >
                    Show Saved Flights (Get)
                  </button>
                  <button
                    onClick={() => setShowingCreateNewFlightForm(true)}
                    className="btn btn-secondary btn-lg w-100 mt-4"
                  >
                    Search New Flight (Create)
                  </button>
                </div>
              </div>
            )}

          {flights.length > 0 &&
            showingCreateNewFlightForm === false &&
            flightCurrentlyBeingUpdated === null &&
            showingCreateNewReservationForm === false &&
            renderFlightsTable()}

          {flightCurrentlyBeingUpdated !== null && (
            <FlightUpdateForm
              flight={flightCurrentlyBeingUpdated}
              onFlightUpdated={onFlightUpdated}
            />
          )}

          {showingCreateNewFlightForm && (
            <FlightCreateForm onFlightCreated={onFlightCreated} />
          )}

          {showingCreateNewReservationForm && (
            <ReservationCreateForm
              onReservationCreated={onReservationCreated}
            />
          )}
        </div>
      </div>
    </div>
  );

  function renderFlightsTable() {
    return (
      <div className="rable-responsive mt-5">
        <table className="table table-bordered border-dark">
          <thead>
            <tr>
              <th scope="col">Flight no.</th>
              <th scope="col">Airline name</th>
              <th scope="col">Flight details</th>
              <th scope="col">Options</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight) => (
              <tr key={flight.flightId}>
                <th scope="row">{flight.flightId}</th>
                <td>{flight.airLineName}</td>
                <td>
                  {flight.origin} - {flight.destination} <br></br>
                  Dep: {flight.departureDay} {flight.departureHour} - Arv:{" "}
                  {flight.arrivalDay} {flight.arrivalHour} <br></br>
                  Scales: {flight.scales} <br></br>
                  Luggage: {flight.luggage}
                </td>
                <td>
                  <button
                    onClick={() => setShowingCreateNewReservationForm(true)}
                    className="btn btn-dark btn-lg mx-3 my-3"
                  >
                    Reserve
                  </button>
                  <button
                    onClick={() => setFlightCurrentlyBeingUpdated(flight)}
                    className="btn btn-secondary btn-lg mx-2 my-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          `Are you sure you want to delete the saved search for "${flight.airLineName}" flight number "${flight.flightId}"?`
                        )
                      )
                        deleteFlight(flight.flightId);
                    }}
                    className="btn btn-secondary btn-lg mx-2 my-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          onClick={() => setFlights([])}
          className="btn btn-dark btn-lg w-100"
        >
          Hide Saved Flights (Empty React Flights array)
        </button>
      </div>
    );
  }

  // onFlightCreated - based on Flight Create form
  function onFlightCreated(createdFlight) {
    setShowingCreateNewFlightForm(false);

    if (createdFlight === null) {
      return;
    }

    alert(
      `Flight successfully created. "${createdFlight.airLineName}" flight number "${createdFlight.flightId}" will show up in the table below.`
    );

    getFlights();
  }

  // onFlightUpdated - based on Flight Update form
  function onFlightUpdated(updatedFlight) {
    setFlightCurrentlyBeingUpdated(null);

    if (updatedFlight === null) {
      return;
    }

    let flightsCopy = [...flights];

    const index = flightsCopy.findIndex((flightsCopyFlight, currentIndex) => {
      if (flightsCopyFlight.flightId === updatedFlight.flightId) {
        return true;
      }
    });

    if (index !== -1) {
      flightsCopy[index] = updatedFlight;
    }

    setFlights(flightsCopy);

    alert(
      `Flight successfully updated. You can see the changes on "${updatedFlight.airLineName}" flight number "${updatedFlight.flightId}" in the table below.`
    );
  }

  // onFlightDeleted
  function onFlightDeleted(deletedFlightFlightId) {
    let flightsCopy = [...flights];

    const index = flightsCopy.findIndex((flightsCopyFlight, currentIndex) => {
      if (flightsCopyFlight.flightId === deletedFlightFlightId) {
        return true;
      }
    });

    if (index !== -1) {
      flightsCopy.splice(index, 1);
    }

    setFlights(flightsCopy);

    alert(
      `Flight successfully deleted.`
    );
  }

  // onReservationCreated - based on Reservation form
  function onReservationCreated(createdReservation) {
    setShowingCreateNewReservationForm(false);

    if (createdReservation === null) {
      return;
    }

    alert(
      `Reservation successfully created for Mr./Ms "${createdReservation.name}" "${createdReservation.surname}".`
    );

    // Make Confirmation pop-up (Successful)
    //getFlights();
  }
}

export default App;
