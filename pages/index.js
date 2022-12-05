import Head from "next/head";
import About from "../components/home/About";
import BecomeCA from "../components/home/BecomeCA";
import Hero from "../components/home/Hero";
import Theme from "../components/home/Theme";
import { NavBar } from "../components/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <NavBar />
        <Hero />
        <About />
        <BecomeCA />
        <Theme />
      </main>
    </>
  );
}
