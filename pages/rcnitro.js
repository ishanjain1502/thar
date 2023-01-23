import Head from "next/head";
import React from "react";
import Footer from "../components/globals/Footer";
import { NavBar } from "../components/globals/NavBar";
import Faq from "../components/rcnitro/Faq";
import Hero from "../components/rcnitro/Hero";
// import Team from "../components/rcnitro/Team";

export default function gokart() {
  return (
    <>
      <div className="rcnitro">
        <Head>
          <title>THAR Rc-Nitro Championship</title>
        </Head>
        <NavBar />
        <Hero />
        {/* <Team /> */}
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
