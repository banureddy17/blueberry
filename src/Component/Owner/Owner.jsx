// import React from "react";
// import "../Owner/Owner.css";
// import stephen from "../../Assets/stephen.jpg";
// import isabella from "../../Assets/isabella.jpg";
// import nikki from "../../Assets/nikki.jpg";
// import { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// // import "swiper/css";
// import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";

// const Owner = () => {
//   return (
//     <>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={10}
//         // pagination={{ clickable: true }}
//         autoplay={{ delay: 1000, disableOnInteraction: false }}
//         loop={true}
//         modules={[Autoplay]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           {" "}
//           <div className="own">
//             <div className="owner">
//               <div className="ownimg">
//                 <img src={stephen} alt="" />
//               </div>
//               <div className="owncon">
//                 <p>Stephen Joseph</p>
//                 <p>(Co founder)</p>
//                 <p>
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                   Dolorem repellat fugit eaque saepe nihil necessitatibus,
//                   voluptate sit illum at maiores?
//                 </p>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           {" "}
//           <div className="own">
//             <div className="owner">
//               <div className="ownimg">
//                 <img src={stephen} alt="" />
//               </div>
//               <div className="owncon">
//                 <p>Stephen Joseph</p>
//                 <p>(Co founder)</p>
//                 <p>
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                   Dolorem repellat fugit eaque saepe nihil necessitatibus,
//                   voluptate sit illum at maiores?
//                 </p>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           {" "}
//           <div className="own">
//             <div className="owner">
//               <div className="ownimg">
//                 <img src={stephen} alt="" />
//               </div>
//               <div className="owncon">
//                 <p>Stephen Joseph</p>
//                 <p>(Co founder)</p>
//                 <p>
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                   Dolorem repellat fugit eaque saepe nihil necessitatibus,
//                   voluptate sit illum at maiores?
//                 </p>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// };

// export default Owner;

import React from "react";
import "../Owner/Owner.css";
import stephen from "../../Assets/stephen.jpg";
import isabella from "../../Assets/isabella.jpg";
import nikki from "../../Assets/nikki.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const owners = [
  {
    img: stephen,
    name: "Stephen Joseph",
    role: "Co-Founder",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem repellat fugit eaque saepe nihil necessitatibus, voluptate sit illum at maiores?",
  },
  {
    img: isabella,
    name: "Isabella Grace",
    role: "CEO",
    description:
      "Isabella is the CEO and brings over 15 years of experience in business development and leadership.",
  },
  {
    img: nikki,
    name: "Nikki Roberts",
    role: "Marketing Director",
    description:
      "Nikki leads our marketing team with expertise in branding, strategy, and digital presence.",
  },
];

const Owner = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {owners.map((owner, index) => (
        <SwiperSlide key={index}>
          <div className="own">
            <div className="owner">
              <div className="ownimg">
                <img src={owner.img} alt={owner.name} />
              </div>
              <div className="owncon">
                <p>{owner.name}</p>
                <p>({owner.role})</p>
                <p>{owner.description}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Owner;
