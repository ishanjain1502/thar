import Head from "next/head";
import React from "react";
import { NavBar } from "../../components/globals/NavBar";

export default function index() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center">
        <NavBar />
        <p className="pt-32 lg:pt-48 pb-6 text-center font-spaceboards text-yellow-300 text-5xl md:text-7xl">
          EVENTS
          <br />
          <span className="text-xl text-white animate-pulse">coming soon</span>
        </p>
        <div className="flex justify-center max-w-screen flex-wrap gap-8 w-10/12 pb-20">
          {events.map((event, index) => (
            <p
              className="w-full text-center sm:w-fit text-lg lg:text-xl border-[3px] px-4 py-2 lg:px-6 lg:py-3 font-semibold backdrop-blur-lg border-yellow-300 hover:text-yellow-300 transition-all ease-in-out hover:scale-95"
              key={index}
            >
              {event}
            </p>
          ))}
        </div>
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
  "BASKET OF GOLD EVENTS",
  "KNOCK YOUR BRAIN",
  "BUSINESS QUIZ",
  "AD-MAD",
  "PRODUCT ADVERTISEMENT SHOOT",
  "COLLEGE VIDEO",
  "HACK-2-ON",
];

// const sample_data = [
//   {
//     id: "event id",
//     name: "name",
//     domain: "domain name",
//     desc: {
//       short: "short description",
//       full: "full description",
//     },
//     banner_src: "banner link",
//     thumb_src: "Thumbnail link",
//     img: ["first image url", "2nd image url", "3rd image url"],
//     prize: {
//       winner: "10K",
//       runner: "5K",
//     },
//     credit: "entry credit/cost required",
//     venue: "",
//     cords: [
//       {
//         name: "Faculty Co-Ordinator",
//         contact: 8976789765,
//       },
//       {
//         name: "Final Year Co-Ordinator",
//         contact: 8976789765,
//       },
//       {
//         name: "2nd Co-Ordinator",
//         contact: 8976789765,
//       },
//     ],
//   },
// ];
