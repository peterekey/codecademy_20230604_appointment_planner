import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  handleChange
}) => {

  return (
      <form id="addContact" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" onChange={handleChange} />
          <label htmlFor="phone">Phone:</label>
          <input 
            id="phone"
            type="number"
            onChange={handleChange} 
          />
          <label htmlFor="email">Email:</label>
          <input id="email" type="text" onChange={handleChange} />
          <input form="addContact" type="submit" />
      </form>
  );
};

