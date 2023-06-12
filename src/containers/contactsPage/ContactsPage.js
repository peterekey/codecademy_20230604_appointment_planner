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

  // console.log(contacts)

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

    const phonePattern = /^(\(\+\d{2}\)?|\+\d{2})? ?\d{3,4} ?\d{3} ?\d{3}$/
    if (!phonePattern.test(currentPhone)) {
      alert('The phone number doesn\'t match the usual pattern. Review and try again.')
      return
    }

    addContact(currentName, currentPhone, currentEmail)

    e.target.reset()
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    console.log(`Starting contacts lists is ` + JSON.stringify(contacts))
  }, [])


  useEffect(() => {
    const allNames = contacts.map(contact => contact.contactName)
    allNames.includes(currentName) ? setDuplicateName(true) : setDuplicateName(false)
  }, [currentName])

   const handleChange = ({target}) => {

    switch(target.id) {
      case 'name':   
        setCurrentName(target.value)
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

        <ContactForm 
          name={currentName}
          setName={setCurrentName}
          phone={currentPhone}
          setPhone={setCurrentPhone}
          email={setCurrentEmail}
          setEmail={setCurrentEmail}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
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
