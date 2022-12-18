import React, { useEffect } from "react";
import {
  Aeromodelling,
  Automate,
  Code_wars,
  Design_and_Graphics,
  Finance,
  Marketing_and_Management,
  Robotics,
  STAND_ALONE,
  Startup_Hub,
  Structures,
} from "../../data/events";
import Event from "./Event";

export default function EventWrapper() {
  return (
    <div className="relative mx-auto py-8 md:py-16 px-4 w-full max-w-7xl">
      <div className="mx-auto max-w-5xl">
        {/* Stand Alones */}
        {/* :TITLE CONTAINER */}
        <div className="flex items-end justify-between">
          <h2 className="text-xl sm:text-2xl text-white font-bold">
            Stand Alone Events
          </h2>
          {/* <a
            href="#link"
            className="text-base text-white text-opacity-60 font-semibold hover:underline hover:text-opacity-80"
          >
            See All
          </a> */}
        </div>
        {/* Cards */}
        <div className="mt-8 mx-auto md:mx-auto max-w-md md:max-w-none grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 mb-10">
          {STAND_ALONE.map((event) => (
            <Event
              id={event.id}
              name={event.name}
              timeLeft={event.domain}
              sDesc={event.sDesc}
            />
          ))}
        </div>
        {/* ----------- CodeWars ---------- */}
        <div className="flex items-end justify-between">
          <h2 className="text-xl sm:text-2xl text-white font-bold">
            Code Wars
          </h2>
          {/* <a
            href="#link"
            className="text-base text-white text-opacity-60 font-semibold hover:underline hover:text-opacity-80"
          >
            See All
          </a> */}
        </div>
        {/* Cards */}
        <div className="mt-8 mx-auto md:mx-auto max-w-md md:max-w-none grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 mb-10">
          {Code_wars.map((event) => (
            <Event
              id={event.id}
              name={event.name}
              timeLeft={event.domain}
              sDesc={event.sDesc}
            />
          ))}
        </div>
        {/* ----------- Robotics ---------- */}
        <div className="flex items-end justify-between">
          <h2 className="text-xl sm:text-2xl text-white font-bold">Robotics</h2>
          {/* <a
            href="#link"
            className="text-base text-white text-opacity-60 font-semibold hover:underline hover:text-opacity-80"
          >
            See All
          </a> */}
        </div>
        {/* Cards */}
        <div className="mt-8 mx-auto md:mx-auto max-w-md md:max-w-none grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 mb-10">
          {Robotics.map((event) => (
            <Event
              id={event.id}
              name={event.name}
              timeLeft={event.domain}
              sDesc={event.sDesc}
            />
          ))}
        </div>
        {/* ----------- Structures ---------- */}
        <div className="flex items-end justify-between">
          <h2 className="text-xl sm:text-2xl text-white font-bold">
            Structures
          </h2>
          {/* <a
            href="#link"
            className="text-base text-white text-opacity-60 font-semibold hover:underline hover:text-opacity-80"
          >
            See All
          </a> */}
        </div>
        {/* Cards */}
        <div className="mt-8 mx-auto md:mx-auto max-w-md md:max-w-none grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 mb-10">
          {Structures.map((event) => (
            <Event
              id={event.id}
              name={event.name}
              timeLeft={event.domain}
              sDesc={event.sDesc}
            />
          ))}
        </div>
        {/* ----------- Automate ---------- */}
        <div className="flex items-end justify-between">
          <h2 className="text-xl sm:text-2xl text-white font-bold">Automate</h2>
          {/* <a
            href="#link"
            className="text-base text-white text-opacity-60 font-semibold hover:underline hover:text-opacity-80"
          >
            See All
          </a> */}
        </div>
        {/* Cards */}
        <div className="mt-8 mx-auto md:mx-auto max-w-md md:max-w-none grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 mb-10">
          {Automate.map((event) => (
            <Event
              id={event.id}
              name={event.name}
              timeLeft={event.domain}
              sDesc={event.sDesc}
            />
          ))}
        </div>
        {/* ----------- Startup Hub ---------- */}
        <div className="flex items-end justify-between">
          <h2 className="text-xl sm:text-2xl text-white font-bold">
            Startup Hub
          </h2>
          {/* <a
            href="#link"
            className="text-base text-white text-opacity-60 font-semibold hover:underline hover:text-opacity-80"
          >
            See All
          </a> */}
        </div>
        {/* Cards */}
        <div className="mt-8 mx-auto md:mx-auto max-w-md md:max-w-none grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 mb-10">
          {Startup_Hub.map((event) => (
            <Event
              id={event.id}
              name={event.name}
              timeLeft={event.domain}
              sDesc={event.sDesc}
            />
          ))}
        </div>
        {/* -----------Design and Graphics ---------- */}
        <div className="flex items-end justify-between">
          <h2 className="text-xl sm:text-2xl text-white font-bold">
            Design and Graphics
          </h2>
          {/* <a
            href="#link"
            className="text-base text-white text-opacity-60 font-semibold hover:underline hover:text-opacity-80"
          >
            See All
          </a> */}
        </div>
        {/* Cards */}
        <div className="mt-8 mx-auto md:mx-auto max-w-md md:max-w-none grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 mb-10">
          {Design_and_Graphics.map((event) => (
            <Event
              id={event.id}
              name={event.name}
              timeLeft={event.domain}
              sDesc={event.sDesc}
            />
          ))}
        </div>
        {/* ----------- Finance ---------- */}
        <div className="flex items-end justify-between">
          <h2 className="text-xl sm:text-2xl text-white font-bold">Finance</h2>
          {/* <a
            href="#link"
            className="text-base text-white text-opacity-60 font-semibold hover:underline hover:text-opacity-80"
          >
            See All
          </a> */}
        </div>
        {/* Cards */}
        <div className="mt-8 mx-auto md:mx-auto max-w-md md:max-w-none grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 mb-10">
          {Finance.map((event) => (
            <Event
              id={event.id}
              name={event.name}
              timeLeft={event.domain}
              sDesc={event.sDesc}
            />
          ))}
        </div>
        {/* ----------- Marketing and Management ---------- */}
        <div className="flex items-end justify-between">
          <h2 className="text-xl sm:text-2xl text-white font-bold">
            Marketing and Management
          </h2>
          {/* <a
            href="#link"
            className="text-base text-white text-opacity-60 font-semibold hover:underline hover:text-opacity-80"
          >
            See All
          </a> */}
        </div>
        {/* Cards */}
        <div className="mt-8 mx-auto md:mx-auto max-w-md md:max-w-none grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 mb-10">
          {Marketing_and_Management.map((event) => (
            <Event
              id={event.id}
              name={event.name}
              timeLeft={event.domain}
              sDesc={event.sDesc}
            />
          ))}
        </div>
        {/* ----------- Aeromodeling ---------- */}
        <div className="flex items-end justify-between">
          <h2 className="text-xl sm:text-2xl text-white font-bold">
            Aeromodeling
          </h2>
          {/* <a
            href="#link"
            className="text-base text-white text-opacity-60 font-semibold hover:underline hover:text-opacity-80"
          >
            See All
          </a> */}
        </div>
        {/* Cards */}
        <div className="mt-8 mx-auto md:mx-auto max-w-md md:max-w-none grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 mb-10">
          {Aeromodelling.map((event) => (
            <Event
              id={event.id}
              name={event.name}
              timeLeft={event.domain}
              sDesc={event.sDesc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
