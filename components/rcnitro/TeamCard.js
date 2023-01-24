import Image from "next/image";
import React from "react";
import {
  BsEnvelopeFill,
  BsInstagram,
  BsLinkedin,
  BsTelephoneFill,
} from "react-icons/bs";

export default function TeamCard({ name, mob, mail, insta, linkedin }) {
  return (
    <div
      key={name}
      className="relative ring-yellow-300 rounded-lg shadow-xl hover:scale-[1.02] transition-all ease-in-out"
    >
      <div className="relative w-60 aspect-[3/4] rounded-t-lg overflow-hidden">
        <Image
          src={`/assets/images/rcnitro/team/${name}.jpg`}
          fill
          className="object-cover object-center"
        />
      </div>
      <p className="font-spaceboards absolute w-full -translate-y-full flex flex-col justify-center items-center text-yellow-300 bg-black py-3 text-lg">
        {name.toUpperCase()}
        <a
          href={`tel:${mob}`}
          className="text-base text-white flex items-center font-sans"
        >
          <BsTelephoneFill className="w-3 mr-1.5 -mb-0.5" /> {mob}
        </a>
      </p>
      <div className="flex w-full bg-yellow-300 py-3 text-black rounded-b-lg justify-center gap-4">
        {mail && (
          <a href={`mailto:${mail}`}>
            <BsEnvelopeFill
              className="w-10 scale-125 stroke-[0.2] hover:scale-150 ease-in-out transition-all duration-200"
              title="Mail"
            />
          </a>
        )}
        {insta && (
          <a href={insta}>
            <BsInstagram
              className="w-10 scale-125 hover:scale-150 ease-in-out transition-all duration-200"
              title="Instagram"
            />
          </a>
        )}
        {linkedin && (
          <a href={linkedin}>
            <BsLinkedin
              className="w-10 scale-125 hover:scale-150 ease-in-out transition-all duration-200"
              title="LinkedIn"
            />
          </a>
        )}
      </div>
    </div>
  );
}
