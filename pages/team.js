import Head from "next/head";
import React from "react";
import Footer from "../components/globals/Footer";
import { NavBar } from "../components/globals/NavBar";
import Member from "../components/team/Member";
import TeamCard from "../components/team/TeamCard";
import { team_data } from "../data/team";

export default function team() {
  return (
    <>
      <Head>
        <title>Team - THAR 2023</title>
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
          {/* <div className="flex flex-col items-center md:w-8/12 mt-10">
            <p className="font-spaceboards text-2xl underline underline-offset-4">
              ORGANIZING TEAM
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
              <div className="flex gap-12 pt-6 flex-wrap justify-center items-center">
                <Member
                  src="ak"
                  name="Dr. D.K. Sambariya"
                  pos="Coordinator THAR'23"
                />
                <Member
                  src="rp"
                  name="Dr. Ritesh Patidar"
                  pos="Coordinator THAR'23"
                />
              </div>
            </div>
          </div> */}
          <div className="flex flex-col items-center mt-10">
            <p className="font-spaceboards text-2xl underline underline-offset-4 mb-10">
              STUDENT ORGANIZERS
            </p>
            <div className="flex flex-row justify-center gap-8 lg:gap-10 flex-wrap w-full lg:max-w-4xl px-4">
              {team_data.organizing.map((profile) => (
                <TeamCard
                  key={profile.name}
                  name={profile.name}
                  mob={profile.contact}
                  mail={profile.email}
                  insta={profile.instagram}
                  linkedin={profile.linkedin}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
