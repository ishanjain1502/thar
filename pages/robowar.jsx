import Head from "next/head";
import React from "react";
import RoboGlimpse from "../components/robowar/RoboGlimpse";
import RoboHero from "../components/robowar/RoboHero";
import RoboNavbar from "../components/robowar/RoboNavbar";
import RoboTeam from "../components/robowar/RoboTeam";

export default function robowar() {
  return (
    <div className="robo">
      <Head>
        <title>THAR ROBOWAR</title>
      </Head>
      <RoboNavbar />
      <RoboHero />
      <RoboGlimpse />
      <RoboTeam />
    </div>
  );
}
