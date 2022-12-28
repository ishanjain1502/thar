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
        className="font-spaceboards max-w-[91.666667%] text-xl md:text-2xl xl:text-3xl px-10 sm:px-12 lg:px-14 xl:px-16 py-6 sm:py-6 xl:py-8 border-4 border-yellow-300 bg-black/20 backdrop-blur-xl hover:text-yellow-300 transition-all ease-in-out text-center relative my-20"
      >
        {" "}
        BECOME CAMPUS AMBASSADOR
        {/* <CursorArrowRaysIcon className="absolute w-3/12 md:w-[22%] right-0 bottom-0 translate-x-[40%] translate-y-[40%] -rotate-[30deg]" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-2/12 md:w-[15%] top-[120%] left-[40%] stroke-1 fill-porsche animate-bouncy opacity-100 group-hover:opacity-0 group-hover:fill-porsche-600 transition-all duration-300 fill-yellow-300 animate-pulse"
          viewBox="0 0 16 16"
        >
          <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.632 2.632 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z" />
        </svg>
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
