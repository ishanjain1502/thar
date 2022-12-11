import Head from "next/head";
import React from "react";
import Form from "../components/ca/Form";
import Hero from "../components/ca/Hero";
import Footer from "../components/globals/Footer";
import { NavBar } from "../components/globals/NavBar";

export default function ca() {
  return (
    <>
      <Head>
        <title>Campus Ambassador - Thar 2023</title>
      </Head>
      <NavBar />
      <Hero />
      <Form />
      <Footer />
    </>
  );
}
