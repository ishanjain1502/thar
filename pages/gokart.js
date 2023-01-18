import Link from "next/link";
import React from "react";

export default function gokart() {
  return (
    <div className="gokart relative ">
      <div className="absolute md:fixed w-max  md:bg-black mx-auto flex items-center rounded-full md:bg-opacity-20 md:ring-1 md:ring-[#BEBEBEa0] md:backdrop-blur-xl top-8 md:left-1/2 md:-translate-x-1/2">
        <ul className="flex flex-col items-start md:flex-row gap-4 md:items-center justify-center px-8 py-2 font-semibold text-xl z-50 ">
          <li>
            <Link href="/">
              <span className="text-red-400">Thar</span>
            </Link>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1VxzDOubqE4xQovtSFa8gsj3cscCa7RbU/view?usp=sharing">
              Rulebook
            </a>
          </li>
          <li>
            <a href="">Glimpse</a>
          </li>
          <li>
            <a href="">Team</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="min-h-screen grid grid-rows-1 md:grid-rows-2" id="home">
        <div className="hidden md:block"></div>
        <div className="w-10/12 justify-self-center self-end md:self-center py-16 md:py-0 flex items-center justify-center">
          <div className="flex justify-between items-center flex-col md:flex-row w-full  gap-4 md:gap-0">
            <div className="flex flex-col">
              <div className="text-4xl md:text-6xl font-semibold">
                <span className="text-red-400">Thar</span> Go-Kart Championship
                !
              </div>
              <div className="font-semibold py-4">
                24 February to 26 February
              </div>
              <a
                href=""
                className="rounded-md ring-2 ring-red-400 text-red-400 px-2 py-2 self-start"
              >
                Register Now
              </a>
            </div>
            <div className="flex gap-8 items-center text-lg font-semibold md:self-start">
              <div className="h-24 w-24 md:h-32 md:w-32 bg-white rounded-lg bg-opacity-20 backdrop-blur-3xl flex justify-center items-center flex-col">
                <p className="text-5xl">24</p>
                <p className="text-lg">Feb</p>
              </div>
              to
              <div className="h-24 w-24 md:h-32 md:w-32 bg-white rounded-lg bg-opacity-20 backdrop-blur-3xl flex justify-center items-center flex-col">
                <p className="text-5xl">26</p>
                <p className="text-lg">Feb</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
