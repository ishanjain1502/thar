import { signIn } from "next-auth/react";
import Head from "next/head";
import React, { useEffect } from "react";

export default function Register() {
  signIn("google", { callbackUrl: "/participant/dashboard" });
  return (
    <>
      <Head>
        <title>Register - Thar 2023</title>
      </Head>
      <></>
    </>
  );
}
