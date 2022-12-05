import React from "react";
import { NavBar } from "../components/NavBar";
import Member from "../components/team/Member";

export default function team() {
  return (
    <>
      <NavBar />
      <div className="pt-32 pb-20">
        <div className="flex flex-col items-center mt-20">
          <img src="/assets/images/team/sword.svg" alt="" className="w-48" />
          <p className="font-spaceboards text-white text-7xl mt-8">TEAM</p>
          <div className="flex flex-col items-center w-8/12 mt-10">
            <p className="font-spaceboards text-2xl underline underline-offset-4">
              CORE TEAM
            </p>
            <div className="flex gap-12 pt-6">
              <Member
                src="vc"
                name="Dr. S.K. Singh"
                pos="Hon'ble Vice Chancellor"
              />
              <Member
                src="ak"
                name="Dr. A.K. Dwivedi"
                pos="Dean Student Welfare"
              />
              <Member
                src="dk"
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
    </>
  );
}
