import Link from "next/link";
import React from "react";

export default function BecomeCA() {
  return (
    <div className="flex justify-center items-center my-20 relative h-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="block w-14 sm:w-16 md:w-20 lg:w-28 xl:w-32 aspect-square stroke-yellow-300 animate-pulse"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
        />
      </svg>

      <Link
        href="/ca"
        className="font-spaceboards max-w-[91.666667%] text-xl md:text-2xl xl:text-3xl px-10 sm:px-12 lg:px-14 xl:px-16 py-6 sm:py-6 xl:py-8 border-4 border-yellow-300 bg-black/20 backdrop-blur-xl hover:text-yellow-300 transition-all ease-in-out text-center"
      > BECOME CAMPUS AMBASSADOR
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="block w-14 sm:w-16 md:w-20 lg:w-28 xl:w-32 aspect-square stroke-yellow-300 animate-pulse"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
        />
      </svg>
    </div>
  );
}
