import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { filtered_events } from "../../data/events";
import Footer from "../../components/globals/Footer";
import { NavBar } from "../../components/globals/NavBar";
import Event from "../../components/events/Event";

export default function Domains() {
  const [slugVal, setSlugVal] = useState(null);
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    if (slug) {
      setSlugVal(slug);
      console.log(filtered_events[slugVal]);
    }
  }, [slug]);
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
          {slugVal && (
            <div className="relative mx-auto py-8 md:py-16 px-4 w-full max-w-5xl flex flex-col items-center gap-10">
              <div className="mt-8 mx-auto md:mx-auto max-w-md md:max-w-none grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 mb-10">
                {filtered_events[slugVal].map((event) => (
                  <Event
                    id={event.id}
                    key={event.id}
                    name={event.name}
                    timeLeft={event.domain}
                    sDesc={event.sDesc}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        <Footer />
      </main>
    </>
  );
}
