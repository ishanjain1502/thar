import React from "react";

export default function Member({ src, name, pos }) {
  return (
    <div className=" flex flex-col">
      <img
        src={`/assets/images/team/${src}.jpg`}
        alt=""
        className="w-28 object-fit border-2 border-white"
      />
      <p className="flex flex-col w-full text-base mt-4">
        {name}
        <span className="text-xs">{pos}</span>
      </p>
    </div>
  );
}
