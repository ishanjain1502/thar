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

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Home - Thar 2023</title>
      </Head>
      <main className="relative z-10">
        <NavBar />
        <Hero />
        <About />
        <BecomeCA />
        <Highlights />
        {/* Thar Pronite 2020 video */}
        <div className="flex justify-center w-full mb-10"><iframe
          src="https://www.youtube.com/embed/95RDe4rNQ_A"
          title="Thar 2020 Pronite"
          className="w-11/12 sm:w-10/12 md:w-8/12 aspect-video rounded shadow-xl"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe></div>
        
        <Theme />
        <Latest />
        {/* TODO: */}
        {/* <BottomNavBar /> */}
        <Footer />
        {isLoading && <Loader />}
      </main>

      <div className="h-[100vh] overflow-hidden fixed left-0 top-0 z-[1]">
        <video
          autoPlay
          muted
          loop
          className="w-[100vw] object-cover h-full pointer-events-none scale-110 brightness-[0.7]"
          id="bg-vid"
          // TODO: disabled lazyload, trying on load complete event but not working :(
          preload="auto"
          onLoad={() => console.log(69)}
        >
          <source src="/assets/videos/bg2.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}
