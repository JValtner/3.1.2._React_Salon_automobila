import React, { useState } from "react";
import '../styles/main_style.scss';

const Cars = ({cars}) => {
    const [selectedCar, setSelectedCar] = useState(null);

  const handleClick = (car) => {
    setSelectedCar(car);
  };
 
  return (
    <section className="cars">
        {selectedCar ?(
            <div className="car-container">
                <div className="dream-car">
                <img src={selectedCar.image} alt={selectedCar.model.name} title={selectedCar.model.name} />
                </div>
                <div className="calculator">
                    <div className="description">
                        <h4>Izračunaj cenu svog auta iz snova</h4>
                        <p className="detail">Počevši od {selectedCar.price.fromEUR}€</p>
                    </div>
                    <div>
                        <label htmlFor="model">Model automobila:</label>
                        <div className="detail">{selectedCar.model.name}</div>
                    </div>
                    <div>
                        <label htmlFor="engine">Tip motora</label>
                        {selectedCar.engines && selectedCar.engines.map((engine, indexEngine) => (
                        <div key={indexEngine} className="detail">{engine}</div>
                        ))}
                    </div>
                    <div className="car-color">
                        <label htmlFor="car-color">Boja automobila</label>
                        <div style={{ backgroundColor: selectedCar.colorHex, width: "10px", height: "10px", borderRadius: "1px" }}></div>
                        <p className="detail">{selectedCar.colorHex}</p>
                    </div>
                    <div className="car-color">
                        <label htmlFor="car-color">Tip boje automobila:</label>
                        <div className="detail"><p>{selectedCar.finish}</p></div>
                        
                    </div>
                    <div>
                        <label htmlFor="price">Opseg cene:</label>
                        <span className="detail">{selectedCar.price.fromEUR} - {selectedCar.price.toEUR}€</span>
                    </div>
                    <div>
                        <label htmlFor="contact">Kontakt mejl:</label>
                        <span className="detail">example@email.com</span>
                    </div>
                </div>
            </div>
        )
        :<div className="car-container"><p>No cars to show, please select a car</p></div> 
        }
        <div className="offers">
            {cars.map((car, index)=>(
            <div key={index} onClick={()=>handleClick(car)}>
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
