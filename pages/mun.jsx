import Head from "next/head";
import React from "react";
import About from "../components/mun/About";
import Home from "../components/mun/Home";
import Letter from "../components/mun/Letter";
import Navbar from "../components/mun/Navbar";

export default function MUN() {
  return (
    <div className="mun">
      <Head>
        <title>RTU MUN | Model United Nation</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Navbar />
      <Home />
      <Letter />
      <About />
    </div>
  );
}
