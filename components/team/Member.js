import React from "react";

export default function Member({ src, name, pos, des }) {
  return (
    <div className=" flex flex-col">
      <img
        src={`/assets/images/team/${src}.jpg`}
        alt=""
        className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 object-fit team-frame aspect-[540/720] p-2.5 sm:p-3 md:p-3 lg:p-4 xl:p-4 bg-black/50 backdrop-blur-sm"
      />
      <p className="flex flex-col w-full text-base mt-4 text-yellow-300">
        {name}
        {pos && <span className="text-xs text-white">{pos}</span>}
        {des && <span className="text-xs text-white">{des}</span>}
      </p>
    </div>
  );
}
