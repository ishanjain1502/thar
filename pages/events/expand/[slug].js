import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../../../components/globals/Footer";
import { NavBar } from "../../../components/globals/NavBar";
import { events_data } from "../../../data/events";

export default function Expand() {
  const [slugVal, setSlugVal] = useState(null);
  const [eventData, setEventData] = useState([]);
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    if (slug) {
      setSlugVal(slug);
    }
  }, [slug]);
  useEffect(() => {
    if (slugVal && slugVal.length !== 0) {
      for (let i = 0; i < [events_data].length; i++) {
        if (events_data[i].id === slugVal) {
          setEventData(events_data[i]);
        }
      }
    }
  }, [slugVal !== null]);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Events - Thar 2023</title>
      </Head>
      <main className="flex flex-col items-center">
        <NavBar />
        {eventData && (
          <>
            <p className="pt-32 lg:pt-48 pb-6 text-center font-spaceboards text-yellow-300 text-5xl md:text-7xl text-stroke text-stroke-color break-all">
              {eventData.name}
            </p>
            <div className="flex max-w-5xl w-full mt-10 justify-evenly p-10 rounded-xl bg-black/50">
              <div className="flex w-5/12 relative rounded-lg overflow-hidden shadow-xl aspect-[1/1] max-h-96">
                <Image src={`/assets/images/events/${eventData.id}.jpg`} fill />
              </div>
              <div className="flex flex-col w-6/12 relative text-xl">
                <p className="text-2xl font-spaceboards text-yellow-300 mb-2">
                  DESCRIPTION
                </p>
                <p className="text-justify">{eventData.lDesc}</p>
                <p className="text-2xl font-spaceboards text-yellow-300 mt-6 mb-2">
                  RULE BOOK
                </p>
                <p className="text-justify text-blue-400">
                  Click Here to check !
                </p>
                <p className="text-2xl font-spaceboards text-yellow-300 mt-6 mb-2">
                  PRIZES
                </p>
                <p className="flex flex-col">
                  {eventData.total_price && (
                    <>
                      <p className="text-xl font-bold">
                        Total Prize:&nbsp; ₹{eventData.total_price}
                      </p>
                    </>
                  )}
                  {eventData.first_prize && (
                    <>
                      <p className="text-xl">
                        <span className="">First Prize:</span>&nbsp; ₹
                        {eventData.first_prize}
                      </p>
                    </>
                  )}
                  {eventData.second_prize && (
                    <>
                      <p className="text-xl">
                        <span className="">Second Prize:</span>&nbsp; ₹
                        {eventData.second_prize}
                      </p>
                    </>
                  )}
                </p>
                <p className="text-2xl font-spaceboards text-yellow-300 mt-6 mb-2">
                  CO-ORDINATORS
                </p>
                <p className="flex flex-col">
                  {eventData.c1_name &&
                    `• ${eventData.c1_name} - ${eventData.c1_mobile}`}
                  <br />
                  {eventData.c2_name &&
                    `• ${eventData.c2_name} - ${eventData.c2_mobile}`}
                  <br />
                  {eventData.c3_name &&
                    `• ${eventData.c3_name} - ${eventData.c3_mobile}`}
                  <br />
                  {eventData.c4_name &&
                    `• ${eventData.c4_name} - ${eventData.c4_mobile}`}
                  <br />
                  {eventData.c5_name &&
                    `• ${eventData.c5_name} - ${eventData.c5_mobile}`}
                </p>
              </div>
            </div>
          </>
        )}
        <Footer />
      </main>
    </>
  );
}
