import React from "react";
import "../Order/Order.css";
// import { TbTruckDelivery } from "react-icons/tb";

const Order = (props) => {
  console.log(props);
  let data1 = props.data;
  console.log(data1.img);

  return (
    <>
      {data1.map(function (event) {
        return (
          <div className="box1">
            <span className="truck">{event.img}</span>
            <p>{event.title}</p>
            <p>{event.para}</p>
          </div>
        );
      })}
    </>
  );
};

export default Order;
