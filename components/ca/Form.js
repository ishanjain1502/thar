import React from "react";
import AuthenticationButton from "./AuthenticationButton";

export default function About() {
  return (
    <div
      className="w-full py-6 flex flex-col justify-center sm:py-12"
      id="caform"
    >
      {/* Flex Break Point - lg */}
      <div className="py-3 mx-auto w-11/12 sm:w-9/12  md:w-8/12 lg:w-7/12 xl:w-6/12">
        <div className="relative px-4 py-10 bg-white/80 text-black text-lg backdrop-blur-xl shadow-lg rounded-xl sm:rounded-3xl sm:p-20">
          If you previously filled our Campus Ambassadors form then continue
          with the same gmail id you filled with OR you can continue with any
          Gmail
          <div className="w-full">
            <AuthenticationButton />
          </div>
        </div>
      </div>
    </div>
  );
}
