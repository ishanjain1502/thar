import Link from "next/link";
import React from "react";

export default function GokartNavbar() {
  return (
    <div className="hidden z-10 absolute md:fixed w-max  md:bg-black md:mx-auto md:flex md:items-center md:rounded-full md:bg-opacity-20 md:ring-1 md:ring-[#BEBEBEa0] md:backdrop-blur-xl top-8 md:left-1/2 md:-translate-x-1/2">
      <ul className="flex flex-col items-start md:flex-row gap-4 md:items-center justify-center px-8 py-2 font-semibold text-xl z-10">
        <li>
          <Link target={"blank"} href="/">
            <span className="text-red-400">Thar</span>
          </Link>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1VxzDOubqE4xQovtSFa8gsj3cscCa7RbU/view?usp=sharing"
            target={"blank"}
          >
            Rulebook
          </a>
        </li>
        <li>
          <a href="#highlights">Glimpse</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        <li>
          <a href="#FAQ">FAQ</a>
        </li>
      </ul>
    </div>
  );
}
