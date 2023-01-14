import React from "react";

export default function UserData() {
  return (
    <>
      <div className="p-2 md:p-4 text-center">
        🎓 {userData.college} <br />
        🗺️ {userData.address} <br />
        📞 {userData.phone}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 p-2 gap-4 md:gap-4 py-6 px-6">
        <div className="bg-white/10 shadow-lg ring-2 ring-white/20 cursor-pointer rounded-lg text-center p-2 font-semibold">
          {userData.credits} <br /> Credits
        </div>
        <div className="bg-white/10 shadow-lg ring-2 ring-white/20 cursor-pointer rounded-lg text-center p-2 font-semibold">
          id <br /> Thar Id
        </div>
        <div className="bg-white/10 shadow-lg ring-2 ring-white/20 cursor-pointer rounded-lg text-center p-2 font-semibold">
          asd <br /> asd
        </div>
        <div className="bg-white/10 shadow-lg ring-2 ring-white/20 cursor-pointer rounded-lg text-center p-2 font-semibold">
          +91 7240732728 <br />
          Support
        </div>
      </div>
      <button
        className="transition-all w-fit mx-auto bg-yellow-200 text-black font-semibold rounded-lg py-2 px-4  justify-center items-center mt-4 active:scale-95 flex flex-row gap-2"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </>
  );
}
