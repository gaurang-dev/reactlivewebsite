import React from "react";
import web from "../images/web1.jpg";
import "../website.css";

import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Welcome to homePage"
        imgsrc={web}
        visit="/service"
        btname="GetStarted"
      />
    </>
  );
};

export default Home;
