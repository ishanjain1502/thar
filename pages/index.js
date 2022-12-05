import Head from "next/head";
import Link from "next/link";
import About from "../components/home/About";
import BecomeCA from "../components/home/BecomeCA";
import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Hero />
        <About />
        <BecomeCA />
      </main>
    </>
  );
}
