import Image from "next/image";
import React from "react";
import {
  BsEnvelope,
  BsEnvelopeFill,
  BsInstagram,
  BsLinkedin,
  BsTelephoneFill,
} from "react-icons/bs";

export default function TeamCard() {
  return (
    <div className="relative ring-yellow-300 rounded-lg">
      <div className="relative w-60 aspect-[3/4] rounded-t-lg overflow-hidden">
        <Image src="/assets/images/team/studentorg/Narayan Joshi.jpg" fill />
      </div>
      <p className="font-spaceboards absolute w-full -translate-y-full flex flex-col justify-center items-center text-yellow-300 bg-black py-3 text-xl">
        NARAYAN JOSHI
        <a
          href={`tel:8645678937`}
          className="text-lg text-white flex items-center font-sans"
        >
          <BsTelephoneFill className="w-3.5 mr-1" /> 8645678937
        </a>
      </p>
      <div className="flex w-full bg-yellow-300 py-3 text-black rounded-b-lg justify-center gap-4">
        <a href="">
          <BsEnvelopeFill
            className="w-10 scale-125 stroke-[0.2] hover:scale-150 ease-in-out transition-all duration-200"
            title="Mail"
          />
        </a>
        <a href="">
          <BsInstagram
            className="w-10 scale-125 hover:scale-150 ease-in-out transition-all duration-200"
            title="Instagram"
          />
        </a>
        <a href="">
          <BsLinkedin
            className="w-10 scale-125 hover:scale-150 ease-in-out transition-all duration-200"
            title="LinkedIn"
          />
        </a>
      </div>
    </div>
  );
}
