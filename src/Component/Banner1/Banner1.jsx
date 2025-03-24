import React from "react";
import "./Banner1.css";
import farmer from "../../Assets/farmer.jpg";

const Banner1 = () => {
  return (
    <div className="banner">
      <img src={farmer} alt="" />
      <div className="banner-content">
        <h3>25% Off</h3>
        <h1>Fresh & Organic Vegetables</h1>
        <button className="shop-btn">Shop Now</button>
      </div>
    </div>
  );
};

export default Banner1;
