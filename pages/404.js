import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PageNotFound() {
  return (
    <div className="">
      <Head>
      <title>404 - Thar 2023</title>
      </Head>
      <div className="min-h-screen">
        <div className="flex items-center justify-center py-12">
          <div className="flex items-center justify-center mx-4 md:w-2/3 ">
            <div className="flex flex-col items-center py-16 ">
              <Image
                width={2000}
                height={2000}
                className="px-4 w-11/12 sm:w-10/12 md:w-8/12 xl:w-6/12 mt-20"
                src="/assets/images/coming-soon.svg"
                alt=""
              />
              <h1 className="px-4 pt-8 pb-4 text-center text-3xl sm:text-5xl font-bold leading-10 text-porsche">
                Coming Soon!{" "}
              </h1>
              <p className="px-4 pb-10 text-base leading-none text-center text-zinc-200">
                No signal here! we cannot find the page you are looking for{" "}
              </p>
              <Link
                href="/"
                className="mx-4 rounded-md text-lg font-semibold border-2 border-porsche px-4 py-2 sm:px-10 sm:py-3 my-4 text-porsche hover:bg-porsche hover:text-porsche-100 transition-all ease-in-out outline-none"
              >
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
