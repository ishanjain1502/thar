import Head from "next/head";
import React from "react";
import Image from "next/image";

export default function MUN() {
  return (
    <>
      <Head>
        <title>MUN | Model United Nation</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div className="mun-body  min-h-screen w-full">
        <header className="text-gray-600 body-font fixed w-full top-0 ">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex gap-3 title-font items-center text-white font-bold  mb-4 md:mb-0 text-2xl">
              <Image
                src="/assets/images/mun/logo.png"
                alt=""
                className="max-h-[80px] self-center"
                height={80}
                width={80}
              />{" "}
              MUN RTU
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-white">
              <a className="mr-5 font-bold text-xl hover:text-blue-400 cursor-pointer">
                Home
              </a>
              <a className="mr-5 font-bold text-xl hover:text-blue-400 cursor-pointer">
                About
              </a>
              <a className="mr-5 font-bold text-xl hover:text-blue-400 cursor-pointer">
                Agendas
              </a>
              <a className="mr-5 font-bold text-xl hover:text-blue-400 cursor-pointer">
                Team
              </a>
              <a className="mr-5 font-bold text-xl hover:text-blue-400 cursor-pointer">
                Contact
              </a>
            </nav>
            <button className="inline-flex text-xl items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-blue-400 hover:text-white rounded mt-4 md:mt-0">
              Registration
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </header>
        <div className="h-screen w-full fixed inset-0 -z-10 overflow-hidden">
          <img
            src="./assets/images/mun/bg.jpg"
            alt=""
            className="object-cover min-h-screen blur-md scale-110"
          />
        </div>
        <section className="min-h-screen w-11/12 m-auto flex flex-col gap-4 justify-center items-center">
          <Image
            src="/assets/images/mun/logo.png"
            alt=""
            className="max-h-[50vh] self-center"
            height={500}
            width={500}
          />
          <h1 className="text-4xl font-bold text-center">
            Model United Nations
            <br />
            RTU
          </h1>
        </section>
      </div>
    </>
  );
}
