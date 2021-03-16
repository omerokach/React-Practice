import React from "react";

function Grocery(props) {
  return (
    <li>
      <button className="grocery-btn">
        <span className="plus">➕</span>
        {props.name}
      </button>
    </li>
  );
}

export default Grocery;
