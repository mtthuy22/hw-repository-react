import React from "react";
import Lights from "../Lights";
import Climate from "../Climate";
import Blinds from "../Blinds";
import Energy from "../Energy";
import "./style.css";

const Dashboard = ({ data }) => {
  return (
    <main className="dashboard">
      <Lights lights={data.lights} />
      <Climate
        temperature={data.climate.temperature}
        humidity={data.climate.humidity}
      />
      <Blinds state={data.blinds} />
      <Energy
        water={data.energyConsumption.water}
        electricity={data.energyConsumption.electricity}
      />
    </main>
  );
};

export default Dashboard;
