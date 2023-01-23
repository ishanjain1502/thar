import Head from "next/head";
import React from "react";
import RoboHero from "../components/robowar/RoboHero";
import RoboNavbar from "../components/robowar/RoboNavbar";

export default function robowar() {
  return (
    <div className="robo">
      <Head>
        <title>THAR ROBOWAR</title>
      </Head>
      <RoboNavbar />
      <RoboHero />
    </div>
  );
}
