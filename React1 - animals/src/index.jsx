import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import "./style.css";
import AnimalList from "./components/AnimalList";
import AnimalDetail from "./components/AnimalDetail";

const App = () => {
  const [animals, setAnimals] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState({});

  const viewAnimal = (id) => {
    const selectAnimal = animals.find((animal)=>animal.id === id);
    setSelectedAnimal(selectAnimal);
  };

  useEffect(() => {
    fetch("https://lrolecek.github.io/zviratka-api/zvirata.json")
      .then((response) => response.json())
      .then((data) => {
        setAnimals(data.zvirata);
        setSelectedAnimal(data.zvirata[0]);
      });
  }, []);

  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container">
        <AnimalList animals={animals} viewAnimal={viewAnimal} />
        <AnimalDetail selectedAnimal={selectedAnimal} />
      </div>
    </>
  );
};

render(<App />, document.querySelector("#app"));
