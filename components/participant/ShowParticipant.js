import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { events_data } from "../../data/events";

export default function ShowParticipant({ userData }) {
  const router = useRouter();

  /* Array of filtered events of user on basis of event id recieved from db */
  var user_events = [];
  userData.events.forEach((event) => {
    let event_data = events_data.filter((obj) => obj.id == event);
    if (!user_events.includes(event_data[0])) {
      user_events.push(event_data[0]);
    }
  });
  console.log(user_events);

  return (
    <>
      <div className="text-center">
        🎓{userData.college} <br />
        📞 {userData.phone}
      </div>
      <div className="flex flex-row flex-wrap flex-shrink-0 justify-center p-2">
        <div className="w-1/2 lg:w-1/4 p-2">
          <div className="rounded-lg text-center flex flex-col justify-center place-items-center p-2 font-semibold h-full bg-purple-200 py-6 text-xl">
            {userData.credits}{" "}
            <div className="font-normal pt-2 text-base"> Your Credits</div>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/4 p-2">
          <div className="rounded-lg text-center flex flex-col justify-center place-items-center p-2 font-semibold h-full bg-emerald-200 py-6 text-xl">
            <div className="text-center">
              {userData.userTharID}{" "}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(userData.userTharID);
                  alert(`User id ${userData.userTharID} copied to clipboard`);
                }}
              >
                📋
              </button>
            </div>
            <div className="font-normal pt-2 text-base">Your Id</div>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/4 p-2">
          <div
            className="rounded-lg text-center flex flex-col justify-center place-items-center p-2 font-semibold h-full bg-sky-200 py-6 text-xl cursor-pointer"
            onClick={() => {
              router.push("/participant/payment");
              // alert("this option is currently unavailable");
            }}
          >
            Buy Credits
          </div>
        </div>
        <div className="w-1/2 lg:w-1/4 p-2">
          <div className="rounded-lg text-center flex flex-col justify-center place-items-center p-2 font-semibold h-full bg-yellow-200 py-6 text-xl">
            +91 90798 10261{" "}
            <div className="font-normal pt-2 text-base">Support</div>
          </div>
        </div>
      </div>
      <div className="text-slate-700 font-semibold px-4 py-1 md:text-center">
        Credits are used to participate in events.
      </div>

      {/* Show events data if user has registered in any event */}
      {userData.events.length > 0 && (
        <div className="bg-emerald-200 m-4 p-4 rounded-md">
          <p className="text-lg text-emerald-900 font-semibold">Your events:</p>
          <ul className="mt-2 list-none">
            {/* {events_data[0].name} */}
            {user_events.map((event, index) => (
              <li key={event.id} className="text-lg">
                {index + 1}. {event.name}{" "}
                <span className="bg-sky-500 text-white px-2 text-sm rounded-full">
                  {event.event_type}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        className="transition-all w-fit mx-auto bg-black font-semibold text-white rounded-lg py-2 px-4  justify-center items-center mt-4 active:scale-95 flex flex-row gap-2"
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Sign out
      </button>
    </>
  );
}
