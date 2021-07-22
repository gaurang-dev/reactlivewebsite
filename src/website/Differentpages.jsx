import React from "react";
import { NavLink } from "react-router-dom";
import "../differentpage.css";
import RandomPic from "./RandomPic";

const Differentpages = () => {
  return (
    <>
      <NavLink to={<RandomPic />} />
    </>
  );
};

export default Differentpages;
