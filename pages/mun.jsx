import Head from "next/head";
import React from "react";
import About from "../components/mun/About";
import Home from "../components/mun/Home";
import Letter from "../components/mun/Letter";
import MUNNavbar from "../components/mun/MUNNavbar";
import { NavBar } from "../components/globals/NavBar";
import MUNSlider from "../components/mun/MUNSlider";
import MUNTeam from "../components/mun/MUNTeam";

export default function MUN() {
  return (
    <div className="mun">
      <Head>
        <title>RTU MUN | Model United Nation</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <MUNNavbar />
      <Home />
      <Letter />
      <About />
      <MUNSlider />
      <MUNTeam />
    </div>
  );
}
