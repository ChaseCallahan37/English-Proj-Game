import React from "react";

function WaresContainer({ wares, children, onWareSelect }) {
  return (
    <div className="wares-container">
      {children}
      {/* <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Add/Remove</th>
          </tr>
        </thead>
        <tbody>
          {wares.map((ware, index) => {
            return (
              <tr key={index} className="ware-item-container">
                <td>{ware.title}</td>
                <td>${ware.price}</td>
                <td>
                  <button>+</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
      <ul>
        {wares.map((ware, index) => {
          return (
            <div className="ware-item-container">
              <li key={index}>
                {ware.title} ${ware.price}
              </li>
              <button
                onClick={() => onWareSelect(ware)}
                className="ware-item-btn"
              >
                +
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default WaresContainer;
