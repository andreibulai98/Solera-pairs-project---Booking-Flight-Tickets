import React, { useState } from "react";
import Constants from "../utilities/Constants";

export default function FlightUpdateForm(props) {
  const initialFormData = Object.freeze({
    airLineName: props.flight.airLineName,
    origin: props.flight.origin,
    destination: props.flight.destination,
    scales: props.flight.scales,
    luggage: props.flight.luggage,
    departureDay: props.flight.departureDay,
    departureHour: props.flight.departureHour,
    arrivalDay: props.flight.arrivalDay,
    arrivalHour: props.flight.arrivalHour,
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

    const flightToUpdate = {
      flightId: props.flight.flightId,
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

    const url = Constants.API_URL_UPDATE_FLIGHT;

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(flightToUpdate),
    })
      .then((response) => response.json())
      .then((responseFromServer) => {
        console.log(responseFromServer);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });

    props.onFlightUpdated(flightToUpdate);
  };

  return (
    <form className="w-100 px-5">
      <h1 className="mt-5">Update the {props.flight.airLineName} flight number {props.flight.flightId}.</h1>

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
        Update flight (Submit)
      </button>
      <button
        onClick={() => props.onFlightUpdated(null)}
        className="btn btn-dark btn-lg w-100 mt-2"
      >
        Cancel
      </button>
    </form>
  );
}
