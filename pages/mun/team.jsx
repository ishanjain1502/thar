import React from "react";
import Footer from "../../components/globals/Footer";
import MUNNavbar from "../../components/mun/MUNNavbar";
import MUNTeam from "../../components/mun/MUNTeam";

export default function team() {
  return (
    <div className="mun">
      <MUNNavbar />
      {/* <MUNTeam /> */}
      <div className="bg-[#1D1C41] -mt-10">
        <Footer />
      </div>
    </div>
  );
}
