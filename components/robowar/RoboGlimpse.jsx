import Image from "next/image";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function RoboGlimpse() {
  let arr = [1, 1, 1, 1, 1, 1, 1];
  return (
    <div
      id="highlights"
      className="flex justify-center flex-col py-20 max-h-screen items-center "
    >
      <span className="py-5 text-4xl md:text-6xl text-yellow-400 font-blackops">
        Previous Glimpse
      </span>
      {/* Flex Break Point - lg */}
      <div className="w-10/12 md:w-8/12 xl:w-8/12 border-4 border-yellow-400 flex flex-col-reverse lg:flex-row">
        <div
          lang="en"
          className="w-full text-xl md:bg-yellow-800/20 backdrop-blur-2xl hyphens flex overflow-x-scroll no-scrollbar"
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper flex justify-center items-center aspect-[640/400]"
          >
            {arr.map((i, index) => (
              <SwiperSlide
                key={index}
                className="mySwiper flex justify-center items-center h-full"
              >
                <Image
                  src={`/assets/images/robowar/glimpse/${index + 1}.jpg`}
                  alt=""
                  quality={100}
                  width={720}
                  height={480}
                  loading="lazy"
                  className="object-cover scale-125"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
