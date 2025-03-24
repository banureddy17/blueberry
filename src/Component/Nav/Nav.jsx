import React from "react";
import "../Nav/Nav.css";
import logo from "../../Assets/blueberrylogo.png";
import { CiUser } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <div className="nav">
        <div className="inner">
          <div class="nav1">
            <p>Flat 50% Off On Grocery Shop.</p>
          </div>
          <div class="nav2">
            <ul>
              <Link
                to="/help"
                className="navanchor
              "
              >
                <li>Help?</li>
              </Link>
              <li>Track Order</li>
              <li>Language</li>
              <li>Currency</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="searchbar">
        <div className="searchbar1">
          <div className="img">
            <img src={logo} alt="" />
          </div>
          {/* <div className="dropdown">
            <div className="dropdown1">
              <button class="dropbtn">Vegetables ▼</button>
            </div>
            <div className="dropdown2"></div>
          </div> */}
          <div class="search-bar">
            <div class="dropdown">
              <button class="dropbtn">Vegetables ▼</button>
              <div class="dropdown-content">
                <a href="#">Vegetables</a>
                <a href="#">Fruits</a>
                <a href="#">Dairy</a>
                <a href="#">Meat</a>
                <a href="#">Beverages</a>
              </div>
            </div>

            <input
              type="text"
              placeholder="Search products..."
              class="search-input"
            />

            <button class="search-btn">🔍</button>
          </div>
          <div className="us">
            <CiUser className="user" />

            <p>Account Login</p>
          </div>
          <div className="st">
            <CiStar className="star" />
            <p>3 items Wishlist</p>
          </div>
          <div className="ca">
            <CiShoppingCart className=" cartca" />
            <p>4 items Cart</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
