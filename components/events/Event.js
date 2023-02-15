import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Event({ id, timeLeft, name, sDesc }) {
  const [imgUrl, setImgUrl] = useState(`/assets/images/events/${id}.jpg`);
  return (
    <Link href={`/events/expand/${id}`} legacyBehavior passHref>
      <a
        // Disable it currently as we don't have all the info
        key={id}
        className={`col-span-1 group relative p-4 pb-5 flex flex-col items-center border-2  rounded-xl bg-zinc-900 hover:shadow-xl border-yellow-300 ${
          id === "CW3" && `sword-cursor`
        }`}
      >
        {/* ::Image */}
        <div className="relative  rounded-2xl overflow-hidden w-full">
          <div className="object-cover aspect-square transition duration-200 ease-in transform group-hover:scale-105 w-full">
            <Image
              src={imgUrl}
              fill
              quality={75}
              onError={() => setImgUrl(`/assets/images/events/placeholder.png`)}
            />
          </div>
          {/* :::time left */}
          <span className="absolute top-2 right-2 py-1 px-3 rounded-full bg-gray-800 bg-opacity-30 text-xs text-white font-bold backdrop-filter backdrop-blur-sm">
            {timeLeft}
          </span>
        </div>
        {/* ::Details */}
        <div className="mt-4 px-2 w-full flex flex-col space-y-1">
          {/* :::name */}
          <p className="text-xl font-semibold tracking-wide group-hover:text-opacity-100 font-spaceboards uppercase text-yellow-300">
            {name}
          </p>
          {/* :::infos */}
          <span className="flex flex-col justify-between items-center">
            <span className="text-sm text-zinc-300 w-full">{sDesc}</span>
            <button
              type="button"
              className="relative inline-flex items-center mt-5 px-2.5 py-1.5 rounded-full bg-gradient-to-t from-yellow-600 to-yellow-200 text-xs text-black font-bold tracking-wide hover:to-yellow-600"
            >
              Check Details
            </button>
          </span>
        </div>
      </a>
    </Link>
  );
}
