import Head from "next/head";
import About from "../components/home/About";
import BecomeCA from "../components/home/BecomeCA";
import Hero from "../components/home/Hero";
import Highlights from "../components/home/Highlight";
import Theme from "../components/home/Theme";
import { NavBar } from "../components/globals/NavBar";
import Loader from "../components/globals/Loader";
import { useEffect, useState } from "react";
import Footer from "../components/globals/Footer";
import BottomNavBar from "../components/home/BottomNavBar";
import Latest from "../components/home/Latest";
import CountdownTimer from "../components/home/CountdownTimer";
import Participate from "../components/home/Participate";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const mediaElem = document.querySelector("video");
    mediaElem.load();
  });
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Home - Thar 2023</title>
      </Head>
      <div className="relative z-10">
        <NavBar />
        <Hero />
        {!isLoading && <CountdownTimer />}
        <About />
        <BecomeCA />
        <Participate />
        <Highlights />
        {/* Thar Pronite 2020 video */}
        <div className="flex justify-center w-full mb-10">
          <iframe
            src="https://www.youtube.com/embed/95RDe4rNQ_A"
            title="Thar 2020 Pronite"
            loading="lazy"
            className="w-11/12 sm:w-10/12 md:w-8/12 aspect-video rounded framed p-4 sm:p-6 md:p-8 lg:p-10"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <Theme />
        <Latest />
        {/* TODO: */}
        <BottomNavBar />
        <Footer />
        {isLoading && <Loader />}
      </div>

      <div className="h-[100vh] overflow-hidden fixed left-0 top-0 z-[1]">
        <video
          autoPlay
          muted
          loop
          className="w-[100vw] object-cover h-full pointer-events-none scale-110 brightness-[0.7]"
          id="bg-vid"
          preload="auto"
          onLoadedMetadata={() => setIsLoading(false)}
        >
          <source src="/assets/videos/bg2.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}
