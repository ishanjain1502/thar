import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function BottomNavBar() {
  useEffect(() => {
    function fun() {
      try {
        let scrollYval = scrollY;
        if (scrollYval > 50) {
          document.getElementById("bottom-nav").style.display = "flex";
        } else {
          document.getElementById("bottom-nav").style.display = "none";
        }
      } catch {
        document.removeEventListener("scroll", fun);
      }
    }
    window.addEventListener("scroll", fun);
  }, []);
  return (
    <div
      id="bottom-nav"
      className="w-full sticky bottom-0 z-10 hidden justify-between font-spaceboards h-14"
    >
      <div className="p-4 w-3/12 xl:w-[21%] bg-black/20 rounded-r-xl backdrop-blur-2xl lg:flex flex-row items-center justify-evenly ring-2 ring-white/80 hidden">
        <div className="p-2">
          <Link href="/about" legacyBehavior passHref>
            <a>ABOUT</a>
          </Link>
        </div>
        <div className="p-2">
          <Link href="/sponsors" legacyBehavior passHref>
            <a>SPONSORS</a>
          </Link>
        </div>
      </div>
      <div className="p-4 w-3/12 xl:w-[21%] bg-black/20 rounded-l-xl backdrop-blur-2xl lg:flex flex-row items-center justify-evenly ring-2 ring-white/80 hidden">
        <div className="p-2">
          <Link href="/rcnitro" legacyBehavior passHref>
            <a>RC NITRO</a>
          </Link>
        </div>
        <div className="p-2">
          {/* <Link href="/mun" legacyBehavior passHref>
            <a> MUN</a>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
