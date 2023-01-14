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
        <div className="pt-32 md:pt-36 lg:pt-44">
          <div className="w-[95%] sm:w-[90%] md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-2xl bg-black/10 backdrop-blur-2xl rounded-md text-white mx-auto ring-yellow-300/60 ring-4 md:ring-[5px] pb-6">
            <div className="relative pt-16 mt-16 rounded-t-md">
              <img
                src={data.user?.image}
                referrerPolicy="no-referrer"
                className="w-28 aspect-square mx-auto rounded-full ring-yellow-300/60 ring-4 md:ring-[5px] absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="p-2 md:p-4 text-center">
              <div className="text-2xl font-semibold">
                Hello {data.user?.name}
              </div>
              <div>
                🗺️ College <br />
                Year Degree
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 p-2 gap-2 md:gap-4 py-6 px-6">
              <div className="bg-white/10 shadow-lg ring-2 ring-white/20 cursor-pointer rounded-lg text-center p-2 font-semibold">
                0 <br /> Credits
              </div>
              <div className="bg-white/10 shadow-lg ring-2 ring-white/20 cursor-pointer rounded-lg text-center p-2 font-semibold">
                id <br /> Thar Id
              </div>
              <div className="bg-white/10 shadow-lg ring-2 ring-white/20 cursor-pointer rounded-lg text-center p-2 font-semibold">
                asd <br /> asd
              </div>
              <div className="bg-white/10 shadow-lg ring-2 ring-white/20 cursor-pointer rounded-lg text-center p-2 font-semibold">
                +91 7240732728 <br />
                Support
              </div>
            </div>
            <button
              className="transition-all w-fit mx-auto bg-yellow-200 text-black font-semibold rounded-lg py-2 px-4  justify-center items-center mt-4 active:scale-95 flex flex-row gap-2"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
