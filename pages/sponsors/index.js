import Head from "next/head";
import Image from "next/image";
import React from "react";
import Footer from "../../components/globals/Footer";
import { NavBar } from "../../components/globals/NavBar";
import Contact from "../../components/sponsors/Contact";

export default function index() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Sponsors - Thar 2023</title>
      </Head>
      <main className="flex flex-col items-center">
        <NavBar />
        <p className="pt-32 lg:pt-48 pb-6 text-center font-spaceboards text-yellow-300 text-5xl md:text-7xl text-stroke text-stroke-color">
          SPONSORS
          <br />
          <span className="text-xl text-white">Our Previous Sponsors</span>
        </p>
        <div className="flex justify-center max-w-screen flex-wrap gap-8 w-full pb-20">
          <div className="w-11/12 md:w-8/12 aspect-[1080/531] relative">
            <Image src="/assets/images/sponsors/prev.png" fill />
          </div>
          <div className="w-full aspect-[1080/531] relative">
            <Image src="/assets/images/sponsors/categories.png" fill />
          </div>
        </div>
        <Contact />
        <Footer />
      </main>
    </>
  );
}
