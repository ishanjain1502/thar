import Link from "next/link";
import React from "react";

export default function GokartNavbar() {
  return (
    <div className="z-50 absolute md:fixed w-max  md:bg-black mx-auto flex items-center rounded-full md:bg-opacity-20 md:ring-1 md:ring-[#BEBEBEa0] md:backdrop-blur-xl top-8 md:left-1/2 md:-translate-x-1/2">
      <ul className="flex flex-col items-start md:flex-row gap-4 md:items-center justify-center px-8 py-2 font-semibold text-xl z-50 ">
        <li>
          <Link target={"blank"} href="/">
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
  );
}
