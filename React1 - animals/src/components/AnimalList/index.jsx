import React from "react";
import Animal from "../Animal";

const AnimalList = ({ animals, viewAnimal }) => {
  return (
    <div className="animal-list">
      {animals.map((a) => (
        <Animal
          nazev={a.nazev}
          nazevLatinsky={a.nazevLatinsky}
          foto={a.foto}
          key={a.id}
          viewAnimal={() => viewAnimal(a.id)}
        />
      ))}
    </div>
  );
};

export default AnimalList;
