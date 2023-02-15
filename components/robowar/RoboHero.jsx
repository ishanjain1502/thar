import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function RoboHero({ setBtnClicked }) {
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
    <div id="home" className="">
      <div className="md:w-10/12 flex flex-col md:justify-center m-auto min-h-screen justify-end py-8 w-11/12 ">
        <span className="text-red-400 font-blackops font-black text-2xl">
          THAR
        </span>
        <h1 className="font-blackops text-6xl md:text-9xl text-yellow-400">
          ROBOWAR
        </h1>
        <div className="flex gap-8 items-center text-lg font-semibold md:self-start">
          <div className="h-24 w-24 md:h-32 md:w-32 bg-white rounded-lg bg-opacity-20 backdrop-blur-3xl flex justify-center items-center flex-col ring-1 ring-yellow-400">
            <p className="text-5xl text-yellow-400 font-blackops">17</p>
            <p className="text-lg">March</p>
          </div>
          to
          <div className="h-24 w-24 md:h-32 md:w-32 bg-white rounded-lg bg-opacity-20 backdrop-blur-3xl flex justify-center items-center flex-col ring-1 ring-yellow-400">
            <p className="text-5xl text-yellow-400 font-blackops">19</p>
            <p className="text-lg">March</p>
          </div>
        </div>
        {/* <div className="flex flex-row flex-wrap gap-4 mt-6 lg:mt-6 lg:gap-6 lg:text-xl">
          <a
            href="https://drive.google.com/file/d/1A3nmjT58X3vbvfg4IeZKnflco-5r-1e_/view?usp=sharing"
            className="rounded-md ring-2 ring-yellow-300 bg-yellow-300 text-black font-semibold px-4 py-2 self-start"
          >
            Rulebook 30kg
          </a>
          <a
            href="https://drive.google.com/file/d/1XVhvFowWJq09NTjmARdzVlrv6nlGCfw9/view?usp=sharing"
            className="rounded-md ring-2 ring-yellow-300 bg-yellow-300 text-black font-semibold px-4 py-2 self-start"
          >
            Rulebook 15kg
          </a>
        </div> */}
        <div className="my-6">
          <button 
          className="rounded-md ring-2 ring-yellow-400 text-yellow-400 px-2 py-2 text-xl hover:bg-yellow-400 hover:text-black"
          onClick={handleRegisterBtnClick}
          >
          Register NOW
          </button>
        </div>
      </div>
    </div>
  );
}
