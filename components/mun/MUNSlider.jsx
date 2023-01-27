import Image from "next/image";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function MUNSlider() {
  let arr = [1, 1, 1, 1, 1];
  return (
    <div
      id="committee"
      className="flex justify-center flex-col py-20 max-h-screen items-center bg-white"
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
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            zoom={true}
            className="mySwiper flex justify-center items-center aspect-[640/400]"
          >
            {arr.map((i, index) => (
              <SwiperSlide
                key={index}
                className="mySwiper flex justify-center items-center h-full rounded-full overflow-hidden"
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
