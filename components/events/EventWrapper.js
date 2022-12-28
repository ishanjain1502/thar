import Link from "next/link";
import React, { useEffect } from "react";

import Event from "./Event";

export default function EventWrapper() {
  return (
    <div className="relative mx-auto py-8 md:py-16 px-4 w-full max-w-7xl flex flex-col items-center">
      <div className="flex flex-col sm:flex-row w-full bg-zinc-900 backdrop-blur-lg max-w-sm sm:max-w-full md:max-w-3xl lg:max-w-4xl rounded-md overflow-hidden ring-2 ring-yellow-300">
        <div className="ring-1 aspect-square w-full sm:w-6/12"></div>
        <div className="ring-1 w-6/12 p-4 justify-center flex flex-col">
          <p className="text-4xl font-spaceboards text-yellow-300 uppercase">
            Aeromodeling
          </p>
          <article className="text-lg mt-2 text-zinc-300">
            To soar the sky has been humankind's ultimate wish since the
            beginning of our time. Bringing this spirit to our festival, we
            present a plethora of events where you can test your aerodynamics
            and innovation skills. Contribute to the practical understanding of
            science by immersing yourself in this occasion. Replicate the flight
            of your dreams with the finest of people having the finest of
            skills.
          </article>
          <Link href="as" passHref legacyBehavior>
            <a className="px-6 py-2 ring mt-4 rounded-md font-bold bg-yellow-300 hover:bg-yellow-300/90 hover:text-black active:scale-95 transition-all ease-in-out text-yellow-900 ring-yellow-200/30 uppercase">
              View Events
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

/*

 ----------- CodeWars ----------
<div id="Code_wars" className="flex items-end justify-between">
<h2 className="text-xl sm:text-2xl text-white font-bold">
  Code Wars
</h2>
{/* <a
  href="#link"
  className="text-base text-white text-opacity-60 font-semibold hover:underline hover:text-opacity-80"
>
  See All
</a> 
</div>
--- Cards ---
<div className="mt-8 mx-auto md:mx-auto max-w-md md:max-w-none grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 mb-10">
{Code_wars.map((event) => (
  <Event
    id={event.id}
    key={event.id}
    name={event.name}
    timeLeft={event.domain}
    sDesc={event.sDesc}
  />
))}
</div>


*/
