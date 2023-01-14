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
    <div key={name} className="relative ring-yellow-300 rounded-lg">
      <div className="relative w-60 aspect-[3/4] rounded-t-lg overflow-hidden">
        <Image src={`/assets/images/team/studentorg/${name}.jpg`} fill />
      </div>
      <p className="font-spaceboards absolute w-full -translate-y-full flex flex-col justify-center items-center text-yellow-300 bg-black py-3 text-xl">
        {name.toUpperCase()}
        <a
          href={`tel:${mob}`}
          className="text-lg text-white flex items-center font-sans"
        >
          <BsTelephoneFill className="w-3.5 mr-1" /> {mob}
        </a>
      </p>
      <div className="flex w-full bg-yellow-300 py-3 text-black rounded-b-lg justify-center gap-4">
        <a href={`mailto:${mail}`}>
          <BsEnvelopeFill
            className="w-10 scale-125 stroke-[0.2] hover:scale-150 ease-in-out transition-all duration-200"
            title="Mail"
          />
        </a>
        <a href={insta}>
          <BsInstagram
            className="w-10 scale-125 hover:scale-150 ease-in-out transition-all duration-200"
            title="Instagram"
          />
        </a>
        <a href={linkedin}>
          <BsLinkedin
            className="w-10 scale-125 hover:scale-150 ease-in-out transition-all duration-200"
            title="LinkedIn"
          />
        </a>
      </div>
    </div>
  );
}
