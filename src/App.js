import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const initialState = {
    contactName:"Ben", contactPhone: "485756", contactEmail: "ben@hello.com"
  }

  const [contacts, setContacts] = useState([initialState])
  const [appointments, setAppointments] = useState([])
  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (newContactName, newContactPhone, newContactEmail) => {
    const newElement = {
      contactName: newContactName,
      contactPhone: newContactPhone,
      contactEmail: newContactEmail
    }

    setContacts(prevState => [...prevState, newElement])

    console.log('After setting new contacts',contacts)
  }

  const addAppointment = (newAppointmentName, newAppointmentDate, newAppointmentTime, newAppointmentContact) => {
    setAppointments([...appointments, 
      {
        "appointmentName": newAppointmentName,
        "appointmentContact": newAppointmentContact,
        "appointmentDate": newAppointmentDate,
        "appointmentTime": newAppointmentTime
      }])
    }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact}/> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts}/> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
