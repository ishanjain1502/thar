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
          <br />
        </p>
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
