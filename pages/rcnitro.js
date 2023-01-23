import Head from "next/head";
import React from "react";
import { NavBar } from "../components/globals/NavBar";
import Faq from "../components/rcnitro/Faq";
import Hero from "../components/rcnitro/Hero";
// import Team from "../components/rcnitro/Team";

export default function gokart() {
  return (
    <div className="rcnitro relative ">
      <Head>
        <title>THAR Rc-Nitro Championship</title>
      </Head>
      <NavBar />
      <Hero />
      {/* <Team /> */}
      <Faq />
    </div>
  );
}
