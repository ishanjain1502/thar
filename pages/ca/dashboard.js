import { getSession, signOut } from "next-auth/react";
import React from "react";
import { NavBar } from "../../components/globals/NavBar";
function Dashboard(props) {
  return (
    <>
      <NavBar />

      <h1 className="pt-32 text-center">
        <img
          src={props.image}
          className="w-16 aspect-square mx-auto rounded-full"
          loading="lazy"
          alt=""
        />
        Hello {props.name} <br /> ({props.email})
      </h1>
      <button
        className="transition-all block w-fit mx-auto bg-white text-black py-2 px-4 rounded-xl justify-center items-center mt-4 active:scale-95"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </>
  );
}
export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    context.res.writeHead(302, { Location: "/ca#caform" });
    context.res.end();
    return {};
  }
  return {
    props: {
      ...session.user,
    },
  };
}
export default Dashboard;
