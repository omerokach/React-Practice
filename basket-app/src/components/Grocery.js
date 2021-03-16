import React from "react";

function Grocery(props) {
  const { onClickFunction } = props;
  const { deleted } = props;

  return (
    <li>
      <button className="grocery-btn" onClick={onClickFunction}>
        <span className={deleted ? "minus" : "plus"}>
          {props.count ? "➖" : "➕"}
        </span>
        {props.name} {props.count}
      </button>
    </li>
  );
}

export default Grocery;
