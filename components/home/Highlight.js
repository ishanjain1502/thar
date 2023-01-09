import Image from "next/image";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function Highlights() {
  let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div id="highlights" className="flex justify-center mb-10">
      {/* Flex Break Point - lg */}
      <div className="w-11/12 sm:w-10/12 md:w-8/12 xl:w-8/12 border-4 border-yellow-300 flex flex-col-reverse lg:flex-row">
        <div className=" bg-yellow-300/20 backdrop-blur-xl w-full lg:w-3/12 flex h-fit lg:h-full justify-center items-center lg:border-r-4 border-t-4 lg:border-t-0 border-yellow-300">
          <span className="lg:-rotate-90 h-max text-3xl font-spaceboards my-4 pt-3 text-center">
            Highlights
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
            className="mySwiper flex justify-center items-center aspect-[720/480]"
          >
            {arr.map((i, index) => (
              <SwiperSlide
                key={index}
                className="mySwiper flex justify-center items-center"
              >
                <Image
                  src={`/assets/images/highlight/${index + 1}.JPG`}
                  alt=""
                  quality={50}
                  width={720}
                  height={480}
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
