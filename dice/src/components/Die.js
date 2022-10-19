import React from "react";

const Die = (props) => {
  return (
    <div className="die-front">
      <h2 className="text">{props.value}</h2>
    </div>
  );
};

export default Die;
