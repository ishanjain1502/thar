import Head from "next/head";
import React, { useEffect } from "react";
import Footer from "../components/globals/Footer";
import { NavBar } from "../components/globals/NavBar";
import TeamCard from "../components/team/TeamCard";
import { team_data } from "../data/team";
import { useRouter } from "next/router";

export default function Team() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/404');
  })

  return (
    <>
      <Head>
        <title>Team - THAR 2023</title>
      </Head>
      <NavBar />
      <div className="pt-32 pb-20">
        <div className="flex flex-col items-center mt-14">
          {/* <img
            src="/assets/images/team/sword.svg"
            alt=""
            className="w-36 md:w-48"
          /> */}
          <p className="font-spaceboards text-yellow-300 text-stroke-color text-stroke text-5xl md:text-7xl mt-8">
            TEAM
          </p>
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
