import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function GokartHero({ setBtnClicked }) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleRegisterBtnClick = () => {
    if (!session) {
      alert("Login Required\nRedirecting to home page please wait...");
      setTimeout(() => {
        router.replace("/");
      }, 1000);
      return;
    }
    setBtnClicked(true);
  };

  return (
    <div className="min-h-screen grid grid-rows-1 md:grid-rows-2" id="home">
      <div className="hidden md:block"></div>
      <div className="w-10/12 justify-self-center self-end md:self-center py-16 md:py-0 flex items-center justify-center">
        <div className="flex justify-between items-center flex-col md:flex-row w-full  gap-4 md:gap-0">
          <div className="flex flex-col">
            <div className="text-4xl md:text-6xl font-semibold">
              <span className="text-red-400">Thar</span> Go-Kart
              Championship&nbsp;!
            </div>
            <div className="font-semibold py-4">17 March to 19 March</div>
            <button 
              className="rounded-md ring-2 ring-yellow-400 text-yellow-400 px-2 py-2 text-xl hover:bg-yellow-400 hover:text-black w-52"
              onClick={handleRegisterBtnClick}
              >
              Register NOW
              </button>
          </div>
          <div className="flex gap-8 items-center text-lg font-semibold md:self-start">
            <div className="h-24 w-24 md:h-32 md:w-32 bg-white rounded-lg bg-opacity-20 backdrop-blur-3xl flex justify-center items-center flex-col">
              <p className="text-5xl">17</p>
              <p className="text-lg">March</p>
            </div>
            to
            <div className="h-24 w-24 md:h-32 md:w-32 bg-white rounded-lg bg-opacity-20 backdrop-blur-3xl flex justify-center items-center flex-col">
              <p className="text-5xl">19</p>
              <p className="text-lg">March</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="text-5xl px-5 py-5 " > 
              Early Bird offer upto 16th Feb &nbsp;<p className="line-through inline text-red-700" > &#8377;17500</p>&nbsp; &#8377;15000
      </div> */}
    </div>
  );
}
