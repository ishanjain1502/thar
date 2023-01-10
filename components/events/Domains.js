import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { domains_data } from "../../data/domains";

export default function Domains({ id }) {
  const [imgUrl, setImgUrl] = useState(
    `/assets/images/events/domains/${id}.jpg`
  );
  return (
    <div
      key={id}
      className="flex flex-col sm:flex-row w-full bg-zinc-900 backdrop-blur-lg max-w-sm sm:max-w-full md:max-w-3xl lg:max-w-4xl rounded-md overflow-hidden ring-2 ring-yellow-300"
    >
      <div className="aspect-square w-full sm:w-6/12 overflow-hidden relative">
        <Image
          src={imgUrl}
          fill
          quality={75}
          onError={() => setImgUrl(`/assets/images/events/placeholder.png`)}
        />
      </div>
      <div className="w-full sm:w-6/12 p-4 justify-between py-10 flex flex-col">
        <span>
          <p className="text-3xl sm:text-4xl font-spaceboards text-yellow-300 uppercase break-words">
            {id.replaceAll("_", " ")}
          </p>
          <article className="text-base sm:text-lg mt-2 text-zinc-300">
            {domains_data[id]}
          </article>
        </span>
        <Link href={`/events/${id}`} passHref legacyBehavior>
          <a className="px-6 py-2 ring mt-4 rounded-md font-bold bg-yellow-300 hover:bg-yellow-300/90 hover:text-black active:scale-95 transition-all ease-in-out text-yellow-900 ring-yellow-200/30 uppercase text-center">
            View Events
          </a>
        </Link>
      </div>
    </div>
  );
}
