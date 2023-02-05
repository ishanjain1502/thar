import Image from "next/image";
import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function MUNSlider() {
  let arr = [1, 1, 1, 1, 1];
  let committees = [
    {
      name: "UNSC",
      desc: "The United Nations Security Council is one of the six principal organs of the UN. Its primary objective is the maintenance of international peace and security. The UNSC is the only committee with legally binding authority. Members in the SC can impose sanctions and authorize the use of military power through directives or in the resolution itself. The SC also has the responsibility of accepting new member states into the UN.",
    },
    {
      name: "MG",
      desc: "Unlike other MUN committees this committee promises a new experience in which you will engage in debates from a different kind. The Ministry of Magic was created in 1707.The Ministry of Magic is a fictional committee meaning it doesn’t discuss world issues, that’s why the delegates require an imagination and good knowledge of the Harry Potter books/movies in order to be qualified and claim their spot in it.",
    },
    {
      name: "IP",
      desc: "Instead of representing the interests of a single country, the International Press Delegation allows participants to act as unbiased journalists, reporting on the proceedings of each simulation in the Conference. International Press Members investigate committee debates, conduct interviews, edit articles, and cover press conferences.",
    },
    {
      name: "DISEC",
      desc: "The Disarmament and International Security Committee  is the First Committee of the United Nations General Assembly. The committee concerns itself with questions of international importance regarding the security and demilitarization throughout all countries and regions, along with ensuring that citizens across the globe remain protected.",
    },
    {
      name: "AIPPM",
      desc: "All India Political Party Meet is a non-technical but powerful committee. It is a meeting between all the political parties of the nation. Typically called before the session of the Parliament or before the introduction of a bill, this committee aims to arrive at a consensus before the sessions begin.",
    },
  ];
  return (
    <div
      id="committees"
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
  );
}