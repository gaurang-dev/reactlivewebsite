import React from "react";
import web from "../images/web1.png";
import "../website.css";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Us"
      />
    </>
  );
};

export default About;
