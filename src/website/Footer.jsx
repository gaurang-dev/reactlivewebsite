import React from "react";
import CurrentDate from "./CurrentDate";

const Footer = () => {
  return (
    <div>
      <footer className="bg-light text-center">
        <CurrentDate />
      </footer>
    </div>
  );
};

export default Footer;
