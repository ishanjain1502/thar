import axios from "axios";
import { getSession, signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";
import CaForm from "../../components/ca/CaForm";
import DataTable from "../../components/ca/DataTable";
import Processing from "../../components/ca/MicroComponents/Processing";
import { NavBar } from "../../components/globals/NavBar";

export default function Dashboard(props) {
  // const router = useRouter();

  const [userData, setUserData] = useState(null);
  const [form, setForm] = useState(false);

  useEffect(() => {
    axios.get("/api/v1/ca/getProfile").then((res) => {
      if (res.data.data == null) {
        setForm(true);
      } else {
        setUserData(res.data.data);
      }
    });
  });

  return (
    <>
      <NavBar />

      <div className="pt-32 md:pt-36">
        {form ? (
          <CaForm name={props.user?.name} email={props.user?.email} />
        ) : (
          <div className="w-[70%] md:w-[60%] lg:w-[55%] xl:w-[50%] mx-auto text-white ring-2 ring-white/60 bg-white/20 backdrop-blur-3xl p-4 rounded text-center">
            <div className="text-xl mt-2 mb-4 font-semibold">
              <img
                src={props.user?.image}
                referrerPolicy="no-referrer"
                className="w-16 aspect-square mx-auto rounded-full ring-4 ring-yellow-300"
                loading="lazy"
                alt=""
              />
              Hello {props.user?.name}
            </div>
            {userData ? (
              <DataTable userData={userData} />
            ) : (
              <Processing text="Fetching Your data..." />
            )}
            <button
              className="transition-all block w-fit mx-auto bg-yellow-100 text-black ring-black ring-2 py-2 px-4 rounded-xl justify-center items-center mt-4 active:scale-95"
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
export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    context.res.writeHead(302, { Location: "/ca#caform" });
    context.res.end();
    return {};
  }
  const user = session.user;
  return {
    props: { user },
  };
}
