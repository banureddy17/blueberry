import React from "react";
import "../Apple/Apple.css";
import apple1 from "../../Assets/apple1.jpg";
import apple2 from "../../Assets/apple2.jpg";
import apple3 from "../../Assets/apple3.jpg";
import apple4 from "../../Assets/apple4.jpg";
const apple = [
  {
    img: apple1,
    date: "17 feb 2004",
    para: "Business ideas to grow your business",
  },
  {
    img: apple2,
    date: "17 feb 2004",
    para: "Business ideas to grow your business",
  },
  {
    img: apple3,
    date: "17 feb 2004",
    para: "Business ideas to grow your business",
  },
  {
    img: apple4,
    date: "17 feb 2004",
    para: "Business ideas to grow your business",
  },
];
const Apple = () => {
  return (
    <>
      <div className="gr">
        {apple.map(function (event) {
          return (
            <div className="apple">
              <img src={event.img} alt="" />
              <div className="applecon">
                <p>{event.date}</p>
                <p>{event.para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Apple;
