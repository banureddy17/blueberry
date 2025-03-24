import React from "react";
import "./Girl.css";
import girl from "../../Assets/girl.jpg";
import { RiCake3Line } from "react-icons/ri";
import { RiDrinks2Line } from "react-icons/ri";
import { GiFruitBowl } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Girl = () => {
  return (
    <>
      <div className="girl">
        <div className="girl1">
          <div className="girl11">
            <img src={girl} alt="" />
          </div>
          <div className="girl12">
            <div className="girl21">
              <p>Explore Categories</p>
            </div>
            <div className="girl22">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{ delay: 1000, disableOnInteraction: false }}
                loop={true}
                modules={[Autoplay]}
                className="mySwiper1"
              >
                <SwiperSlide>
                  <div className="g1">
                    <IoFastFoodOutline />
                    <p className="cool">Cool Drinks</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="g1">
                    <GiFruitBowl />
                    <p className="cool">Cool Drinks</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="g1">
                    <RiDrinks2Line />
                    <p className="cool">Cool Drinks</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="g1">
                    <RiCake3Line />
                    <p className="cool">Cool Drinks</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Girl;

// import React from "react";
// import "./Girl.css";
// import girl from "../../Assets/girl.jpg";
// import { RiCake3Line } from "react-icons/ri";
// import { RiDrinks2Line } from "react-icons/ri";
// import { GiFruitBowl } from "react-icons/gi";
// import { IoFastFoodOutline } from "react-icons/io5";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// // import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";

// const Girl = () => {
//   return (
//     <>
//       <div className="girl">
//         <div className="girl1">
//           <div className="girl11">
//             <img src={girl} alt="" />
//           </div>
//           <div className="girl12">
//             <div className="girl21">
//               <p>Explore Categories</p>
//             </div>
//             <Swiper
//               slidesPerView={3}
//               spaceBetween={10}
//               pagination={{ clickable: true }}
//               autoplay={{ delay: 2000, disableOnInteraction: false }}
//               loop={true}
//               modules={[Autoplay]}
//               className="girl22"
//             >
//               <SwiperSlide className="g1">
//                 <IoFastFoodOutline />
//               </SwiperSlide>
//               <SwiperSlide className="g1">
//                 <GiFruitBowl />
//               </SwiperSlide>
//               <SwiperSlide className="g1">
//                 <RiDrinks2Line />
//               </SwiperSlide>
//               <SwiperSlide className="g1">
//                 <RiCake3Line />
//               </SwiperSlide>
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Girl;
