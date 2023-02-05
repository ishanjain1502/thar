import { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

export const NavBar = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [imgSize, setImgSize] = useState(485);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollYval = scrollY;
      if (scrollYval > 50) {
        document.getElementById("navbar").style.backgroundColor =
          "rgb(0 0 0 / 0.3)";
        document.getElementById("navbar").style.backdropFilter = "blur(24px)";
        setImgSize(300);
      } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar").style.backdropFilter = "blur(0px)";
        setImgSize(485);
      }
    });
  }, []);

  return (
    <div
      id="navbar"
      className="font-spaceboards fixed z-40 transition-all ease-in-out w-full"
    >
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 text-sm xl:text-base">
        <div className="relative grid items-center grid-cols-2 lg:grid-cols-3">
          <ul className="items-center justify-center hidden space-x-4 xl:space-x-8 lg:flex">
            <NavItemPrimary href="/events" text="EVENTS" />
            <NavItemPrimary href="/gokart" text="GOKART" />
            <NavItemPrimary href="/robowar" text="ROBOWAR" />
          </ul>
          <Link
            href="/"
            aria-label="Thar 2023"
            title="Thar 2023"
            className="inline-flex items-center lg:mx-auto"
          >
            <img
              height={imgSize}
              width={imgSize}
              src="/assets/images/main/navBanner.png"
              alt="Thar 2023 Navigation Logo"
              // className="pointer-events-none w-auto sm:w-10/12 lg:w-auto"
              className="tra transition-all ease-in-out scale-90 xl:scale-100 duration-300"
              draggable="false"
            />
          </Link>
          <ul className="items-center justify-center hidden space-x-4 xl:space-x-8 lg:flex">
            <NavItemSecondary text="AMBASSADOR" href="/ca" />
            <NavItemSecondary text="TEAM" href="/team" />
            {/* Show button on the basis of session */}
            {session ? (
              <Link
                type="button"
                className="text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 font-sans shadow-xl hover:ring-2 ring-yellow-500"
                href="/participant/dashboard"
              >
                👤 Profile
              </Link>
            ) : (
              <button
                type="button"
                className="text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 font-sans shadow-xl hover:ring-2 ring-yellow-500"
                onClick={() =>
                  signIn("google", { callbackUrl: "/participant/dashboard" })
                }
              >
                <img
                  src="/assets/images/main/google.png"
                  alt=""
                  className="w-4 mr-2"
                />
                Sign in
              </button>
            )}
          </ul>
          <div className="ml-auto lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full">
            <div className="p-5 bg-black rounded shadow-sm min-h-screen flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="">
                  <Link
                    href="/"
                    aria-label="Thar 2023"
                    title="Thar 2023"
                    className="inline-flex items-center"
                  >
                    <img
                      src="/assets/images/main/navBanner.png"
                      alt="Thar 2023 Navigation Logo"
                      className="pointer-events-none w-8/12"
                      draggable="false"
                    />
                  </Link>
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-5 text-white" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <nav className="my-auto">
                <ul className="space-y-6 py-6 flex-col justify-center items-center text-center">
                  <NavItemPrimary href="/events" text="EVENTS" />
                  <NavItemPrimary href="/gokart" text="GOKART" />
                  <NavItemPrimary href="/robowar" text="ROBOWAR" />
                  <NavItemPrimary href="/rcnitro" text="RC NITRO" />
                  {/* <NavItemPrimary href="/mun" text="MUN" /> */}
                  <NavItemSecondary href="/ca" text="CAMPUS AMBASSADOR" />
                  <NavItemSecondary href="/team" text="TEAM" />
                  <NavItemSecondary href="/sponsors" text="SPONSORS" />
                  {/* Show button on the basis of session */}
                  {session ? (
                    <Link
                      type="button"
                      className="text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center font-sans shadow-xl hover:ring-2 ring-yellow-500"
                      href="/participant/dashboard"
                    >
                      👤 Profile
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className="text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center font-sans shadow-xl hover:ring-2 ring-yellow-500"
                      onClick={() =>
                        signIn("google", {
                          callbackUrl: "/participant/dashboard",
                        })
                      }
                    >
                      <img
                        src="/assets/images/main/google.png"
                        alt=""
                        className="w-4 mr-2"
                      />
                      Sign in
                    </button>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
const NavItemPrimary = ({ href, text }) => {
  return (
    <li>
      <Link
        href={href}
        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400 text-center"
        title={text}
      >
        {text}
      </Link>
    </li>
  );
};
const NavItemSecondary = ({ href, text }) => {
  return (
    <li>
      <Link
        href={href}
        className="inline-flex items-center justify-center w-full font-medium tracking-wide text-white transition duration-200 rounded bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none text-center"
        title={text}
      >
        {text}
      </Link>
    </li>
  );
};
