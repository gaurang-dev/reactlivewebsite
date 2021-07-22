import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Covidapp from "../covidTracker/Covidapp";
import RandomPic from "./RandomPic";
import Sidenav from "./Sidenav";

const Awesome = () => {
  return (
    <div>
      <Sidenav />
    </div>
  );
};

export default Awesome;
