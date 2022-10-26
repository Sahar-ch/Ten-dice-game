import React from "react";

const Die = (props) => {
  const circles = [];
  for (let i = 0; i < props.value; i++) {
    circles.push(
      <div className={props.isSelected ? "circle clicked" : "circle"}></div>
    );
  }

  const style = {
    justifyContent: props.value === 1 ? "center" : "space-between",
  };

  return (
    <div
      className={props.isSelected ? "die-front selected" : "die-front"}
      onClick={(event) => props.onSelectHandler(props.id)}
    >
      <div className="circle-container" style={style}>
        {circles}
      </div>
    </div>
  );
};

export default Die;
