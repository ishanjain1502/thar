import Head from "next/head";
import React from "react";
import EventWrapper from "../../components/events/EventWrapper";
import Footer from "../../components/globals/Footer";
import { NavBar } from "../../components/globals/NavBar";

export default function index() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Events - Thar 2023</title>
      </Head>
      <main className="flex flex-col items-center">
        <NavBar />
        <p className="pt-32 lg:pt-48 pb-6 text-center font-spaceboards text-yellow-300 text-5xl md:text-7xl text-stroke text-stroke-color">
          EVENTS
        </p>
        <div className="relative mx-auto py-8 px-4 w-full max-w-7xl flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base ">
          <a
            href="#Stand_Alone"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-200 text-yellow-900 font-semibold rounded-full ring-2 ring-yellow-300/70 active:scale-95 hover:bg-yellow-200/90 ease-in-out transition-all shadow-lg"
          >
            Stand Alone
          </a>
          <a
            href="#Robotics"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-200 text-yellow-900 font-semibold rounded-full ring-2 ring-yellow-300/70 active:scale-95 hover:bg-yellow-200/90 ease-in-out transition-all shadow-lg"
          >
            Robotics
          </a>
          <a
            href="#Structures"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-200 text-yellow-900 font-semibold rounded-full ring-2 ring-yellow-300/70 active:scale-95 hover:bg-yellow-200/90 ease-in-out transition-all shadow-lg"
          >
            Structures
          </a>
          <a
            href="#Automate"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-200 text-yellow-900 font-semibold rounded-full ring-2 ring-yellow-300/70 active:scale-95 hover:bg-yellow-200/90 ease-in-out transition-all shadow-lg"
          >
            Automate
          </a>
          <a
            href="#Startup_Hub"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-200 text-yellow-900 font-semibold rounded-full ring-2 ring-yellow-300/70 active:scale-95 hover:bg-yellow-200/90 ease-in-out transition-all shadow-lg"
          >
            Startup Hub
          </a>
          <a
            href="#Design_and_Graphics"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-200 text-yellow-900 font-semibold rounded-full ring-2 ring-yellow-300/70 active:scale-95 hover:bg-yellow-200/90 ease-in-out transition-all shadow-lg"
          >
            Design and Graphics
          </a>
          <a
            href="#Finance"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-200 text-yellow-900 font-semibold rounded-full ring-2 ring-yellow-300/70 active:scale-95 hover:bg-yellow-200/90 ease-in-out transition-all shadow-lg"
          >
            Finance
          </a>
          <a
            href="#Marketing_and_Management"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-200 text-yellow-900 font-semibold rounded-full ring-2 ring-yellow-300/70 active:scale-95 hover:bg-yellow-200/90 ease-in-out transition-all shadow-lg"
          >
            Marketing and Management
          </a>
          <a
            href="#Aeromodelling"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-200 text-yellow-900 font-semibold rounded-full ring-2 ring-yellow-300/70 active:scale-95 hover:bg-yellow-200/90 ease-in-out transition-all shadow-lg"
          >
            Aeromodelling
          </a>
          <a
            href="#Code_wars"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-200 text-yellow-900 font-semibold rounded-full ring-2 ring-yellow-300/70 active:scale-95 hover:bg-yellow-200/90 ease-in-out transition-all shadow-lg"
          >
            Code wars
          </a>
        </div>
        <div className="w-full">
          <EventWrapper />
        </div>
        <Footer />
      </main>
    </>
  );
}

const events = [
  "THAR GO-KARTING CHAMPIONSHIP",
  "ROBOWAR",
  "RC NITRO",
  "CAD WAR",
  "KOD",
  "TRACK-O-MANIA",
  "ROBO RACE",
  "ROBO SOCCER",
  "CYBORG TRENCH",
  "HYDRA-ZONE",
  "GAME OF DRONES (DRONES)",
  "AIRBORNE(RC PLANES)",
  "ANTOHO (WATER ROCKET)",
  "AERONAVE(CONTROL LINE)",
  "HOVERSTORM(HOVERCRAFT)",
  "ROCKETVERSE(MODE ROCKET)",
  "BRIDGE-O-MANIA",
  "CANTILEVO",
  "HYDRACS",
  "DESIGNOTHON",
  "DESIGN BATTLE",
  "SHARK TANK RTU",
  "FUNNIST PITCHDECK",
  "BUSINESS PLAN COMPETITION",
  "MUN (MODEL UNITED NATIONS)",
  "CSS BATTLE",
  "CS FUNDA",
  "MINDSTORM",
  "BATTLE RUSH",
  "HACK THE CODE",
  "CODE LAPSE",
  "BLIND FORCES",
  "CREO 3D",
  "BUSINESS BUZZ",
  "TRI GAME",
  "IMPROV CHALLENGE",
  "BATTLE OF BIDS",
  "FIN QUEST",
  "STRATOTHON",
  "BASKET OF GOLDEN EVENTS",
  "KNOCK YOUR BRAIN",
  "BUSINESS QUIZ",
  "AD-MAD",
  "PRODUCT ADVERTISEMENT SHOOT",
  "COLLEGE VIDEO",
  "HACK-2-ON",
];
