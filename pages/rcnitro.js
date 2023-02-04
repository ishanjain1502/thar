import Head from "next/head";
import React, { useState } from "react";
import Footer from "../components/globals/Footer";
import { NavBar } from "../components/globals/NavBar";
import Faq from "../components/rcnitro/Faq";
import Hero from "../components/rcnitro/Hero";
import Team from "../components/rcnitro/Team";
import RcNitroForm from "../components/rcnitro/RcNitroForm";


export default function rcnitro() {

  const [btnClicked,setBtnClicked] = useState(false);

  return (
    <>
      <div className="rcnitro">
        <Head>
          <title>THAR RC NITRO Championship</title>
        </Head>
        <NavBar />
        <Hero setBtnClicked={setBtnClicked} />
        <Team />
        {btnClicked && <RcNitroForm setBtnClicked={setBtnClicked}/>}
        <Faq />
        <Footer />
      </div>

      <style jsx>{`
        .rcnitro {
          background: url("/assets/images/rcnitro/rcnitro.jpg") center center
            no-repeat fixed;
          background-size: cover;
        }
      `}</style>
    </>
  );
}
