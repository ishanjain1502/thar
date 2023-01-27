import React from "react";
import {
  BsEnvelopeFill,
  BsPersonFill,
  BsPhoneFill,
  BsPinAngle,
} from "react-icons/bs";

export default function Contact() {
  return (
    <div className="relative mx-auto py-10 px-4 w-full max-w-7xl">
      <div className="mx-auto max-w-5xl">
        {/* :DOTS BACKGROUND */}
        <div>
          {/* ::Dots 1 */}
          <span className="absolute top-0 left-0 hidden md:block opacity-10">
            <svg
              width={250}
              height={600}
              fill="none"
              viewBox="0 0 250 600"
              aria-hidden="true"
            >
              <pattern
                id="pattern-rectangles"
                x={0}
                y={0}
                width={40}
                height={40}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={10}
                  height={10}
                  className="text-yellow-300"
                  fill="currentColor"
                />
              </pattern>
              <rect width={250} height={600} fill="url(#pattern-rectangles)" />
            </svg>
          </span>
          {/* ::Dots 2 */}
          <span className="absolute bottom-0 right-0 opacity-20">
            <svg
              width={300}
              height={300}
              fill="none"
              viewBox="0 0 300 300"
              aria-hidden="true"
            >
              <pattern
                id="pattern-circles"
                x="0"
                y="0"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
                patternContentUnits="userSpaceOnUse"
              >
                <circle
                  id="pattern-circle"
                  cx="10"
                  cy="10"
                  r="5"
                  className="fill-current text-yellow-300"
                />
              </pattern>
              <rect
                id="rect"
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#pattern-circles)"
              />
            </svg>
          </span>
        </div>

        {/* :MAIN CONTAINER */}
        <div className="relative space-y-5">
          {/* ::Title */}
          <h2 className="text-center text-5xl text-yellow-300 font-light font-spaceboards text-stroke text-stroke-color">
            CONTACT US
          </h2>

          {/* ::Some Text */}
          <p className="mx-auto py-5 max-w-3xl text-center text-base text-white">
            Do you have any queries regarding sponsorships?
            <br /> Please contact us at the provided phone number and email
            below for more details.
          </p>

          {/* ::Infos Container */}
          <div className="flex flex-wrap justify-between items-center text-base">
            {/* :::Address */}
            <div className="m-2.5 inline-flex items-center">
              <BsPersonFill className="mr-2 w-6 h-6 text-yellow-300" />
              <p className="text-white font-semibold">Prabhat Sharma</p>
            </div>
            {/* :::Phone */}
            <div className="m-2.5 inline-flex items-center">
              <BsPhoneFill className="mr-2 w-6 h-6 text-yellow-300" />
              <a href="tel:+919664160370" className="text-white font-semibold">
                +91 96641 60370
              </a>
            </div>
            {/* :::Address */}
            <div className="m-2.5 inline-flex items-center">
              <BsEnvelopeFill className="mr-2 w-6 h-6 text-yellow-300" />
              <a
                href="mailto:thar.techfest@rtu.ac.in"
                className="text-white font-semibold"
              >
                thar.techfest@rtu.ac.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
