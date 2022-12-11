import React from "react";

export default function Hero() {
  return (
    <div
      className="w-full pt-28 md:pt-36 lg:pt-44 xl:pt-52 flex justify-center"
      id="hero"
    >
      <div className="w-11/12 sm:w-10/12 md:w-8/12 xl:w-8/12 bg-yellow-300/5 backdrop-blur-xl  rounded-md border-4 border-white/40 p-4 md:p-6 lg:p-8 xl:p-12">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center font-semibold">
          We need <span className="text-yellow-50">Campus Ambassadors</span>{" "}
          from Your Campus
        </div>
        <div className="flex flex-row justify-center items-center pt-12 pb-6 gap-4">
          <a
            href="#aboutca"
            className="font-spaceboards text-lg lg:text-xl p-4 border-2 bg-white/10 backdrop-blur-lg text-white border-yellow-300 hover:brightness-110 hover:bg-white/20 hover:text-yellow-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all ease-in-out"
          >
            Know More
          </a>
          <a
            href="#caform"
            className="font-spaceboards text-lg lg:text-xl p-4 border-2 bg-yellow-300 backdrop-blur-lg text-black border-yellow-300 hover:-translate-y-1 hover:brightness-110 hover:shadow-yellow-300 active:scale-95 transition-all ease-in-out"
          >
            Fill Up the Form
          </a>
        </div>
      </div>
    </div>
  );
}
