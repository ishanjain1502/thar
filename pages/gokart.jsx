import Head from "next/head";
import React from "react";
import GokartGlimpse from "../components/gokart/GokartGlimpse";
import GokartHero from "../components/gokart/GokartHero";
import GokartNavbar from "../components/gokart/GokartNavbar";
import GokartTeam from "../components/gokart/GokartTeam";

export default function gokart() {
  return (
    <div className="gokart relative ">
      <Head>
        <title>THAR Go-kart Championship</title>
      </Head>
      <GokartNavbar />
      <GokartHero />
      <GokartGlimpse />
      <GokartTeam />
    </div>
  );
}
