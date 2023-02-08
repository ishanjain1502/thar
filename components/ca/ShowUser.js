import { signOut } from "next-auth/react";
import React from "react";
import { MdContentCopy } from "react-icons/md";

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
      <div className="bg-emerald-200 m-4 p-2 lg:p-4 rounded-md">
        <div className="flex justify-between items-center flex-wrap mb-2">
          <div className="text-slate-900 text-lg font-semibold">
            Message Template
          </div>
          <button
            className="transition-all bg-sky-600 text-white py-1 px-2 rounded-md flex flex-row items-center gap-2 active:scale-90"
            onClick={() => {
              navigator.clipboard.writeText(
                `Hello Everyone, want to take part in most awaited technical fest of Rajasthan. \nRTU is back with THAR'23, with lots of amazing events, workshops, pronites, exhibitions and guest lectures. Register now and get early bird offer. \nUse my referral: https://www.rtuthar.in/participant/dashboard?referral=${userData.referralCode}`
              );
            }}
          >
            Copy <MdContentCopy style={{ color: "white" }} />
          </button>
        </div>
        <div className="text-black font-semibold text-base break-words">
          Hello Everyone, want to take part in most awaited technical fest of
          Rajasthan. <br />
          RTU is back with THAR&apos;23, with lots of amazing events, workshops,
          pronites, exhibitions and guest lectures. Register now and get early
          bird offer. <br /> Use my referral:
          https://www.rtuthar.in/participant/dashboard?referral=
          {userData.referralCode}
        </div>

        <a
          href={
            "whatsapp://send?text=" +
            "Hello Everyone, want to take part in most awaited technical fest of Rajasthan. \nRTU is back with THAR'23, with lots of amazing events, workshops, pronites, exhibitions and guest lectures. Register now and get early bird offer. \nUse my referral: https://www.rtuthar.in/participant/dashboard?referral=" +
            userData.referralCode
          }
          data-action="share/whatsapp/share"
          className="transition-all bg-emerald-900 ring-2 ring-emerald-700 text-white py-1 px-2 rounded-md flex flex-row items-center gap-2 active:scale-90 text-center w-fit mx-auto mt-6 mb-2"
          target="_blank"
          rel="noreferrer noopener"
        >
          Share to WhatsApp
        </a>
      </div>
      <button
        className="transition-all w-fit mx-auto bg-black text-white rounded-lg py-2 px-4  justify-center items-center mt-8 active:scale-95 flex flex-row gap-2"
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Sign out
      </button>
    </>
  );
}
