import Head from "next/head";
import React from "react";
import Footer from "../components/globals/Footer";
import { NavBar } from "../components/globals/NavBar";
import Member from "../components/team/Member";

export default function team() {
  return (
    <>
      <Head>
        <title>Team - Thar 2023</title>
      </Head>
      <NavBar />
      <div className="pt-32 pb-20">
        <div className="flex flex-col items-center mt-20">
          <img
            src="/assets/images/team/sword.svg"
            alt=""
            className="w-36 md:w-48"
          />
          <p className="font-spaceboards text-white text-5xl md:text-7xl mt-8">
            TEAM
          </p>
          <div className="flex flex-col items-center w-8/12 mt-10">
            <p className="font-spaceboards text-2xl underline underline-offset-4">
              CORE TEAM
            </p>
            <div className="flex flex-col gap-12 pt-6 flex-wrap justify-center items-center">
              <Member
                src="vc"
                name="Dr. S.K. Singh"
                pos="Hon'ble Vice Chancellor"
              />
              <Member
                src="dk"
                name="Dr. A.K. Dwivedi"
                pos="Dean Student Welfare"
              />
              <div className="flex gap-3 sm:gap-10">
                <Member
                  src="ak"
                  name="Dr. D.K. Sambariya"
                  pos="Coordinator Thar'23"
                />
                <Member
                  src="rp"
                  name="Dr. Ritesh Patidar"
                  pos="Coordinator Thar'23"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
