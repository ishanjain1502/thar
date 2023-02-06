import Head from "next/head";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { NavBar } from "../../../../components/globals/NavBar";
import Footer from "../../../../components/globals/Footer";
import { useState } from "react";
import { events_data } from "../../../../data/events";

export default function Payment() {
  const [event, setEvent] = useState("");
  const router = useRouter();
  const { data } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/#participant");
    },
  });

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Event Registration - Thar 2023</title>
      </Head>
      <main className="flex flex-col items-center">
        <NavBar />
        <h1 className="pt-32 lg:pt-48 pb-6 text-center font-spaceboards text-yellow-300 text-3xl sm:text-5xl md:text-7xl text-stroke text-stroke-color break-keep">
          Event Registration
        </h1>
        <div className="flex flex-col max-w-xs md:max-w-4xl xl:max-w-5xl mt-4 p-10 lg:px-20 rounded-xl bg-black/80 backdrop-blur-xl">
          <div className="flex flex-col max-w-5xl w-full rounded-xl justify-evenly">
            <form className="flex flex-col">
              <label className="block text-yellow-300">Select event:</label>
              <select value={event} onChange={e => setEvent(e.target.value)} className="border-2 rounded w-full py-2 px-2 bg-black">
                <option value={""} disabled>Select Event</option>
                {events_data.map(eventItem => <option value={eventItem.id} key={eventItem.id}>{eventItem.name}</option>)}
              </select>
              {/* <select value={members} onChange={e => setMembers(e.target.value)} className="border-2 rounded w-full py-2 px-2 bg-black">
                {events_data?.find(e => e.id === event).members}
              </select> */}
              <br />
              <label className="block text-yellow-300">Participant name:</label>
              <input value={data ? data.user.name : ""} disabled className="border-2 rounded w-full py-2 px-2 bg-gray-800"></input>
              <br />
              {/* <div className="w-full h-[2px] bg-white"></div>
              <br />
              <p className="text-gray-300">Selected Event:</p>
              <p className="text-yellow-300 text-2xl">{event && events_data?.find(e => e.id === event).name} - {event && events_data?.find(e => e.id === event).domain}</p> */}
              <br />
              <button
                className="px-8 py-3 ring-yellow-300 ring text-yellow-300 bg-black/30 backdrop-blur-3xl font-semibold hover:bg-yellow-300 hover:text-yellow-900 hover:rounded-md transition-all ease-in-out w-max self-center *animate-bounce*"
                title="Register Now!"
                //onClick={register}
              >
                Register!
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}