import React from "react";

export default function Hero() {
  return (
    <>
      <div className="min-h-screen grid grid-rows-1 md:grid-rows-2" id="home">
        <div className="hidden md:block"></div>
        <div className="w-10/12 justify-self-center self-end md:self-center py-16 md:py-0 flex items-center justify-center">
          <div className="flex justify-between items-center flex-col md:flex-row w-full  gap-4 md:gap-0">
            <div className="flex flex-col">
              <div className="text-4xl md:text-6xl font-semibold">
                <span className="text-yellow-300">Thar</span> RC NITRO
                Championship!
              </div>
              <div className="font-semibold py-4">
                24 February to 26 February
              </div>
              <div className="flex flex-row flex-wrap gap-2">
                <a
                  href="https://drive.google.com/file/d/1D5SFx9wd5FYXDPXNSJJsse-TIQrVizd2/view?usp=sharing"
                  className="rounded-md ring-2 ring-yellow-300 bg-yellow-300 text-black font-semibold px-4 py-2 self-start"
                >
                  Rulebook
                </a>
                <a
                  href="#"
                  className="rounded-md ring-2 ring-yellow-300 text-yellow-300 px-2 py-2 self-start"
                >
                  Register Now
                </a>
              </div>
            </div>
            <div className="flex gap-8 items-center text-lg font-semibold md:self-start">
              <div className="h-24 w-24 md:h-32 md:w-32 bg-white rounded-lg bg-opacity-20 backdrop-blur-3xl flex justify-center items-center flex-col">
                <p className="text-5xl">24</p>
                <p className="text-lg">Feb</p>
              </div>
              to
              <div className="h-24 w-24 md:h-32 md:w-32 bg-white rounded-lg bg-opacity-20 backdrop-blur-3xl flex justify-center items-center flex-col">
                <p className="text-5xl">26</p>
                <p className="text-lg">Feb</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
