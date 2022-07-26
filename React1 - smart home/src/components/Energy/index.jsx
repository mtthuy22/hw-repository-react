import React from "react";
import "./style.css";
import waterURL from "./water.svg";
import electricityURL from "./electricity.svg";

const Energy = ({ electricity, water }) => (
  <div className="energy">
    <div className="energy__source">
      <div className="energy__icon">
        <img src={electricityURL} />
      </div>
      <div className="energy__consumption">
        <div className="energy__description">Elektřina</div>
        <div className="energy__value">{electricity} kW</div>
      </div>
    </div>
    <div className="energy__source">
      <div className="energy__icon">
        <img src={waterURL} />
      </div>
      <div className="energy__consumption">
        <div className="energy__description">Voda</div>
        <div className="energy__value">
          {water} m<sup>3</sup>
        </div>
      </div>
    </div>
  </div>
);

export default Energy;
