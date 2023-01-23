import React from "react";

export default function RoboHero() {
  return (
    <div id="home" className="">
      <div className="md:w-10/12 flex flex-col md:justify-center m-auto min-h-screen justify-end py-8 w-11/12 ">
        <span className="text-red-400 font-orbi font-black text-xl">THAR</span>
        <h1 className="font-blackops text-6xl md:text-8xl text-yellow-400">
          ROBOWAR
        </h1>
        <div className="flex gap-8 items-center text-lg font-semibold md:self-start">
          <div className="h-24 w-24 md:h-32 md:w-32 bg-white rounded-lg bg-opacity-20 backdrop-blur-3xl flex justify-center items-center flex-col ring-1 ring-yellow-400">
            <p className="text-5xl text-yellow-400 font-blackops">24</p>
            <p className="text-lg">Feb</p>
          </div>
          to
          <div className="h-24 w-24 md:h-32 md:w-32 bg-white rounded-lg bg-opacity-20 backdrop-blur-3xl flex justify-center items-center flex-col ring-1 ring-yellow-400">
            <p className="text-5xl text-yellow-400 font-blackops">26</p>
            <p className="text-lg">Feb</p>
          </div>
        </div>
        <a
          href="#"
          className="px-8 py-4 rounded-lg text-sm md:text-lg hover:bg-yellow-200 self-start mt-4 text-yellow-400 font-bold ring-1 ring-yellow-400 font-orbi "
        >
          REGISTER
        </a>
      </div>
    </div>
  );
}
