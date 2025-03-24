import React from "react";
import "../Time/Time.css";
import { useState, useEffect } from "react";

const Time = ({ duration }) => {
  const [time, setTime] = useState(duration);
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);
  const getFormattedtime = (milliseconds) => {
    let total_seconds = parseInt(Math.floor(milliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 1000));
    let total_hours = parseInt(Math.floor(total_minutes / 1000));
    let days = parseInt(Math.floor(total_hours / 1000));

    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 24);

    return `${days + "Days"}:${hours}:${minutes}:${seconds}`;
  };
  return (
    <>
      <div className="time">
        <div className="time1">
          <div className="time11">
            <p className="time121">
              Day of the <span>Deal</span>{" "}
            </p>
            <p>Dont't wait.The time will never be just right</p>
          </div>
          <div className="time12">{getFormattedtime(time)}</div>
        </div>
      </div>
    </>
  );
};

export default Time;
