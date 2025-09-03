import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Locations from "./components/locations";
import Cars from "./components/cars";

const App = () => {
   const locations = [
  { name: "Auto centar Gavrić", city: "Novi Sad", address: "Gaudijeva 13" },
  { name: "Auto centar Ivković", city: "Novi Sad", address: "Mihaila Pupina 2" },
  { name: "Auto centar Klisa", city: "Novi Sad", address: "Ilije Birčanina 23" },
  { name: "Auto Centar Liman", city: "Novi Sad", address: "Pabla Pikasa 3" }
  ];
  const cars = [
  {
    id: "dream",
    model: { code: "dream", name: "Dream Car" },
    image: "https://i.ibb.co/v4TJT978/blue-car.png",
    engines: ["dizel", "benzin", "hibrid"],
    defaultEngine: "benzin",
    colorHex: "#4776ba",
    finish: "sjajna",
    price: { fromEUR: 7899, toEUR: 43799 }
  },
  {
    id: "nido",
    model: { code: "nido", name: "Nidorino" },
    image: "https://i.ibb.co/tPJPSQK6/renault1.png",
    engines: ["dizel", "benzin", "hibrid"],
    defaultEngine: "dizel",
    colorHex: "#9aa0a6",
    finish: "sjajna",
    price: { fromEUR: 40639, toEUR: 58927 }
  },
  {
    id: "bulba",
    model: { code: "bulba", name: "Bulbasaur" },
    image: "https://i.ibb.co/hFqJfRNr/renault2.png",
    engines: ["dizel", "benzin", "hibrid"],
    defaultEngine: "hibrid",
    colorHex: "#b3b3b3",
    finish: "mat",
    price: { fromEUR: 27629, toEUR: 40062 }
  },
  {
    id: "mar",
    model: { code: "mar", name: "Mareep" },
    image: "https://i.ibb.co/gLwnYZqs/renault3.png",
    engines: ["benzin", "hibrid"],
    defaultEngine: "benzin",
    colorHex: "#c0392b",
    finish: "sjajna",
    price: { fromEUR: 3679, toEUR: 5335 }
  },
  {
    id: "char",
    model: { code: "char", name: "Charizard" },
    image: "https://i.ibb.co/vvKK2s4K/renault4.png",
    engines: ["dizel", "benzin", "hibrid"],
    defaultEngine: "benzin",
    colorHex: "#2c3e50",
    finish: "mat",
    price: { fromEUR: 22199, toEUR: 32189 }
  }
];
  return (
    <div>
      <Header/>
      <section className="sellers">
        <h1>Prodajne lokacije</h1>
          <div className="locations">
              {locations.map((location, index) => (
              <Locations key={index} location={location} index={index} />
              ))}
          </div>
      </section>
      <Cars cars={cars}/>
      <Footer/>
    </div>
  )
};
export default App;
