import React, { useState } from "react";
import Constants from "../utilities/Constants";

export default function ReservationCreateForm(props) {
  const initialFormData = Object.freeze({
    name: "Name",
    surname: "Surname",
    nationality: "Nationality",
    nifOrPassNumber: "123456",
    age: "Age",
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

    const reservationToCreate = {
      reservationId: 0,
      name: formData.name,
      surname: formData.surname,
      nationality: formData.nationality,
      nifOrPassNumber: formData.nifOrPassNumber,
      age: formData.age,
    };

    const url = Constants.API_URL_CREATE_RESERVATION;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(reservationToCreate),
    })
      .then((response) => response.json())
      .then((responseFromServer) => {
        console.log(responseFromServer);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });

    props.onReservationCreated(reservationToCreate);
  };

  return (
    <form className="w-100 px-5">
      <h1 className="mt-5">Reserve the {props.flight.airLineName} flight number {props.flight.flightId}.</h1>

      <div className="mt-5">
        <label className="h3 form-label">Name</label>
        <input
          value={FormData.name}
          name="name"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mt-2">
        <label className="h3 form-label">Surname</label>
        <input
          value={FormData.surname}
          name="surname"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mt-2">
        <label className="h3 form-label">Nationality</label>
        <input
          value={FormData.nationality}
          name="nationality"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mt-2">
        <label className="h3 form-label">NIF/ Passport number</label>
        <input
          value={FormData.nifOrPassNumber}
          name="nifOrPassNumber"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mt-2">
        <label className="h3 form-label">Age</label>
        <input
          value={FormData.age}
          name="age"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5">
        Reserve (Submit)
      </button>
      <button
        onClick={() => props.onReservationCreated(null)}
        className="btn btn-dark btn-lg w-100 mt-2"
      >
        Cancel
      </button>
    </form>
  );
}
