import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, addAppointment, contacts}) => {
  /*
  Define state variables for 
  appointment info
  */
 const [currentName, setCurrentName] = useState('')
 const [currentContact, setCurrentContact] = useState('')
 const [currentDate, setCurrentDate] = useState('')
 const [currentTime, setCurrentTime] = useState('') 

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          name={currentName}
          setName={setCurrentName}
          contact={currentContact}
          setContact={setCurrentContact}
          date={currentDate}
          setDate={setCurrentDate}
          time={currentTime}
          setTime={setCurrentTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList items={appointments}/>
      </section>
    </div>
  );
};