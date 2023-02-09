import Head from "next/head";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { MdAdd, MdOutlineRemove } from "react-icons/md"
import { NavBar } from "../../components/globals/NavBar";
import Footer from "../../components/globals/Footer";
import { useEffect, useState } from "react";
import { events_data } from "../../data/events";
import axios from "axios";

function Members({ min, max, formData, setFormData }) {
  // number of members to add in additional members except min members
  // max-1 is the highest we can go and min-1 is the lowest
  const [memberCount, setMemberCount] = useState(min - 1);

  function handleCount(type) {
    if (type === "add" && memberCount < max - 1) {
      setFormData({
        ...formData,
        additionalMembers: formData.additionalMembers.concat([{ tharId: '' }])
      });
      setMemberCount(memberCount + 1);

    } else if (type === "remove" && memberCount > min - 1) {
      setFormData({
        ...formData,
        additionalMembers: formData.additionalMembers.slice(0, -1)
      });
      setMemberCount(memberCount - 1);
    }
  }

  function handleChange(e, i) {
    const arr = [...formData.additionalMembers];
    // arr[i].tharId = e.target.value;
    arr[i] = { tharId: e.target.value };

    setFormData({
      ...formData,
      additionalMembers: arr
    })
  }

  return (
    <>
      <p className="block text-yellow-300">Additional Members:</p>
      {formData.additionalMembers.map((member, i) => <input
        key={i}
        minLength={13}
        value={member.tharId}
        onChange={(e) => handleChange(e, i)}
        required
        placeholder="THAR ID of member"
        className="border-2 rounded w-full py-2 px-2 bg-black"
      />)}
      <div className="flex gap-4">
        <button type="button" className="bg-green-700 py-2 px-6 rounded-sm" onClick={() => handleCount('add')}>
          <MdAdd style={{ color: 'white', fontSize: '1rem' }} />
        </button>
        <button type="button" className="bg-red-400 py-2 px-6 rounded-sm" onClick={() => handleCount('remove')}>
          <MdOutlineRemove style={{ color: 'white', fontSize: '1rem' }} />
        </button>
      </div>
    </>
  )
}

export default function Register() {
  // get the eventID from slug
  const router = useRouter();
  let eventID;

  useEffect(() => {
    if (router.isReady) {
      eventID = router.query.eventID;
      selectEvent({ target: { value: eventID } });
    }
  }, [router.isReady]);

  const [eventData, setEventData] = useState({});
  const [formData, setFormData] = useState({
    event: eventID,
    participant: "",
    additionalMembers: []
  })

  const { data } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/#participant");
    },
  });

  function selectEvent(e) {
    const event = events_data.find(data => data.id === e.target.value);
    setEventData({
      id: event.id,
      event_type: event.event_type,
      max_participants: event.max_participants,
      min_participants: event.min_participants
    });

    setFormData({
      ...formData,
      event: e.target.value,
      additionalMembers: Array(event.min_participants - 1).fill({ tharId: '' })
    });
  }

  useEffect(() => {
    axios
      .get("/api/v1/tharUser/getUser")
      .then((res) => {
        if (res.data.data == null) {
          // User doesn't exist
          console.log("user data is null");
          router.push('/participant/dashboard');
        } else {
          // User exists
          // tharId = res.data.data.userTharID
          setFormData(formData => ({ ...formData, participant: res.data.data.userTharID }));
        }
      });
  }, []);

  async function register(e) {
    e.preventDefault();
    axios
      .put("/api/v1/webhook/eventPayment", formData.additionalMembers.length
        ? formData
        : { event: formData.event, participant: formData.participant }
      )
      .then(function (response) {
        if (response.status === 200) {
          router.push("/participant/dashboard");
        } else {
          alert(response.body.message)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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
            <form className="flex flex-col gap-4" onSubmit={register}>
              <div>
                <label className="block text-yellow-300">Select event:</label>
                <select value={formData.event} onChange={e => selectEvent(e)} className="border-2 rounded w-full py-2 px-2 bg-black">
                  <option value={""} disabled>Select Event</option>
                  {events_data.map(eventItem => <option value={eventItem.id} key={eventItem.id}>{eventItem.name}</option>)}
                </select>
              </div>
              {/* <select value={members} onChange={e => setMembers(e.target.value)} className="border-2 rounded w-full py-2 px-2 bg-black">
                {events_data?.find(e => e.id === event).members}
              </select> */}
              <div>
                <label className="block text-yellow-300">Participant name:</label>
                <input value={data ? data.user.name : ""} disabled className="border-2 rounded w-full py-2 px-2 bg-gray-800"></input>
              </div>
              {(eventData.event_type === "Team") &&
                <Members
                  max={eventData.max_participants}
                  min={eventData.min_participants}
                  formData={formData}
                  setFormData={setFormData}
                />
              }
              <button
                className="px-8 py-3 ring-yellow-300 ring text-yellow-300 bg-black/30 backdrop-blur-3xl font-semibold hover:bg-yellow-300 hover:text-yellow-900 hover:rounded-md transition-all ease-in-out w-max self-center *animate-bounce*"
                title="Register Now!"
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