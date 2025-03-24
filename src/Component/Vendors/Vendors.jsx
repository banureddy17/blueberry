import React, { useState } from "react";
import "../Vendors/Vendors.css";
// import { useState } from "react";
import mira from "../../Assets/mira.jpg";
import eelna from "../../Assets/eelna.jpg";
import mario from "../../Assets/mario.jpg";
import maria from "../../Assets/maria.jpg";
import Owner from "../Owner/Owner";

const Vendors = () => {
  const [state, viewState] = useState("");

  return (
    <>
      <div className="ven">
        <div className="vendor1">
          <img src={state} alt="" />
        </div>
        <div className="vendor2">
          <div
            className="ven11"
            onClick={() => {
              viewState(mira);
            }}
          >
            <p>Mira Fashion Pvt.Ltd </p>
            <p>Fruits(3)|Vegetables(10)|Snacks(4)</p>
          </div>
          <div
            className="ven11"
            onClick={() => {
              viewState(eelna);
            }}
          >
            <p> Eeln Fashion Pvt.Ltd </p>
            <p>Fruits(3)|Vegetables(10)|Snacks(4)</p>
          </div>
          <div
            className="ven11"
            onClick={() => {
              viewState(mario);
            }}
          >
            <p>Mario Fashion Pvt.Ltd </p>
            <p>Fruits(3)|Vegetables(10)|Snacks(4)</p>
          </div>
          <div
            className="ven11"
            onClick={() => {
              viewState(maria);
            }}
          >
            <p>Maria Fashion Pvt.Ltd </p>
            <p>Fruits(3)|Vegetables(10)|Snacks(4)</p>
          </div>
        </div>
      </div>
      <Owner />
    </>
  );
};

export default Vendors;
