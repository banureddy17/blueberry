import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Offer from "../Pages/Offer";
import Home from "../Pages/Home";
import Help from "../Pages/Help";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
