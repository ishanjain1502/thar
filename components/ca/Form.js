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
          Hey, Now we have moved our login CA portal. <br />
          If you previously filled the from then continue with the same emal id
          filled OR you can continue we will ask you details in furthur process
          <div className="w-full">
            {/* <button className="transition-all flex flex-row gap-2 flex-shrink-0 w-fit mx-auto bg-rose-600 text-white py-2 px-4 rounded-xl justify-center items-center mt-4 active:scale-95">
              Continue with Google
            </button> */}
            <AuthenticationButton />
          </div>
        </div>
      </div>
    </div>
  );
}
