import React, { useState } from "react";
import '../styles/main_style.scss';
import SelectedCar from "./selectedCar";

const Cars = ({cars}) => {
    const [selectedCar, setSelectedCar] = useState(null);

  const handleSelected = (car) => {
    setSelectedCar(car);
  };
 
  return (
    <section className="cars">
        <SelectedCar selectedCar={selectedCar}/>
        <div className="offers">
            {cars.map((car, index)=>(
            <div key={index} onClick={()=>handleSelected(car)} className={selectedCar?.id === car.id ? "selected" : ""} >
            <img src={car.image} alt={car.model.name} title={car.model.name} />
            <p>Već od {car.price.fromEUR}</p>
            </div>
            )
            )}
            
        </div>
    </section>
  );
};

export default Cars;
