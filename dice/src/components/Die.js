import React from "react";

const Die = (props) => {
  return (
    <div
      className={props.isSelected ? "die-front selected" : "die-front"}
      onClick={(event) => props.onSelectHandler(props.id)}
    >
      <h2 className="text">{props.value}</h2>
    </div>
  );
};

export default Die;
