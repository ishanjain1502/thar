import Link from "next/link";
import React, { useEffect } from "react";

export default function MUNNavbar() {
  useEffect(() => {
    const closeBtn = document.querySelector(".mun .closeBtn");
    const openBtn = document.querySelector(".mun .openBtn");
    const menu = document.querySelector(".mun .menu");
    const menuItems = document.querySelectorAll(".mun .navEle");

    closeBtn.addEventListener("click", (e) => {
      menu.classList.remove("show");
      menu.classList.add("hide");
      console.log("clicked");
    });

    openBtn.addEventListener("click", (e) => {
      menu.classList.remove("hide");
      menu.classList.add("show");

      console.log("clicked");
    });

    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        menu.classList.remove("show");
      });
    });
  }, []);

  return (
    <header className="w-full fixed top-0 h-16 bg-black bg-opacity-30 backdrop-blur-3xl z-50">
      <nav className="h-full flex items-center justify-center w-full sm:w-10/12 m-auto">
        <Link href={"/"}>
          <img src="/logo64trans.png" alt="" />
        </Link>
        <ul className="menu translate-x-full sm:translate-x-0 absolute  top-0 w-full sm:bg-transparent bg-black bg-opacity-75 backdrop-blur-3xl justify-center sm:h-[inherit] h-screen  flex flex-col sm:flex-row items-center gap-8 text-2xl">
          <li className="navEle">
            <Link href="/" className="flex font-bold items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z"
                />
              </svg>
              THAR
            </Link>
          </li>
          <li className="navEle flex items-center transition-colors py-2 px-4 bg-yellow-600 leading-none rounded-xl font-extrabold">
            HOME
          </li>
          <li className="navEle flex items-center transition-colors py-2 px-4 hover:bg-yellow-600 leading-none rounded-xl hover:font-extrabold">
            COMMMITTEES
          </li>
          <li className="navEle flex items-center transition-colors py-2 px-4 hover:bg-yellow-600 leading-none rounded-xl hover:font-extrabold">
            ABOUT
          </li>
          <li className="navEle flex items-center transition-colors py-2 px-4 hover:bg-yellow-600 leading-none rounded-xl hover:font-extrabold">
            TEAM
          </li>
          <li className="navEle flex items-center transition-colors py-2 px-4 hover:bg-yellow-600 leading-none rounded-xl hover:font-extrabold">
            CONTACT
          </li>
          <li className="navEle flex items-center transition-colors py-2 px-4 hover:bg-yellow-600 leading-none rounded-xl hover:font-extrabold">
            FAQs
          </li>
          <li className="closeBtn sm:hidden">x</li>
        </ul>
        <span className="openBtn sm:hidden justify-end flex w-11/12 text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M20.437 19.937a.5.5 0 0 1 0 1l-16.874.002a.5.5 0 0 1 0-1l16.874-.002Zm0-8.437a.5.5 0 0 1 0 1l-10 .001a.5.5 0 0 1 0-1l10-.001Zm0-8.438a.5.5 0 0 1 0 1l-16.874.001a.5.5 0 0 1 0-1l16.874-.001Z"
            />
          </svg>
        </span>
      </nav>
    </header>
  );
}
