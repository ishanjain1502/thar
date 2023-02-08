import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavBar } from "../../components/globals/NavBar";
import Footer from "../../components/globals/Footer";
import CaForm from "../../components/ca/CaForm";
import ShowUser from "../../components/ca/ShowUser";
import Processing from "../../components/MicroComponents/Processing";
export default function Dashboard() {
  const router = useRouter();
  const { data } = useSession();
  const [userData, setUserData] = useState(null);
  const [form, setForm] = useState(false);
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn("google");
    },
  });

  useEffect(() => {
    if (status === "authenticated") {
      axios.get("/api/v1/ca/getProfile").then((res) => {
        if (res.data.data == null) {
          setForm(true);
        } else {
          setUserData(res.data.data);
        }
      });
    }
  }, [status]);
  if (data != undefined) {
    return (
      <>
        <NavBar />
        <div className="pt-32 md:pt-36">
          {form ? (
            <CaForm name={data.user?.name} email={data.user?.email} />
          ) : (
            <div className="w-[95%] sm:w-[90%] md:max-w-2xl lg:max-w-3xl xl:max-w-4xl  bg-white backdrop-blur-2xl rounded-md text-black mx-auto pb-6 px-2 md:px-4 mt-16">
              <div className="relative mb-16 flex justify-center items-center">
                <img
                  src={data.user?.image}
                  referrerPolicy="no-referrer"
                  className="w-28 aspect-square mx-auto rounded-full ring-4 ring-white/80 absolute -mt-8"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className="text-center mt-16 text-2xl font-semibold ">
                Hello {data.user?.name}
              </div>

              {userData ? (
                <ShowUser userData={userData} />
              ) : (
                <Processing text="Fetching Your data..." />
              )}
            </div>
          )}
        </div>
        <Footer />
      </>
    );
  }
}
