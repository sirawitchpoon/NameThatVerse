import React, { useRef } from "react";

export default function Start({ startGame }) {

  const handleClick = () => {
      startGame(); // เริ่มเกมเมื่อกด "Start"
  };

  return (
    <div className="start">
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}
