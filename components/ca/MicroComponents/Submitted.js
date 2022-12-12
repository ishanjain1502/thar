import React from "react";

export default function Submitted({ id }) {
  return (
    <div className="text-xl md:text-2xl lg:text-3xl text-center text-slate-900 font-semibold">
      Congratulations! You have been registered for Campus Ambassador Programme
      of RTU THAR 2023.
      <div className=" bg-yellow-300 px-2 mt-2 py-1 w-fit mx-auto">
        Your Id: <span className="font-mono">{id}</span>
      </div>
    </div>
  );
}
