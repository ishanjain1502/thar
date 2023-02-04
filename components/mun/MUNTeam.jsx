import React from "react";
import { teamData } from "./munTeamData";
import TeamCard from "./team/TeamCard";

export default function MUNTeam() {
  return (
    <div
      id="team"
      className="pt-16 bg-[#1D1C41] text-black flex flex-col items-center justify-center"
    >
      <h1 className="text-xl underline md:text-6xl font-bold text-white py-12">
        Organizing Team
      </h1>
      <div className="container py-4">
        <h1 className="text-3xl md:text-5xl text-slate-400 font-bold underline py-6">
          Secretariat
        </h1>
        <div className="flex flex-wrap gap-12 justify-center">
          {teamData.secretariat.map((member) => {
            return (
              <TeamCard
                key={member.name}
                name={member.name}
                role={member.role}
              />
            );
          })}
        </div>
      </div>
      <div className="container py-4">
        <h1 className="text-3xl md:text-5xl text-slate-400 font-bold underline py-6">
          USG Design Team
        </h1>
        <div className="flex flex-wrap gap-12 justify-center">
          {teamData.design.map((member) => {
            return (
              <TeamCard
                key={member.name}
                name={member.name}
                role={member.role}
              />
            );
          })}
        </div>
      </div>
      <div className="container py-4">
        <h1 className="text-3xl md:text-5xl text-slate-400 font-bold underline py-6">
          Deligate Affairs
        </h1>
        <div className="flex flex-wrap gap-12 justify-center">
          {teamData.da.map((member) => {
            return (
              <TeamCard
                key={member.name}
                name={member.name}
                role={member.role}
              />
            );
          })}
        </div>
      </div>
      <div className="container py-4">
        <h1 className="text-3xl md:text-5xl text-slate-400 font-bold underline py-6">
          USG Outreach
        </h1>
        <div className="flex flex-wrap gap-12 justify-center">
          {teamData.outreach.map((member) => {
            return (
              <TeamCard
                key={member.name}
                name={member.name}
                role={member.role}
              />
            );
          })}
        </div>
      </div>
      <div className="container py-4">
        <h1 className="text-3xl md:text-5xl text-slate-400 font-bold underline py-6">
          USG Technical Team
        </h1>
        <div className="flex flex-wrap gap-12 justify-center">
          {teamData.tech.map((member) => {
            return (
              <TeamCard
                key={member.name}
                name={member.name}
                role={member.role}
              />
            );
          })}
        </div>
      </div>
      <div className="container py-4">
        <h1 className="text-3xl md:text-5xl text-slate-400 font-bold underline py-6">
          USG Content Team
        </h1>
        <div className="flex flex-wrap gap-12 justify-center">
          {teamData.content.map((member) => {
            return (
              <TeamCard
                key={member.name}
                name={member.name}
                role={member.role}
              />
            );
          })}
        </div>
      </div>
      <div className="container py-4">
        <h1 className="text-3xl md:text-5xl text-slate-400 font-bold underline py-6">
          USG Cinematography
        </h1>
        <div className="flex flex-wrap gap-12 justify-center">
          {teamData.cine.map((member) => {
            return (
              <TeamCard
                key={member.name}
                name={member.name}
                role={member.role}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
