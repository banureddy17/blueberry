import React from "react";
import "../Cart1/Cart1.css";
import girl from "../../Assets/girl.jpg";
import { IoStar } from "react-icons/io5";
import { MdOutlineStarBorder } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { VscArrowSwap } from "react-icons/vsc";
import { IoBagCheckOutline } from "react-icons/io5";
const Cart1 = (props) => {
  console.log(props);
  let data = props.mydata;
  console.log(data);

  return (
    <>
      {data.map(function (event) {
        return (
          <div className="maincart">
            <div className="img1">
              <div className="icons">
                <div className="ic1">
                  {" "}
                  <CiHeart />
                </div>
                <div className="ic1">
                  <FaRegEye />
                </div>
                <div className="ic1">
                  <VscArrowSwap />
                </div>
                <div className="ic1">
                  <IoBagCheckOutline />
                </div>
              </div>
              <img src={event.img} alt="" />
            </div>
            <div className="con">
              <div className="starrating">
                <div className="star1">
                  {" "}
                  <p>{event.type}</p>
                </div>
                <div className="star1">
                  <IoStar className="rating" />
                  <IoStar className="rating" />
                  <IoStar className="rating" />
                  <IoStar className="rating" />
                  <IoIosStarOutline className="last" />
                </div>
              </div>
              <div className="con1">
                <p className="c">{event.title}</p>
              </div>
              <div className="con2">
                <p className="price">${event.price}</p>
                <p>{event.pack}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cart1;
