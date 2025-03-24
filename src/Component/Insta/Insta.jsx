import React from "react";
import "../Insta/Insta.css";
import veg1 from "../../Assets/veg1.jpeg";
import veg2 from "../../Assets/veg2.jpeg";
import veg3 from "../../Assets/veg3.jpeg";
import veg4 from "../../Assets/veg4.jpeg";
import veg5 from "../../Assets/veg5.jpeg";
import { FaInstagram } from "react-icons/fa";

const Insta = () => {
  return (
    <>
      <div className="insta">
        <div className="insta1">
          <div className="instaimg">
            <img src={veg1} alt="" />
            <FaInstagram className="in" />
          </div>
          <div className="instaimg">
            <img src={veg2} alt="" />
            <FaInstagram className="in" />
          </div>
          <div className="instaimg">
            {" "}
            <img src={veg3} alt="" />
            <FaInstagram className="in" />
          </div>
          <div className="instaimg">
            {" "}
            <img src={veg4} alt="" />
            <FaInstagram className="in" />
          </div>
          <div className="instaimg">
            <FaInstagram className="in" /> <img src={veg5} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Insta;
