import Head from "next/head";
import React from "react";
import GokartFAQ from "../components/gokart/GokartFAQ";
import GokartGlimpse from "../components/gokart/GokartGlimpse";
import GokartHero from "../components/gokart/GokartHero";
import GokartNavbar from "../components/gokart/GokartNavbar";
import GokartTeam from "../components/gokart/GokartTeam";
import GoKartForm from "../components/gokart/GoKartForm";

import { useState } from "react";

export default function gokart() {
  
  const [btnClicked,setBtnClicked] = useState(false);
  
  return (
    <div className="gokart relative ">
      <Head>
        <title>THAR Go-kart Championship</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          rel="stylesheet"
        />
      </Head>
      <GokartNavbar />
      <GokartHero  setBtnClicked={setBtnClicked}  />
      <GokartGlimpse />
      <GokartTeam />
      {btnClicked && <GoKartForm showModal={setBtnClicked}/>}
      <GokartFAQ />
    </div>
  );
}
