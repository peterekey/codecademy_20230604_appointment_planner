import React from "react";
import { Tile } from '../tile/Tile'

export const TileList = ({contacts}) => {

  const cards = []

  contacts.map((contact, index) => {

    const { contactName: name, ...rest } = contact
    
    return cards.push(
      <Tile 
        name={name}
        description={rest}
        key={index}
      />
    )
  })

  return (
    <div>
      {cards}
    </div>
  );
};
