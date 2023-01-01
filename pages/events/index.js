import Head from "next/head";
import React from "react";
import EventWrapper from "../../components/events/EventWrapper";
import Footer from "../../components/globals/Footer";
import { NavBar } from "../../components/globals/NavBar";

export default function index() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Events - Thar 2023</title>
      </Head>
      <main className="flex flex-col items-center">
        <NavBar />
        <p className="pt-32 lg:pt-48 pb-6 text-center font-spaceboards text-yellow-300 text-5xl md:text-7xl text-stroke text-stroke-color">
          EVENTS
        </p>
        <div className="w-full">
          <EventWrapper />
        </div>
        <Footer />
      </main>
    </>
  );
}
