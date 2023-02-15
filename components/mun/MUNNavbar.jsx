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
    <header className="w-full sticky top-0 h-16 bg-black bg-opacity-30 backdrop-blur-3xl z-50">
      <nav className="backdrop-blur-xl h-full flex items-center justify-center w-full lg:w-10/12 m-auto p-2">
        <Link
          href={"/"}
          className="lg:hidden justify-start flex w-11/12 text-2xl"
        >
          <img src="/logo64trans.png" alt="" className="h-12 md:h-full" />
        </Link>
        <ul className="menu translate-x-full lg:translate-x-0 absolute  top-0 w-full lg:bg-transparent bg-black bg-opacity-75  justify-center md:justify-start lg:h-[inherit] h-screen  flex flex-col lg:flex-row items-center gap-8">
          <li className="navEle md:ml-4">
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
          <Link href="#home">
            <li className="navEle flex items-center transition-colors py-2 px-4 bg-yellow-600 leading-none rounded-lg">
              HOME
            </li>
          </Link>
          <Link href="#about">
            <li className="navEle flex items-center transition-colors py-2 px-4 hover:bg-yellow-600 leading-none rounded-lg ">
              ABOUT
            </li>
          </Link>
          <Link href="/mun#committees">
            <li className="navEle flex items-center transition-colors py-2 px-4 hover:bg-yellow-600 leading-none rounded-lg ">
              COMMITTEES & AGENDAS
            </li>
          </Link>
          {/* <Link href="mun/team">
            <li className="navEle flex items-center transition-colors py-2 px-4 hover:bg-yellow-600 leading-none rounded-xl ">
              TEAM
            </li>
          </Link> */}
          {/* <Link href="mun/contact">
            <li className="navEle flex items-center transition-colors py-2 px-4 hover:bg-yellow-600 leading-none rounded-xl ">
              CONTACT
            </li>
          </Link> */}
          {/* <li className="navEle flex items-center transition-colors py-2 px-4 hover:bg-yellow-600 leading-none rounded-xl ">
            FAQs
          </li> */}
          <li className="closeBtn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </li>
        </ul>
        <span className="openBtn lg:hidden justify-end flex w-11/12 text-2xl">
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
