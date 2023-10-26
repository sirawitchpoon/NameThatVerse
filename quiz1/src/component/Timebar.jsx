import React, { useEffect, useState } from "react";

export default function TimerBar({ initialTime, onTimeout }) {
  const [currentTime, setCurrentTime] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          // Time has run out
          clearInterval(intervalId);
          onTimeout(); // Call the timeout callback
          return prevTime;
        }
      });
    }, 1000); // Update the time every 1 second

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, [initialTime, onTimeout]);

  const timeBarWidth = (currentTime / initialTime) * 100 + "%";

  return (
    <div className="timeBarContainer">
      <div
        className="timeBar"
        style={{ width: timeBarWidth }}
      ></div>
    </div>
  );
}
