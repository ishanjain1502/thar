import React from "react";

export default function Member({ src, name, pos, des }) {
  return (
    <div className=" flex flex-col">
      <img
        src={`/assets/images/team/${src}.jpg`}
        alt=""
        className="w-28 object-fit border-2 border-yellow-300"
      />
      <p className="flex flex-col w-full text-base mt-4 text-yellow-300">
        {name}
        {pos && <span className="text-xs text-white">{pos}</span>}
        {des && <span className="text-xs text-white">{des}</span>}
      </p>
    </div>
  );
}
