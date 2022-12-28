import React from "react";
import { domains_data } from "../../data/domains";
import Domains from "./Domains";

export default function EventWrapper() {
  return (
    <div className="relative mx-auto py-8 md:py-16 px-4 w-full max-w-7xl flex flex-col items-center gap-10">
      {Object.keys(domains_data).map((domain) => (
        <Domains id={domain} />
      ))}
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
