import React, { useEffect, useState } from "react";
import axios from "axios";
import Processing from "../MicroComponents/Processing";
import Submitted from "../MicroComponents/Submitted";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

export default function ParticipantForm({ email, name, referral }) {
  const router = useRouter();
  /* Sample data
  {
    "name" : "naruto",
    "email" : "naruto3@gmail.com",
    "phone" : "1234561284",
    "college" : "rtu kota",
    "rollNo" : "19/999",
    "degree" : "b.tech",
    "year" : "4th",
    "address" : "ni bata rha 2",
    "pincode" : "324005",
    "referralCode" : "CA-w2cid1"
    }
  */
  const [formData, setFormData] = useState({
    name: name,
    phone: "",
    email: email,
    college: "",
    rollNo: "",
    degree: "B.Tech",
    address: "",
    pincode: "",
    year: "1st",
    referralCode: "",
  });
  const [tharId, settharId] = useState("");
  const [processing, setProcessing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  function handle_ca_form(e) {
    // To prevent defaault behaviour of Form
    e.preventDefault();

    setProcessing(true);
    axios
      .post("/api/v1/tharUser/tharUserRegister", {
        name: name,
        phone: formData.phone,
        college: formData.college,
        rollNo: formData.rollNo,
        degree: formData.degree,
        address: formData.address,
        pincode: formData.pincode,
        year: formData.year,
        referralCode: formData.referralCode,
      })
      .then(function (response) {
        settharId(response.data.data);
        setFormData({
          name: { name },
          phone: "",
          email: { email },
          college: "",
          rollNo: "",
          degree: "B.Tech",
          address: "",
          pincode: "",
          year: "1st",
          referralCode: "",
        });
        setProcessing(false);
        setSubmitted(true);
        router.reload(window.location.pathname);
      })
      .catch(function (error) {
        alert(error.response.data.message);
        setProcessing(false);
      });

    /* TODO: Load data with a single ref to optimise extra memory usage */
  }
  useEffect(() => {
    if (referral != undefined) {
      setFormData({ ...formData, referralCode: referral });
    }
  }, [referral]);
  return (
    <div
      className="w-full py-6 flex flex-col justify-center sm:py-12"
      id="caform"
    >
      {/* Flex Break Point - lg */}

      <div className="py-3 mx-auto w-11/12 sm:w-9/12  md:w-8/12 lg:w-7/12 xl:w-6/12">
        <div className="relative px-4 py-10 bg-black/10 backdrop-blur-2xl text-white ring-2 ring-slate-100/50 shadow-lg rounded-xl sm:rounded-3xl sm:p-20">
          {/* check if it's processing */}
          {processing ? (
            <Processing />
          ) : // if not processing then check for submitted or not
          submitted ? (
            <Submitted />
          ) : (
            <>
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold">
                  RTU THAR 2023 Participants Form
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <form
                  onSubmit={(e) => {
                    handle_ca_form(e);
                  }}
                  className="py-8 text-base leading-6 space-y-4 sm:text-lg sm:leading-7"
                >
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={name}
                      readOnly={true}
                      autoComplete="off"
                      minLength={3}
                      maxLength={30}
                      className="peer placeholder-transparent h-10 mt-2 w-full border-b-2 bg-transparent border-gray-300  font-semibold text-lg focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="name"
                      className="text-white/40 font-normal absolute left-0 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white/50 peer-focus:text-sm"
                    >
                      Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      readOnly={true}
                      autoComplete="off"
                      minLength={16}
                      maxLength={50}
                      className="peer placeholder-transparent h-10 mt-2 w-full border-b-2 bg-transparent border-gray-300  font-semibold text-lg focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="email"
                      className="text-white/40 font-normal absolute left-0 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white/50 peer-focus:text-sm"
                    >
                      Valid Gmail Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="phone"
                      name="phone"
                      type="mobile"
                      autoComplete="off"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                      }}
                      minLength={10}
                      maxLength={13}
                      className="peer placeholder-transparent h-10 mt-2 w-full border-b-2 bg-transparent border-gray-300  font-semibold text-lg focus:outline-none focus:borer-rose-600"
                      placeholder="phone no"
                    />
                    <label
                      htmlFor="phone"
                      className="text-white/40 font-normal absolute left-0 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white/50 peer-focus:text-sm"
                    >
                      Phone number
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="college"
                      type="text"
                      value={formData.college}
                      onChange={(e) => {
                        setFormData({ ...formData, college: e.target.value });
                      }}
                      autoComplete="off"
                      minLength={3}
                      maxLength={100}
                      className="peer placeholder-transparent h-10 mt-2 w-full border-b-2 bg-transparent border-gray-300  font-semibold text-lg focus:outline-none focus:borer-rose-600"
                      placeholder="College"
                    />
                    <label
                      htmlFor="college"
                      className="text-white/40 font-normal absolute left-0 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white/50 peer-focus:text-sm"
                    >
                      College
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="rollno"
                      name="rollno"
                      type="text"
                      value={formData.rollNo}
                      onChange={(e) => {
                        setFormData({ ...formData, rollNo: e.target.value });
                      }}
                      autoComplete="off"
                      minLength={3}
                      maxLength={30}
                      className="peer placeholder-transparent h-10 mt-2 w-full border-b-2 bg-transparent border-gray-300  font-semibold text-lg focus:outline-none focus:borer-rose-600"
                      placeholder="roll no"
                    />
                    <label
                      htmlFor="rollno"
                      className="text-white/40 font-normal absolute left-0 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white/50 peer-focus:text-sm"
                    >
                      Roll no
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="address"
                      name="address"
                      type="text"
                      autoComplete="off"
                      value={formData.address}
                      onChange={(e) => {
                        setFormData({ ...formData, address: e.target.value });
                      }}
                      minLength={2}
                      maxLength={200}
                      className="peer placeholder-transparent h-10 mt-2 w-full border-b-2 bg-transparent border-gray-300  font-semibold text-lg focus:outline-none focus:borer-rose-600"
                      placeholder="address"
                    />
                    <label
                      htmlFor="address"
                      className="text-white/40 font-normal absolute left-0 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white/50 peer-focus:text-sm"
                    >
                      Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="pincode"
                      name="pincode"
                      type="text"
                      value={formData.pincode}
                      minLength={6}
                      maxLength={6}
                      onChange={(e) => {
                        setFormData({ ...formData, pincode: e.target.value });
                      }}
                      className="peer placeholder-transparent h-10 mt-2 w-full border-b-2 bg-transparent border-gray-300  font-semibold text-lg focus:outline-none focus:borer-rose-600"
                      placeholder="roll no"
                    />
                    <label
                      htmlFor="pincode"
                      className="text-white/40 font-normal absolute left-0 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white/50 peer-focus:text-sm"
                    >
                      Pincode
                    </label>
                  </div>
                  {/* Referral Code */}
                  <div className="relative">
                    <input
                      id="referralCode"
                      name="referralCode"
                      type="text"
                      value={formData.referralCode}
                      minLength={0}
                      maxLength={9}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          referralCode: e.target.value,
                        });
                      }}
                      className="peer placeholder-transparent h-10 mt-2 w-full border-b-2 bg-transparent border-gray-300  font-semibold text-lg focus:outline-none focus:borer-rose-600"
                      placeholder="roll no"
                    />
                    <label
                      htmlFor="pincode"
                      className="text-white/40 font-normal absolute left-0 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white/50 peer-focus:text-sm"
                    >
                      Referral Code
                    </label>
                  </div>
                  <select
                    className="transition-all w-full bg-transparent py-2 text-base rounded-none border-b-2 placeholder:text-slate-500 text-white font-semibold border-slate-300 focus:border-slate-300 outline-none"
                    placeholder="Choose Your Degree"
                    value={formData.degree}
                    onChange={(e) => {
                      setFormData({ ...formData, degree: e.target.value });
                    }}
                  >
                    <option className="bg-black text-white" value="B.Tech">
                      B.Tech
                    </option>
                    <option className="bg-black text-white" value="M.Tech">
                      M.Tech
                    </option>
                    <option className="bg-black text-white" value="MBA">
                      MBA
                    </option>
                    <option className="bg-black text-white" value="Other">
                      Other
                    </option>
                  </select>
                  <select
                    className="transition-all w-full bg-transparent py-2 text-base rounded-none border-b-2 placeholder:text-slate-500 text-white font-semibold border-slate-300 focus:border-slate-300 outline-none"
                    placeholder="Choose a year"
                    value={formData.year}
                    onChange={(e) => {
                      setFormData({ ...formData, year: e.target.value });
                    }}
                  >
                    <option className="bg-black text-white" value="1st">
                      1st Year
                    </option>
                    <option className="bg-black text-white" value="2nd">
                      2nd Year
                    </option>
                    <option className="bg-black text-white" value="3rd">
                      3rd Year
                    </option>
                    <option className="bg-black text-white" value="4th">
                      4th Year
                    </option>
                    <option className="bg-black text-white" value="Other">
                      Other
                    </option>
                  </select>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="transition-all mt-4 bg-yellow-300 text-black focus:outline-none font-medium text-sm px-6 py-3 text-center mr-2 inline-flex items-center font-spaceboards active:scale-95 outline-none"
                    >
                      Submit Details
                    </button>
                  </div>
                </form>
              </div>
              <button
                className="transition-all w-fit mx-auto bg-black ring-4 ring-black/80 text-white rounded-lg py-2 px-4  justify-center items-center mt-4 active:scale-95 flex flex-row gap-2"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Sign out
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
