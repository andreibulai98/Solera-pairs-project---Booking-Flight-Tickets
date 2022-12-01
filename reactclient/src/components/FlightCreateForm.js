import React, { useState } from "react";
import Constants from "../utilities/Constants";

export default function FlightCreateForm(props) {
  const initialFormData = Object.freeze({
    airLineName: "Airline Name",
    origin: "Origin",
    destination: "Destination",
    scales: "yes/no",
    luggage: "yes/no",
    departureDay: "Departure day",
    departureHour: "Departure hour",
    arrivalDay: "Arrival day",
    arrivalHour: "Arrival hour",
  });

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const flightToCreate = {
      flightId: 0,
      airLineName: formData.airLineName,
      origin: formData.origin,
      destination: formData.destination,
      scales: formData.scales,
      luggage: formData.luggage,
      departureDay: formData.departureDay,
      departureHour: formData.departureHour,
      arrivalDay: formData.arrivalDay,
      arrivalHour: formData.arrivalHour,
    };

    const url = Constants.API_URL_CREATE_FLIGHT;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(flightToCreate),
    })
      .then((response) => response.json())
      .then((responseFromServer) => {
        console.log(responseFromServer);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });

    props.onFlightCreated(flightToCreate);
  };

  return (
    <form className="w-100 px-5">
      <h1 className="mt-5">Search for a flight</h1>

      <div className="mt-5">
        <label className="h3 form-label">Airline Name</label>
        <input
          value={FormData.airLineName}
          name="airLineName"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mt-2">
        <label className="h3 form-label">Origin</label>
        <input
          value={FormData.origin}
          name="origin"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mt-2">
        <label className="h3 form-label">Destination</label>
        <input
          value={FormData.destination}
          name="destination"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mt-2">
        <label className="h3 form-label">Scales</label>
        <input
          value={FormData.scales}
          name="scales"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mt-2">
        <label className="h3 form-label">Luggage</label>
        <input
          value={FormData.luggage}
          name="luggage"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mt-2">
        <label className="h3 form-label">Departure day and hour</label>
        <input
          value={FormData.departureDay}
          name="departureDay"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mt-2">
        <input
          value={FormData.departureHour}
          name="departureHour"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mt-2">
        <label className="h3 form-label">Arrival day and hour</label>
        <input
          value={FormData.arrivalDay}
          name="arrivalDay"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mt-2">
        <input
          value={FormData.arrivalHour}
          name="arrivalHour"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5">
        Save flight (Submit)
      </button>
      <button
        onClick={() => props.onFlightCreated(null)}
        className="btn btn-dark btn-lg w-100 mt-2"
      >
        Cancel
      </button>
    </form>
  );
}
