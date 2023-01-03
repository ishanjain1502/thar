import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { NavBar } from "../../components/globals/NavBar";

export default function Dashboard() {
  const router = useRouter();
  const { data } = useSession();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/ca");
    },
  });
  if (status === "loading") {
    return "Loading or not authenticated...";
  }
  // useEffect(() => {
  //   const porfileData = axios
  //     .get("/api/v1/ca/getProfile")
  //     .then((res) => console.log(res));
  // });
  if (data != undefined) {
    // const porfileData = axios
    //   .get("/api/v1/ca/getProfile")
    //   .then((res) => console.log(res));
    return (
      <>
        <NavBar />

        <h1 className="pt-32 text-center">
          <img
            src={data.user?.image}
            referrerPolicy="no-referrer"
            className="w-16 aspect-square mx-auto rounded-full"
            loading="lazy"
            alt=""
          />
          Hello {data.user?.name} <br /> ({data.user?.email})
        </h1>
        <button
          className="transition-all block w-fit mx-auto bg-white text-black py-2 px-4 rounded-xl justify-center items-center mt-4 active:scale-95"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    );
  } else {
    return "Waiting  For Data...";
  }
}
Dashboard;
