import Head from "next/head";
import React, { useEffect, useState } from "react";
import About from "../components/mun/About";
import Home from "../components/mun/Home";
import Letter from "../components/mun/Letter";
import MUNNavbar from "../components/mun/MUNNavbar";
import { NavBar } from "../components/globals/NavBar";
import MUNSlider from "../components/mun/MUNSlider";
import Footer from "../components/globals/Footer";

export default function MUN() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.onload = () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <div className="mun overflow-x-hidden">
      <Head>
        <title>RTU MUN | Model United Nation</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      {!isLoading && loader()}
      <div className="hidden">
        <NavBar className="hidden" />
      </div>
      <MUNNavbar />
      <Home />
      <Letter />
      <About />
      <MUNSlider />
      {/* FAQ */}
      <div className="bg-[#1D1C41] -mt-10">
        <Footer />
      </div>
    </div>
  );
}
function loader() {
  return (
    <div className="grid place-items-center h-screen w-screen fixed inset-0 top-0 bg-black z-100">
      <span class="munloader"></span>
    </div>
  );
}
