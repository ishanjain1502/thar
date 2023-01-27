import React from "react";
import { team_data } from "../../data/team";
import RoboTeamCard from "./RoboTeamCard";

export default function RoboTeam() {
  return (
    <div id="team" className="pt-20 pb-20">
      <div className="flex flex-col items-center mt-14">
        <p className="text-yellow-400 text-stroke text-5xl md:text-7xl mt-8 font-blackops">
          TEAM
        </p>
        <div className="flex flex-col items-center mt-10">
          <p className="font-spaceboards text-2xl underline underline-offset-4 mb-10 font-blackops">
            EVENT CO-ORDINATROS
          </p>
          <div className="flex flex-row justify-center gap-8 lg:gap-10 flex-wrap w-full lg:max-w-4xl px-4">
            {team_data.robo.map((profile) => (
              <RoboTeamCard
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
