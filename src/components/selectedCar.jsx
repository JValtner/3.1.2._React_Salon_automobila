import React from "react";
import '../styles/main_style.scss';

const SelectedCar = ({ selectedCar }) => {
  return (
    <>
      {selectedCar ? (
        <div className="car-container">
          <div className="dream-car">
            <img 
              src={selectedCar.image} 
              alt={selectedCar.model.name} 
              title={selectedCar.model.name} 
            />
          </div>

          <div className="calculator">
            <div className="description">
              <h4>Izračunaj cenu svog auta iz snova</h4>
              <p className="detail">Počevši od {selectedCar.price.fromEUR}€</p>
            </div>

            <div>
              <label>Model automobila:</label>
              <div className="detail">{selectedCar.model.name}</div>
            </div>

            <div>
              <label>Tip motora:</label>
              {selectedCar.engines?.map((engine, indexEngine) => (
                <div key={indexEngine} className="detail">{engine}</div>
              ))}
            </div>

            <div className="car-color">
              <label>Boja automobila:</label>
              <div 
                style={{ 
                  backgroundColor: selectedCar.colorHex, 
                  width: "20px", 
                  height: "20px", 
                  borderRadius: "3px" 
                }} 
              />
              <p className="detail">{selectedCar.colorHex}</p>
            </div>

            <div className="car-color">
              <label>Tip boje automobila:</label>
              <div className="detail">{selectedCar.finish}</div>
            </div>

            <div>
              <label>Opseg cene:</label>
              <span className="detail">
                {selectedCar.price.fromEUR} - {selectedCar.price.toEUR}€
              </span>
            </div>

            <div>
              <label>Kontakt mejl:</label>
              <span className="detail">example@email.com</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="car-container">
          <p>No cars to show, please select a car</p>
        </div>
      )}
    </>
  );
};

export default SelectedCar;
