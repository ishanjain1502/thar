import Image from "next/image";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function Latest() {
  return (
    <div id="highlights" className="flex justify-center mb-10">
      {/* Flex Break Point - lg */}
      <div className="w-11/12 sm:w-10/12 md:w-8/12 xl:w-8/12 border-4 border-yellow-300 flex flex-col-reverse lg:flex-row-reverse">
        <div className=" bg-yellow-300/20 backdrop-blur-xl w-full lg:w-3/12 flex h-fit lg:h-full justify-center items-center lg:border-l-4 border-t-4 lg:border-t-0 border-yellow-300">
          <span className="lg:rotate-90 h-max text-3xl font-spaceboards my-4 pt-3 text-center">
            Latest
          </span>
        </div>
        <div
          lang="en"
          className="w-full text-xl md:bg-black/20 backdrop-blur-2xl hyphens flex overflow-x-scroll no-scrollbar"
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
            className="mySwiper flex justify-center items-center w-full aspect-[720/480]"
          >
            <SwiperSlide className="mySwiper flex justify-center items-center relative">
              <Image
                src="/assets/images/latest/1.jpeg"
                className="obje object-contain"
                alt=""
                fill
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide className="mySwiper flex justify-center items-center relative">
              <Image
                src="/assets/images/latest/2.jpeg"
                className="obje object-contain"
                alt=""
                fill
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide className="mySwiper flex justify-center items-center relative">
              <Image
                src="/assets/images/latest/3.jpeg"
                className="obje object-contain"
                alt=""
                fill
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide className="mySwiper flex justify-center items-center relative">
              <Image
                src="/assets/images/latest/4.jpeg"
                className="obje object-contain"
                alt=""
                fill
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide className="mySwiper flex justify-center items-center relative">
              <Image
                src="/assets/images/latest/5.jpeg"
                className="obje object-contain"
                alt=""
                fill
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide className="mySwiper flex justify-center items-center relative">
              <Image
                src="/assets/images/latest/6.jpeg"
                className="obje object-contain"
                alt=""
                fill
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide className="mySwiper flex justify-center items-center relative">
              <Image
                src="/assets/images/latest/7.jpeg"
                className="obje object-contain"
                alt=""
                fill
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide className="mySwiper flex justify-center items-center relative">
              <Image
                src="/assets/images/latest/8.jpeg"
                className="obje object-contain"
                alt=""
                fill
                loading="lazy"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
