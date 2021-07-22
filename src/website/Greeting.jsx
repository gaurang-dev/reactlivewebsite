import React from "react";
import "../greeting.css";

const Greeting = () => {
  //To say good morning/night using color option
  let curDate = new Date();
  curDate = curDate.getHours();

  //css inline styling in react
  const cssStyle = {};

  let greeting = "";
  if (curDate >= 1 && curDate < 12) {
    greeting = "Good morning";
    cssStyle.color = "green";
  } else if (curDate >= 12 && curDate < 19) {
    greeting = "Good Afternoon";
    cssStyle.color = "orang";
  } else {
    greeting = "Good Night";
    cssStyle.color = "Blue";
  }

  return (
    <div>
      <p className="greeting">
        Hello, <span style={cssStyle}>{greeting}</span>
      </p>
    </div>
  );
};

export default Greeting;
