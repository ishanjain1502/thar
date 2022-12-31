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
        className="block transition-all w-fit mx-auto bg-rose-500 ring-4 ring-rose-400 hover:bg-rose-600 text-white py-2 px-4 rounded-xl justify-center items-center mt-4 active:scale-95"
        onClick={() => signIn("google")}
      >
        Continue with Google
      </button>
    </>
  );
}
