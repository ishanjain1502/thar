import React from "react";
import { team_data } from "../../data/team";
import TeamCard from "./TeamCard";

export default function Team() {
  return (
    <div id="team">
      <div className="flex flex-col items-center mt-14 pb-16">
        <p className="text-yellow-300 font-bold text-stroke-color text-stroke text-5xl md:text-7xl mt-8">
          TEAM
        </p>
        <div className="flex flex-col items-center mt-10">
          <p className="font-spaceboards text-2xl underline underline-offset-4 mb-10">
            EVENT CO-ORDINATROS
          </p>
          <div className="flex flex-row justify-center gap-8 lg:gap-10 flex-wrap w-full lg:max-w-4xl px-4">
            {team_data.rcnitro.map((profile) => (
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
  );
}
