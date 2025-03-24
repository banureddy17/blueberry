import React from "react";
import Nav from "../Component/Nav/Nav";
import Menu from "../Component/Menu/Menu";
import Girl from "../Component/Girl/Girl";
import Cart1 from "../Component/Cart1/Cart1";
import ch from "../Assets/ch.webp";
import juice from "../Assets/juice.jpg";
import almonds from "../Assets/almonds.webp";
import applejuice from "../Assets/applejuice.webp";
import Time from "../Component/Time/Time";
import Banner from "../Component/Banner/Banner";
import Banner1 from "../Component/Banner1/Banner1";
import Arrival from "../Component/Arrival/Arrival";
import Order from "../Component/Order/Order";
import { TbTruckDelivery } from "react-icons/tb";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { GiReturnArrow } from "react-icons/gi";
import { FaCcAmazonPay } from "react-icons/fa";
import Top from "../Component/Top/Top";
import Vendors from "../Component/Vendors/Vendors";
import Apple from "../Component/Apple/Apple";
import Insta from "../Component/Insta/Insta";
import Footer from "../Component/Footer/Footer";

const Home = () => {
  let cartdata = [
    {
      title: "fresh Mango Slice Juice",
      img: juice,
      price: 100,
      pack: "100ml",
      type: "juice",
    },
    {
      title: "Oragnic apple juice",
      img: applejuice,
      price: 200,
      pack: "200ml",
      type: "juice",
    },
    {
      title: "Mixed almonds nuts pack",
      img: almonds,
      price: 200,
      pack: "10pack",
      type: "almonds",
    },
    {
      title: "Mixed Fruits nuts pack",
      img: ch,
      price: 250,
      pack: "20pack",
      type: "nuts",
    },
  ];
  let truckIcon = <TbTruckDelivery />;
  console.log(truckIcon);

  let phoneIcon = <PiPhoneCallDuotone />;
  let returnIcon = <GiReturnArrow />;
  let paymentIcon = <FaCcAmazonPay />;
  const datacart = [
    {
      img: truckIcon,
      title: "free shipping",
      para: "Free shipping on all Us order or above $200",
    },
    {
      img: phoneIcon,
      title: "24*7 support",
      para: "Contact us 24 hours a day, 7 days a week",
    },
    {
      img: returnIcon,
      title: "30 days retunr",
      para: "Simply return it within 30 days for an exchange",
    },
    {
      img: paymentIcon,
      title: "Payment secure",
      para: "Contact us 24 hours a day, 7 days a week",
    },
  ];
  return (
    <>
      <Nav />
      <Menu />
      <Girl />
      <Time duration={2 * 24 * 60 * 60 * 1000} />
      <div className="cart">
        <div className="cart1">
          <div className="grid">
            <Cart1 mydata={cartdata} />
          </div>
        </div>
      </div>
      <Banner />
      <Banner1 />
      <Arrival />
      <div className="cart">
        <div className="cart1">
          <div className="grid">
            <Cart1 mydata={cartdata} />
          </div>
        </div>
      </div>
      <div className="cart">
        <div className="cart1">
          <div className="grid">
            <Cart1 mydata={cartdata} />
          </div>
        </div>
      </div>
      <div className="grid1">
        <Order data={datacart} />
      </div>
      <Top />
      <Vendors />
      <Apple />
      <Insta />
      <Footer />
    </>
  );
};

export default Home;
