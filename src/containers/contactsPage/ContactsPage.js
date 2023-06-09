import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [currentName, setCurrentName] = useState()
  const [currentPhone, setCurrentPhone] = useState()
  const [currentEmail, setCurrentEmail] = useState()
  const [duplicateName, setDuplicateName] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

    if (duplicateName) {
      alert(`You've already added someone called ${currentName} to your contacts!`)
      return
    }

    addContact(currentName, currentPhone, currentEmail)

    e.target.reset()

    console.log(contacts)
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
   const handleChange = ({target}) => {

    switch(target.id) {
      case 'name':
        const allNames = contacts.map(contact => contact.contactName)
        setCurrentName(target.value)
        allNames.includes(target.value) ? setDuplicateName(true) : setDuplicateName(false)
        break
      case 'phone':
        setCurrentPhone(target.value)
        break
      case 'email':
        setCurrentEmail(target.value)
        break
      default:
        console.log("invalid")
        break
    }    
  }

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" onChange={handleChange} />
          <label htmlFor="phone">Phone:</label>
          <input id="phone" type="number"  onChange={handleChange} />
          <label htmlFor="email">Email:</label>
          <input id="email" type="text" onChange={handleChange} />
          <input type="submit" />
        </form>
        <ContactForm 
          name={currentName}
          setName={setCurrentName}
          phone={currentPhone}
          setPhone={setCurrentPhone}
          email={setCurrentEmail}
          setEmail={setCurrentEmail}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts}/>
      </section>
    </div>
  );
};
