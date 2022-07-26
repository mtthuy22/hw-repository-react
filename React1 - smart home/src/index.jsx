import React from "react";
import { render } from "react-dom";
import "./style.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import smartHomeData from "./smartHomeData.js";

const App = () => (
  <div className="container">
    <Header title="Chytrý dům" />
    <Dashboard data={smartHomeData}/>
  </div>
);

render(<App />, document.querySelector("#app"));
