import React from "react";
import "../Footer/Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import blueberry from "../../Assets/blueberrylogo.png";
import playstore from "../../Assets/playstore.png";
import appstore from "../../Assets/appstore.png";
import visa from "../../Assets/visa.png";
import masterpayment from "../../Assets/masterpayment.png";
import pay from "../../Assets/pay.png";
import skrill from "../../Assets/skrill.png";
import mastero from "../../Assets/masero.png";
import visa1 from "../../Assets/visaelectron.png";
const Footer = () => {
  return (
    <>
      <p className="brand">BRANDS DIRECTORY</p>
      <div className="footer">
        <div className="foot">
          <div className="footer1">
            <div className="f11">
              <div className="f1">
                {" "}
                <p>
                  Jewellery : Necklace | Earrings | Couple Rings| Pendants |
                  crystal | Bangles| Bracelets | Nose pin | Chain | Earrings |
                  Couple Rings
                </p>
              </div>
              <div className="f1">
                {" "}
                <p>
                  Footwear : Sport | Formal | Boots Casual | Cowboy Shoes Safety
                  | Shoes | Party Wear Shoes | Branded First copy Long Shoes
                </p>
              </div>
            </div>
            <div className="f11">
              <div className="f1">
                {" "}
                <p>
                  {" "}
                  Fashion : T-Shirt | Short & Jeans | Jacket | Dress & Frock |
                  Inner wear | Hosiery
                </p>
              </div>
              <div className="f1">
                {" "}
                <p>
                  {" "}
                  Cosmetics : Shampoo | Body wash | face wash | Makeup kit |
                  Liner | Lipstick | Perfume | Body Shop | Scrub | Hair Gel |
                  Hair colors | Hair Dye | Sunscreen | Skin Lotion |Liner |
                  Lipstick
                </p>
              </div>
            </div>
          </div>
          <div className="footer2">
            <div className="f2">
              <img src={blueberry} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                ex facilis ullam ea architecto a ipsa sint commodi ad velit,
                magni fugit, assumenda amet molestiae!
              </p>
              <img src={playstore} alt="" />
              <img src={appstore} alt="" />
            </div>
            <div className="f21">
              <p>Category</p>
              <p>Dairy & Milk</p>
              <p>Snack & Spice</p>
              <p>Fast Food</p>
              <p>Juice & Drinks</p>
              <p>Bakery</p>
              <p>Seafood</p>
            </div>
            <div className="f21">
              <p>Company</p>
              <p>About us</p>
              <p>Delivery</p>
              <p>Legal notice</p>
              <p>Terms & conditions</p>
              <p>Secure Payment</p>
              <p> Contact us</p>
            </div>
            <div className="f21">
              <p>Account</p>
              <p>Sign in</p>
              <p>View cart</p>
              <p>Return POlicy</p>
              <p>Bcome a vendor</p>
              <p>Affiliate Program</p>
              <p>Payments</p>
            </div>
            <div className="f2">
              <p>Contact</p>
              <p>
                {" "}
                <CiLocationOn /> 971 Lajamni, Motavarachha, Surat, Gujarat,
                Bharat 394101.
              </p>
              <p>
                {" "}
                <FaWhatsapp />
                983482378
              </p>
              <p>
                {" "}
                <MdOutlineMailOutline />
                example@gmail.com
              </p>
              <div className="footericon">
                <FaFacebookSquare />
                <FaTwitterSquare />
                <FaLinkedinIn />
                <FaInstagram />
              </div>
            </div>
          </div>
          <div className="footer3">
            <div className="f3">
              <p>Copyright © 2025 BlueBerry all rights reserved.</p>
            </div>
            <div className="f3">
              <img src={visa} alt="" />
              {/* <img src={pay} alt="" />
              <img src={masterpayment} alt="" />
              <img src={skrill} alt="" />
              <img src={mastero} alt="" />
              <img src={visa1} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
