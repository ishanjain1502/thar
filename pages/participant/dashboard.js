import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import { NavBar } from "../../components/globals/NavBar";
import Footer from "../../components/globals/Footer";
export default function Dashboard() {
  const router = useRouter();
  const { data } = useSession();
  //   const [userData, setUserData] = useState(null);
  //   const [form, setForm] = useState(false);
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/#participant");
    },
  });

  //   useEffect(() => {
  //     if (status === "authenticated") {
  //       axios.get("user profil;e api").then((res) => {
  //         if (res.data.data == null) {
  //           setForm(true);
  //         } else {
  //           setUserData(res.data.data);
  //         }
  //       });
  //     }
  //   }, [status]);
  if (data != undefined) {
    return (
      <>
        <NavBar />
        <div className="pt-32 md:pt-36">
          <div className=" flex justify-center items-center">
            <img
              src={data.user?.image}
              referrerPolicy="no-referrer"
              className="w-28 aspect-square mx-auto rounded-full ring-4 ring-white/80"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="text-center mt-16 text-2xl font-semibold ">
            Hello {data.user?.name}
          </div>
          <div className="text-sm font-bold text-slate-400 text-center">
            {data.user?.email}
          </div>
          <button
            className="transition-all w-fit mx-auto bg-white text-black rounded-lg py-2 px-4  justify-center items-center mt-4 active:scale-95 flex flex-row gap-2"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
        <Footer />
      </>
    );
  }
}
