import React from "react";
import "./Banner.css"; // Import the CSS file
import fastFoodImage from "../../Assets/fruitfood.png"; // Replace with your image path
import fruitsImage from "../../Assets/fastfood.png"; // Replace with your image path

const Banner = () => {
  return (
    <div className="banner-container">
      {/* Left Box */}
      <div className="banner-box light-orange">
        <img src={fastFoodImage} alt="Fast Food" className="banner-image" />
        <div className="banner-text">
          <h2>Tasty Snack & Fast Food</h2>
          <p>The flavour of something special</p>
          <button className="shop-button">Shop Now</button>
        </div>
      </div>

      {/* Right Box */}
      <div className="banner-box light-pink">
        <img src={fruitsImage} alt="Fruits" className="banner-image" />
        <div className="banner-text">
          <h2>Fresh Fruits & Vegetables</h2>
          <p>A healthy meal for everyone</p>
          <button className="shop-button">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
