import Head from "next/head";
import React, {useState} from "react";
import RoboGlimpse from "../components/robowar/RoboGlimpse";
import RoboHero from "../components/robowar/RoboHero";
import RoboNavbar from "../components/robowar/RoboNavbar";
import RoboTeam from "../components/robowar/RoboTeam";
import RobowarForm from "../components/robowar/RobowarForm";

export default function Robowar() {

  const [btnClicked,setBtnClicked] = useState(false);

  return (
    <div className={["robo", btnClicked && "fixed"].join(" ")}>
      <Head>
        <title>THAR ROBOWAR</title>
      </Head>
      <RoboNavbar />
      <RoboHero setBtnClicked={setBtnClicked}/>
      <RoboGlimpse />
      <RoboTeam />
      {btnClicked && <RobowarForm setBtnClicked={setBtnClicked}/>}
    </div>
  );
}
