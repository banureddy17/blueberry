import React from "react";
import "../Menu/Menu.css";
import { IoLocationSharp } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import menuimg from "../../Assets/menuimg.png";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <div className="menu1">
          <div className="menu11">
            <div className="home2">
              <CgMenuGridR />
            </div>
            <div className="home">
              <p>Home</p>
            </div>
            <div className="home">
              <p>Categories</p>
            </div>
            <div className="home">
              <p>Products</p>
            </div>
            <div className="home">
              <p>Pages</p>
            </div>
            <div className="home">
              <p>Blog</p>
            </div>
            <div className="home1">
              <AiOutlineSafetyCertificate />
              <Link to="/offer" className="offeranchor">
                <p>Offers</p>
              </Link>
            </div>
          </div>
          <div className="menu12">
            <IoLocationSharp className="location" />
            <select className="select" id="">
              <option value="">surat</option>
              <option value="">Delhi</option>
              <option value="">Rajput</option>
              <option value="">Udaipur</option>
            </select>
          </div>
        </div>
      </div>

      <div className="menuimg">
        <div className="menucon">
          <p className="menucon1">flat 30% offer</p>
          <p className="menucon2">
            Explore <span>Healthy</span> & Fresh Fruits
          </p>
          <button>Shop now</button>
        </div>
        <img src={menuimg} alt="" />
      </div>
    </>
  );
};

export default Menu;
