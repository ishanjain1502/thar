import Image from "next/image";
import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import MUNNavbar from "../../components/mun/MUNNavbar";
import Footer from "../../components/globals/Footer";

export default function agendas() {
  let arr = [1, 1, 1, 1, 1];
  let committees = [
    {
      name: "UNSC",
      desc: "The United Nations Security Council is one of the six principal organs of the UN. Its primary objective is the maintenance of international peace and security. The UNSC is the only committee with legally binding authority. Members in the SC can impose sanctions and authorize the use of military power through directives or in the resolution itself. The SC also has the responsibility of accepting new member states into the UN.",
      agenda: "",
      chairs: [
        {
          name: "",
        },
      ],
    },
    {
      name: "AIPPM",
      desc: "The United Nations Security Council is one of the six principal organs of the UN. Its primary objective is the maintenance of international peace and security. The UNSC is the only committee with legally binding authority. Members in the SC can impose sanctions and authorize the use of military power through directives or in the resolution itself. The SC also has the responsibility of accepting new member states into the UN.",
      agenda: "",
      chairs: [
        {
          name: "",
        },
      ],
    },
    {
      name: "DISEC",
      desc: "The United Nations Security Council is one of the six principal organs of the UN. Its primary objective is the maintenance of international peace and security. The UNSC is the only committee with legally binding authority. Members in the SC can impose sanctions and authorize the use of military power through directives or in the resolution itself. The SC also has the responsibility of accepting new member states into the UN.",
      agenda: "",
      chairs: [
        {
          name: "",
        },
      ],
    },
    {
      name: "IP",
      desc: "The United Nations Security Council is one of the six principal organs of the UN. Its primary objective is the maintenance of international peace and security. The UNSC is the only committee with legally binding authority. Members in the SC can impose sanctions and authorize the use of military power through directives or in the resolution itself. The SC also has the responsibility of accepting new member states into the UN.",
      agenda: "",
      chairs: [
        {
          name: "",
        },
      ],
    },
    {
      name: "MOM",
      desc: "The United Nations Security Council is one of the six principal organs of the UN. Its primary objective is the maintenance of international peace and security. The UNSC is the only committee with legally binding authority. Members in the SC can impose sanctions and authorize the use of military power through directives or in the resolution itself. The SC also has the responsibility of accepting new member states into the UN.",
      agenda: "",
      chairs: [
        {
          name: "",
        },
      ],
    },
  ];
  return (
    <div className="mun">
      <MUNNavbar />
      <div
        id="agendas"
        className="flex justify-center flex-col py-20 items-center bg-white"
      >
        <span className="py-5 text-xl underline md:text-6xl font-bold text-slate-600 ">
          Our Comittees
        </span>
        {/* Flex Break Point - lg */}
        <div className="w-10/12 md:w-8/12 xl:w-8/12 flex flex-col-reverse lg:flex-row">
          <div
            lang="en"
            className="w-full text-xl hyphens flex overflow-x-scroll no-scrollbar"
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              zoom={true}
              className="mySwiper flex justify-center items-center"
            >
              {arr.map((i, index) => (
                <SwiperSlide
                  key={index}
                  className="mySwiper flex justify-center items-center flex-col md:flex-row overflow-hidden text-black"
                >
                  <Image
                    src={`/assets/images/mun/comittees/${index + 1}.png`}
                    alt=""
                    quality={100}
                    width={720}
                    height={480}
                    loading="lazy"
                    className="object-cover rounded-full"
                  />
                  <div>
                    <h1 className="text-4xl font-bold mb-4 underline">
                      {committees[index].name}
                    </h1>
                    <p>{committees[index].desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="-mt-10 bg-[#1D1C41]">
        <Footer />
      </div>
    </div>
  );
}
