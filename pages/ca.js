import React from "react";
import About from "../components/ca/About";
import Form from "../components/ca/Form";
import Hero from "../components/ca/Hero";
import { NavBar } from "../components/NavBar";

export default function ca() {
  return (
    <>
      <NavBar />
      <Hero />
      <Form />
      <About />
    </>
  );
}
