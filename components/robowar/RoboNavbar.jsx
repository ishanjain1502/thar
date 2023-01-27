import Link from "next/link";
import React from "react";

export default function RoboNavbar() {
  return (
    <div className="font-orbi z-50 absolute md:fixed w-max  md:bg-black mx-auto flex items-center rounded-full md:bg-opacity-20 md:ring-1 md:ring-yellow-400 md:backdrop-blur-xl top-8 md:left-1/2 md:-translate-x-1/2">
      <ul className="flex flex-col items-start md:flex-row gap-4 md:items-center justify-center px-8 py-2 font-semibold text-xl z-50 ">
        <li>
          <Link target={"blank"} href="/">
            <span className="text-yellow-400">THAR</span>
          </Link>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#highlights">Glimpse</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        <li>
          <a href="FAQ">FAQ</a>
        </li>
      </ul>
    </div>
  );
}
