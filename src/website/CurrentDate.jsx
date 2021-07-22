import React from "react";

const CurrentDate = () => {
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();
  return (
    <div>
      <div className="center">
        <p>
          Today's Date is ={currDate} Current Time is = {currTime}
        </p>
      </div>
    </div>
  );
};

export default CurrentDate;
