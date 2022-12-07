import Head from "next/head";
import About from "../components/home/About";
import BecomeCA from "../components/home/BecomeCA";
import Hero from "../components/home/Hero";
import Highlights from "../components/home/Highlight";
import Theme from "../components/home/Theme";
import { NavBar } from "../components/globals/NavBar";
import Loader from "../components/globals/Loader";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 8000);
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading ? (
        <Loader />
      ) : (
        <main className="">
          <NavBar />
          <Hero />
          <About />
          <BecomeCA />
          <Highlights />
          <Theme />
        </main>
      )}
    </>
  );
}
