import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { NavBar } from "../../components/globals/NavBar";
import Footer from "../../components/globals/Footer";
import axios from "axios";
import ParticipantForm from "../../components/participant/ParticipantForm";
import Processing from "../../components/MicroComponents/Processing";
import ShowParticipant from "../../components/participant/ShowParticipant";
export default function Dashboard() {
  const router = useRouter();
  const { data } = useSession();
  const [userData, setUserData] = useState(null);
  const [form, setForm] = useState(false);
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/#participant");
    },
  });

  useEffect(() => {
    if (status === "authenticated") {
      axios.get("/api/v1/tharUser/getUser").then((res) => {
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
        <div className="pt-32 md:pt-36 lg:pt-44">
          {form ? (
            <ParticipantForm name={data.user?.name} email={data.user?.email} />
          ) : (
            <div className="w-[95%] sm:w-[90%] md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl bg-black/10 backdrop-blur-2xl rounded-md text-white mx-auto ring-yellow-300/60 ring-4 md:ring-[5px] pb-6">
              <div className="relative pt-16 mt-16 rounded-t-md">
                <img
                  src={data.user?.image}
                  referrerPolicy="no-referrer"
                  className="w-28 aspect-square mx-auto rounded-full ring-yellow-300/60 ring-4 md:ring-[5px] absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className="p-2 md:p-4 text-center text-2xl font-semibold">
                Hello {data.user?.name}
              </div>

              {userData ? (
                <ShowParticipant userData={userData} />
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
