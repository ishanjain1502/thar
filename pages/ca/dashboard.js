import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavBar } from "../../components/globals/NavBar";
import CaForm from "../../components/ca/CaForm";
import DataTable from "../../components/ca/DataTable";
import Processing from "../../components/ca/MicroComponents/Processing";
export default function Dashboard() {
  const router = useRouter();
  const { data } = useSession();
  const [userData, setUserData] = useState(null);
  const [form, setForm] = useState(false);
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/ca");
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
            <div className="w-[70%] md:w-[60%] lg:w-[55%] xl:w-[50%] mx-auto text-white ring-2 ring-white/60 bg-white/20 backdrop-blur-3xl p-4 rounded text-center">
              <div className="text-xl mt-2 mb-4 font-semibold">
                <img
                  src={data.user?.image}
                  referrerPolicy="no-referrer"
                  className="w-16 aspect-square mx-auto rounded-full ring-4 ring-yellow-300"
                  loading="lazy"
                  alt=""
                />
                Hello {data.user?.name}
              </div>
              {userData ? (
                <DataTable userData={userData} />
              ) : (
                <Processing text="Fetching Your data..." />
              )}
              <button
                className="transition-all w-fit mx-auto bg-white text-black py-2 px-4 rounded-md ring-2 ring-black/40 justify-center items-center mt-4 active:scale-95 flex flex-row gap-2"
                onClick={() => signOut()}
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      </>
    );
  }
}
