import { signOut } from "next-auth/react";
import React from "react";

export default function ShowParticipant({ userData }) {
  return (
    <>
      <div className="text-center ">
        🎓{userData.college} <br />
        📞 {userData.phone}
      </div>
      <div className="flex flex-row flex-wrap flex-shrink-0 justify-center p-2">
        <div className="w-1/2 lg:w-1/4 p-2">
          <div className="rounded-lg text-center flex flex-col justify-center place-items-center p-2 font-semibold h-full ring-2 ring-white/60">
            {userData.credits} <div className="font-normal"> Your Credits</div>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/4 p-2">
          <div className="rounded-lg text-center flex flex-col justify-center place-items-center p-2 font-semibold h-full ring-2 ring-white/60">
            {userData.userTharID} <div className="font-normal">Your Id</div>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/4 p-2">
          <div
            className="rounded-lg text-center flex flex-col justify-center place-items-center p-2 font-semibold h-full ring-2 ring-white/60 cursor-pointer bg-white/5"
            onClick={() => {
              alert("this option is currently unavailable");
            }}
          >
            Buy Credits
          </div>
        </div>
        <div className="w-1/2 lg:w-1/4 p-2">
          <div className="rounded-lg text-center flex flex-col justify-center place-items-center p-2 font-semibold h-full ring-2 ring-white/60">
            +91 7240732728 <div className="font-normal">Support</div>
          </div>
        </div>
      </div>
      <button
        className="transition-all w-fit mx-auto bg-white font-semibold text-black rounded-lg py-2 px-4  justify-center items-center mt-4 active:scale-95 flex flex-row gap-2"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </>
  );
}
