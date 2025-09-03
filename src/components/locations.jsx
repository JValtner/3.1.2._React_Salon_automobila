import React from "react";
import '../styles/main_style.scss';

const Locations = ({location, index}) => {
  return (
    <div key={index}>
      <h2>{location.name}</h2>
      <p>Adresa: <span>{location.address}, {location.city}</span></p> 
    </div>
  );
};

export default Locations;
