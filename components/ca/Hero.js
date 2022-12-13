import React from "react";

export default function Hero() {
  return (
    <div
      className="w-full pt-28 md:pt-36 lg:pt-44 xl:pt-52 flex justify-center items-center"
      id="hero"
    >
      <div className="w-11/12 sm:w-10/12 md:w-8/12 xl:w-8/12 bg-yellow-300/5 backdrop-blur-xl  rounded-md border-4 border-white/40 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-6 sm:py-8 md:py-12 lg:py-14 xl:py-16">
        <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">
          Let us take up some responsibilities by becoming a{" "}
          <span className="text-yellow-50">Campus Ambassador</span> in the most
          awaited fest <span className="text-yellow-300">THAR&apos;23</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center pt-6 gap-4">
          <a
            href="#aboutca"
            className="font-spaceboards w-[90%] sm:w-fit text-center p-4 border-2 bg-white/10 backdrop-blur-lg text-white border-yellow-300 hover:brightness-110 hover:bg-white/20 hover:text-yellow-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all ease-in-out"
          >
            Know More
          </a>
          <a
            href="#caform"
            className="font-spaceboards w-[90%] sm:w-fit text-center p-4 border-2 bg-yellow-300 backdrop-blur-lg text-black border-yellow-300 hover:-translate-y-1 hover:brightness-110 hover:shadow-yellow-300 active:scale-95 transition-all ease-in-out"
          >
            Fill Up the Form
          </a>
        </div>
      </div>
    </div>
  );
}
