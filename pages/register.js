import { signIn } from "next-auth/react";
import Head from "next/head";
import React from "react";

export default function Register() {
  signIn("google", { callbackUrl: "/participant/dashboard" });
  return (
    <>
      <Head>
        <title>Register - Thar 2023</title>
      </Head>
      <div className="flex min-h-screen w-full items-center justify-center">
            Loading...
      </div>
    </>
  );
}
