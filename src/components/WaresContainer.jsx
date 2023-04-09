import React from "react";

function WaresContainer({ wares, children }) {
  return (
    <div className="wares-container">
      {children}
      <ul>
        {wares.map((ware, index) => (
          <div>
            <li key={index}>
              {ware.title} ${ware.amount}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default WaresContainer;
