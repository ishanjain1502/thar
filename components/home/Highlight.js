import Image from "next/image";
import React from "react";

export default function Highlights() {
  return (
    <div id="highlights" className="flex justify-center mb-10">
      {/* Flex Break Point - lg */}
      <div className="w-11/12 sm:w-10/12 md:w-8/12 xl:w-8/12 border-4 border-yellow-300 flex flex-col-reverse lg:flex-row">
        <div className=" bg-yellow-300/20 backdrop-blur-xl w-full lg:w-3/12 flex h-fit lg:h-full justify-center items-center lg:border-r-4 border-b-4 lg:border-b-0 border-yellow-300">
          <span className="lg:-rotate-90 h-max text-3xl font-spaceboards my-4 pt-3 text-center">
            Highlights
          </span>
        </div>
        <div
          lang="en"
          className="w-full lg:w-9/12 p-8 text-xl md: bg-black/20 backdrop-blur-2xl hyphens flex gap-5 overflow-x-scroll no-scrollbar"
        >
          <Image
            src="/assets/images/highlight/1.JPG"
            alt=""
            height={300}
            width={300}
          />
          <Image
            src="/assets/images/highlight/2.JPG"
            alt=""
            height={300}
            width={300}
          />
          <Image
            src="/assets/images/highlight/3.JPG"
            alt=""
            height={300}
            width={300}
          />
          <Image
            src="/assets/images/highlight/4.JPG"
            alt=""
            height={300}
            width={300}
          />
          <Image
            src="/assets/images/highlight/5.JPG"
            alt=""
            height={300}
            width={300}
          />
          <Image
            src="/assets/images/highlight/6.JPG"
            alt=""
            height={300}
            width={300}
          />
          <Image
            src="/assets/images/highlight/7.JPG"
            alt=""
            height={300}
            width={300}
          />
        </div>
      </div>
    </div>
  );
}
