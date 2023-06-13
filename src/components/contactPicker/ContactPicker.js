import React from "react";

export const ContactPicker = ({contacts, handleChange, value, name}) => {
  return (
    <select onChange={handleChange} value={value} name={name}>
      <option value="" key="0">No contact selected</option>
      {
        contacts.map((contact, index) => {
          return <option value={contact.contactName} key={index + 1}>{contact.contactName}</option>
        })
      }
    </select>
  );
};
