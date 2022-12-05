import React from "react";

export default function Member({ src, name, pos }) {
  return (
    <div className="w-48 flex flex-col items-center">
      <img
        src={`/assets/images/team/${src}.jpg`}
        alt=""
        className="h-56 w-full object-fit saturate-0 border-4 border-white"
      />
      <p className="flex flex-col w-full text-xl mt-4">
        {name}
        <span className="text-base">{pos}</span>
      </p>
    </div>
  );
}
