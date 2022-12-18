import React from "react";

export default function Event({ id, timeLeft, name, sDesc }) {
  return (
    <a
      // Disable it currently as we don't have all the info
      href="#"
      // href={`/events/${id}`}
      key={id}
      className="col-span-1 group relative p-4 pb-5 flex flex-col items-center border-2 border-transparent rounded-xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-md hover:shadow-xl hover:border-yellow-300"
    >
      {/* ::Image */}
      <div className="relative max-h-64 rounded-2xl overflow-hidden w-full">
        <img
          src="/assets/images/events/placeholder.png"
          alt=""
          className="object-cover transition duration-200 ease-in transform group-hover:scale-105 w-full"
        />
        {/* :::time left */}
        <span className="absolute top-2 right-2 py-1 px-3 rounded-full bg-gray-800 bg-opacity-30 text-xs text-white font-bold backdrop-filter backdrop-blur-sm">
          {timeLeft}
        </span>
      </div>
      {/* ::Details */}
      <div className="mt-2 px-2 w-full flex flex-col space-y-1">
        {/* :::name */}
        <p className="text-xl text-opacity-80 font-semibold tracking-wide group-hover:text-opacity-100 font-spaceboards uppercase text-yellow-300">
          {name}
        </p>
        {/* :::infos */}
        <span className="flex flex-col justify-between items-center">
          <span className="text-sm text-white w-full">{sDesc}</span>
          {/* <button
            type="button"
            className="relative inline-flex items-center mt-5 px-2.5 py-1.5 rounded-full bg-gradient-to-t from-pink-600 to-pink-200 text-xs text-white font-bold tracking-wide hover:to-pink-600"
          >
            Coming Soon
          </button> */}
        </span>
      </div>
    </a>
  );
}
