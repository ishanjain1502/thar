import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../../../components/globals/Footer";
import { NavBar } from "../../../components/globals/NavBar";
import { events_data } from "../../../data/events";
import Vader from "../../../components/events/extras/Vader";

export default function Expand() {
  const [slugVal, setSlugVal] = useState(null);
  const [eventData, setEventData] = useState([]);

  const { status } = useSession();
  const [clicked, setClicked] = useState(false);

  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    if (slug) {
      setSlugVal(slug);
    }
  }, [slug]);
  useEffect(() => {
    if (slugVal && slugVal.length !== 0) {
      for (let i = 0; i < events_data.length; i++) {
        if (events_data[i].id === slugVal) {
          setEventData(events_data[i]);
        }
      }
    }
  }, [slugVal !== null]);

  // store current page in localhost to be redirected to after payment
  function onRegister() {
    localStorage.setItem("eventID", slugVal);
    setClicked(true);
  }

  // get user coins and redirect to /register if coins > 0 else to payment
  useEffect(() => {
    if (status === "authenticated" && clicked) {
      axios.get("/api/v1/tharUser/getUser").then((res) => {
        if (res.data.data == null) {
          // User data doesn't exist
          router.push('/participant/dashboard');
        } else {
          // User data exists
          if (res.data.data.credits > 0) {
            router.push(`/events/register?eventID=${slugVal}`);
          } else {
            alert(
              "You have 0 credits. Please process a payment to get 3 credits."
            );
            router.push("/participant/payment");
          }
        }
      });
    }
  }, [status, clicked]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Events - Thar 2023</title>
      </Head>
      <main
        className={`flex flex-col items-center ${
          eventData.id === "CW3" && `sword-cursor`
        }`}
      >
        <NavBar />
        {eventData.id !== undefined ? (
          <>
            <p className="pt-32 lg:pt-48 pb-6 text-center font-spaceboards text-yellow-300 text-3xl sm:text-5xl md:text-7xl text-stroke text-stroke-color break-all">
              {eventData.name.toUpperCase()}
            </p>
            <div
              className={
                eventData.id === "CW3" ? `flex scale-75 sm:scale-100` : `hidden`
              }
            >
              <Vader />
            </div>
            <div className="flex flex-col md:max-w-4xl xl:max-w-5xl w-full mt-4 p-10 rounded-xl bg-black/80 backdrop-blur-xl">
              <div className="flex flex-col md:flex-row max-w-5xl w-full rounded-xl justify-evenly">
                <div className="w-full md:w-5/12 flex md:block justify-center">
                  <img
                    src={`/assets/images/events/${eventData.id}.jpg`}
                    alt="event thumbnail"
                    className="aspect-square rounded-lg shadow-xl md:w-full max-h-96 w-max"
                  />
                </div>
                <div className="flex flex-col w-full md:w-6/12 relative text-base lg:text-lg mt-10 md:mt-0">
                  <p className="text-2xl font-spaceboards text-yellow-300 mb-2">
                    DESCRIPTION
                  </p>
                  <p className="text-justify text-sm sm:text-base lg:text-lg">
                    {eventData.lDesc}
                  </p>
                  <p className="text-2xl font-spaceboards text-yellow-300 mt-6 mb-2">
                    RULE BOOK
                  </p>
                  <a
                    href={eventData.rulebook}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-justify text-blue-400"
                  >
                    Click Here to check !
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap w-full gap-10 md:justify-evenly mt-6">
                <div className="">
                  <p className="text-2xl font-spaceboards text-yellow-300 mt-6 mb-2">
                    PRIZES
                  </p>
                  <div className="flex flex-col">
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
                  </div>
                </div>
                <div className="">
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
              {status !== "authenticated" ? (
                <button
                  className="px-8 py-3 ring-yellow-300 ring text-yellow-300 mt-8 bg-black/30 backdrop-blur-3xl font-semibold hover:bg-yellow-300 hover:text-yellow-900 hover:rounded-md transition-all ease-in-out w-max self-center *animate-bounce*"
                  title="Login to register"
                  onClick={() => {
                    localStorage.setItem('prevURL', router.asPath)
                    signIn("google", {
                      callbackUrl: `/participant/dashboard`,
                    })
                  }}
                >
                  Login to register
                </button>
              ) : (
                <button
                  className="px-8 py-3 ring-yellow-300 ring text-yellow-300 mt-8 bg-black/30 backdrop-blur-3xl font-semibold hover:bg-yellow-300 hover:text-yellow-900 hover:rounded-md transition-all ease-in-out w-max self-center *animate-bounce*"
                  title="Register Now!"
                  onClick={onRegister}
                >
                  Register Now!
                </button>
              )}
            </div>
          </>
        ) : (
          <p className="pt-32 lg:pt-48 pb-6 text-center font-spaceboards text-yellow-300 text-5xl md:text-7xl text-stroke text-stroke-color break-all"></p>
        )}
        <Footer />
      </main>
    </>
  );
}
