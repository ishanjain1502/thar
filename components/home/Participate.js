import React from "react";
import AuthenticationButton from "../participant/AuthenticationButton";

export default function Participate() {
  return (
    <div
      className="w-full flex justify-center items-center my-6 sm:my-9  md:my-12 lg:my-16"
      id="participant"
    >
      <div className="w-11/12 sm:w-10/12 md:w-8/12 xl:w-8/12 bg-yellow-300/5 backdrop-blur-xl  rounded-sm ring-4 ring-yellow-300 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-6 sm:py-8 md:py-12 lg:py-14 xl:py-16 md:text-center text-xl sm:text-2xl md:text-3xl">
        And here you go, Participate in the most awaited fest of RTU, Kota
        <br />
        <AuthenticationButton />
      </div>
    </div>
  );
}
