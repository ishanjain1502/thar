import { signOut } from "next-auth/react";
import React from "react";

export default function ShowParticipant({ userData }) {
  return (
    <>
      <div className="text-center">
        🎓{userData.college} <br />
        📞 {userData.phone}
      </div>
      <div className="flex flex-row flex-wrap flex-shrink-0 justify-center p-2">
        <div className="w-1/2 lg:w-1/4 p-2">
          <div className="rounded-lg text-center flex flex-col justify-center place-items-center p-2 font-semibold h-full bg-purple-200 py-6 text-xl">
            {userData.credits}{" "}
            <div className="font-normal pt-2 text-base"> Your Credits</div>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/4 p-2">
          <div className="rounded-lg text-center flex flex-col justify-center place-items-center p-2 font-semibold h-full bg-emerald-200 py-6 text-xl">
            <div className="text-center">
              {userData.userTharID}{" "}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(userData.referralCode);
                  alert(`User id ${userData.userTharID} copied to clipboard`);
                }}
              >
                📋
              </button>
            </div>
            <div className="font-normal pt-2 text-base">Your Id</div>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/4 p-2">
          <div
            className="rounded-lg text-center flex flex-col justify-center place-items-center p-2 font-semibold h-full bg-sky-200 py-6 text-xl cursor-pointer"
            onClick={() => {
              alert("this option is currently unavailable");
            }}
          >
            Buy Credits
          </div>
        </div>
        <div className="w-1/2 lg:w-1/4 p-2">
          <div className="rounded-lg text-center flex flex-col justify-center place-items-center p-2 font-semibold h-full bg-yellow-200 py-6 text-xl">
            +91 90798 10261{" "}
            <div className="font-normal pt-2 text-base">Support</div>
          </div>
        </div>
      </div>
      <div className="text-slate-700 font-semibold px-4 py-2 md:text-center">
        Credits are used to participate in events. We will soon let you buy
        credits, till then check out our amazing events!
      </div>
      <button
        className="transition-all w-fit mx-auto bg-black font-semibold text-white rounded-lg py-2 px-4  justify-center items-center mt-4 active:scale-95 flex flex-row gap-2"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </>
  );
}
