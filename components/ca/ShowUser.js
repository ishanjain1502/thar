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
      <div className="grid grid-cols-2 md:grid-cols-4 p-2 gap-2 md:gap-4">
        <div className="bg-white rounded-lg text-center p-2 font-semibold">
          {userData.referredTharUser.length} <br /> Referrals
        </div>
        <div className="bg-white rounded-lg text-center p-2 font-semibold">
          {userData.referralCode} <br /> Referral Code
        </div>
        <div className="bg-white rounded-lg text-center p-2 font-semibold">
          {userData.year} <br /> {userData.degree}
        </div>
        <div className="bg-white rounded-lg text-center p-2 font-semibold">
          +91 7240732728 <br />
          Support
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
