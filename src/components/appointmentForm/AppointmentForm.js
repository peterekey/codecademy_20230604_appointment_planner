import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker'

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <form id="addAppointment" onSubmit={handleSubmit}>
      <label htmlFor="title">Appointment name:</label>
      <input id="title" type="text" onChange={e => setTitle(e.target.value)} value={title}/>

      <label htmlFor="contact">Guests:</label>
      <ContactPicker contacts={contacts} handleChange={(e) => setContact(e.target.value)} value={contact} name={title}/><br /><br />

      <label htmlFor="date" type="text">Appointment date:</label>
      <input id="date" type="date" onChange={e => setDate(e.target.value)} value={date} min={getTodayString()}/>

      <label htmlFor="time" type="text">Appointment time:</label>
      <input id="time" type="time" onChange={e => setTime(e.target.value)} value={time} />

      <input form="addAppointment" type="submit" />

    </form>
  );
};
