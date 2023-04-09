import React from "react";

function InfoBox({ day, money }) {
  return (
    <div className="info-box">
      <p>Day: {day}</p>
      <p>Money: ${money}</p>
    </div>
  );
}

export default InfoBox;
