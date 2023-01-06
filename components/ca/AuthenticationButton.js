import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function AuthenticationButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {/* <button
          className="transition-all w-fit mx-auto bg-black text-white py-2 px-4 rounded-xl justify-center items-center mt-4 active:scale-95"
          onClick={() => signOut()}
        >
          Sign out
        </button> */}

        <Link
          className="block transition-all w-fit bg-black text-white py-2 px-4 rounded-xl mt-8 active:scale-95 mx-auto"
          href="/ca/dashboard"
        >
          CA Dashboard
        </Link>
      </>
    );
  }
  return (
    <>
      <button
        className="transition-all w-fit mx-auto bg-rose-100/60 text-black ring-black ring-2 py-2 px-4 rounded-xl justify-center items-center mt-4 active:scale-95 flex flex-row gap-2"
        onClick={() => signIn("google")}
      >
        <GOOGLE_LOGO className="w-6 h-6" /> Continue with Google
      </button>
    </>
  );
}
const GOOGLE_LOGO = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      className={className}
      viewBox="0 0 30 30"
    >
      <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"></path>
    </svg>
  );
};
