import React, { useEffect, useState } from "react";

export default function BottomNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        let scrollYval = scrollY;
        if (scrollYval > 50) {
          document.getElementById("bottom-nav").style.display = "flex";
        } else {
          document.getElementById("bottom-nav").style.display = "none";
        }
      },
      []
    );
  });
  return (
    <div
      id="bottom-nav"
      className="w-full fixed bottom-0 z-10 hidden justify-between font-spaceboards"
    >
      <div className="p-4 w-3/12 bg-black/20 xl:rounded-tr-full backdrop-blur-2xl lg:flex flex-row items-center justify-evenly ring-2 ring-white/80 hidden">
        <div className="p-2">About</div>
        <div className="p-2">Contact</div>
      </div>
      <div className="p-4 w-3/12 bg-black/20 xl:rounded-tl-full backdrop-blur-2xl lg:flex flex-row items-center justify-evenly ring-2 ring-white/80 hidden">
        <div className="p-2">dskj</div>
        <div className="p-2">ipsum</div>
      </div>
    </div>
  );
}
