import React from "react";
import { Tile } from '../tile/Tile'

export const TileList = ({contacts}) => {

  return (
    <div>
      {  
        contacts.map((contact, index) => {
          const { contactName: name, ...rest } = contact

          return <Tile 
            name={name}
            description={rest}
            key={index}
          /> }) 
      }
    </div>
  );
};
