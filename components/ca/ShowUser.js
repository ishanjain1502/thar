import { signOut } from "next-auth/react";
import React from "react";

export default function ShowUser({ userData }) {
  return (
    <>
      <div className="text-center ">
        Campus Ambassador from {userData.college} <br />
        🗺️ {userData.address} <br />
        📞 {userData.phone}
      </div>
      <div className="flex flex-row flex-wrap flex-shrink-0 justify-center p-2">
        <div className="w-1/2 lg:w-1/4 p-2">
          <div className="rounded-lg text-center flex flex-col justify-center place-items-center p-2 font-semibold h-full bg-purple-200 py-6 text-xl">
            {userData.referralCount}
            <div className="font-normal pt-2 text-base">Referrals</div>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/4 p-2">
          <div className="rounded-lg text-center flex flex-col justify-center place-items-center p-2 font-semibold h-full bg-emerald-200 py-6 text-xl">
            <div className="text-center">
              {userData.referralCode}{" "}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(userData.referralCode);
                  alert(`CA id ${userData.referralCode} copied to clipboard`);
                }}
              >
                📋
              </button>
            </div>
            <div className="font-normal pt-2 text-base">Referral Code</div>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/4 p-2">
          <div className="rounded-lg text-center flex flex-col justify-center place-items-center p-2 font-semibold h-full bg-sky-200 py-6 text-xl">
            {userData.year}
            <div className="font-normal pt-2 text-base">{userData.degree}</div>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/4 p-2">
          <div className="rounded-lg text-center flex flex-col justify-center place-items-center p-2 font-semibold h-full bg-yellow-200 py-6 text-xl">
            +91 90798 10261{" "}
            <div className="font-normal pt-2 text-base">Support</div>
          </div>
        </div>
      </div>
      <button
        className="transition-all w-fit mx-auto bg-black text-white rounded-lg py-2 px-4  justify-center items-center mt-4 active:scale-95 flex flex-row gap-2"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </>
  );
}
