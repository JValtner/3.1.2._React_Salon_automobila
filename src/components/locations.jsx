import React from "react";
import '../styles/main_style.scss';

const Locations = ({locations}) => {
  return (
    <section className="sellers">
      <h1>Prodajne lokacije</h1>
      <div className="locations">
            {locations.map((location,index)=>(
                <div key={index}>
                    <h2>{location.name}</h2>
                    <p>Adresa: <span>{location.address}, {location.city}</span></p>
                </div>
            )
            )}
        </div>
    </section>
  );
};

export default Locations;
