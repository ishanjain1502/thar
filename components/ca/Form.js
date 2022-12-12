import React, { useState } from "react";
import Processing from "./MicroComponents/Processing";

export default function About() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    college: "",
    rollNo: "",
    degree: "B.Tech",
    address: "",
    pincode: "",
    year: "1st",
  });
  const [caId, setCaId] = useState("");
  const [processing, setProcessing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  function handle_ca_form(e) {
    // To prevent defaault behaviour of Form
    e.preventDefault();

    /* TODO: Load data with a single ref to optimise extra memory usage */

    console.log(formData);
  }
  return (
    <div
      className="w-full py-6 flex flex-col justify-center sm:py-12"
      id="caform"
    >
      {/* Flex Break Point - lg */}

      <div className="py-3 mx-auto w-11/12 sm:w-9/12  md:w-8/12 lg:w-7/12 xl:w-6/12">
        <div className="relative px-4 py-10 bg-white/60 backdrop-blur-xl shadow-lg rounded-xl sm:rounded-3xl sm:p-20">
          {/* check if it's processing */}
          {processing ? (
            <Processing />
          ) : // if not processing then check for submitted or not
          submitted ? (
            <div className="text-xl md:text-2xl lg:text-3xl text-center text-slate-900 font-semibold">
              Congratulations! You have been registered for Campus Ambassador
              Programme of RTU THAR 2023.
              <div className=" bg-yellow-300 px-2 mt-2 py-1 w-fit mx-auto">
                Your Id: <span className="font-mono">{caId}</span>
              </div>
            </div>
          ) : (
            <>
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-black font-semibold">
                  Campus Ambassadors Form
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <form
                  onSubmit={(e) => {
                    handle_ca_form(e);
                  }}
                  className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                >
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                      }}
                      autoComplete="off"
                      minLength={3}
                      maxLength={30}
                      className="peer placeholder-transparent h-10 w-full border-b-2 bg-transparent border-gray-300 text-gray-900 font-semibold text-lg focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-3.5 text-gray-700 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                      }}
                      autoComplete="off"
                      minLength={16}
                      maxLength={50}
                      className="peer placeholder-transparent h-10 w-full border-b-2 bg-transparent border-gray-300 text-gray-900 font-semibold text-lg focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-700 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
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
                      maxLength={10}
                      className="peer placeholder-transparent h-10 w-full border-b-2 bg-transparent border-gray-300 text-gray-900 font-semibold text-lg focus:outline-none focus:borer-rose-600"
                      placeholder="phone no"
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-0 -top-3.5 text-gray-700 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
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
                      className="peer placeholder-transparent h-10 w-full border-b-2 bg-transparent border-gray-300 text-gray-900 font-semibold text-lg focus:outline-none focus:borer-rose-600"
                      placeholder="college"
                    />
                    <label
                      htmlFor="college"
                      className="absolute left-0 -top-3.5 text-gray-700 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      college
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
                      className="peer placeholder-transparent h-10 w-full border-b-2 bg-transparent border-gray-300 text-gray-900 font-semibold text-lg focus:outline-none focus:borer-rose-600"
                      placeholder="roll no"
                    />
                    <label
                      htmlFor="rollno"
                      className="absolute left-0 -top-3.5 text-gray-700 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
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
                      className="peer placeholder-transparent h-10 w-full border-b-2 bg-transparent border-gray-300 text-gray-900 font-semibold text-lg focus:outline-none focus:borer-rose-600"
                      placeholder="address"
                    />
                    <label
                      htmlFor="address"
                      className="absolute left-0 -top-3.5 text-gray-700 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
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
                      className="peer placeholder-transparent h-10 w-full border-b-2 bg-transparent border-gray-300 text-gray-900 font-semibold text-lg focus:outline-none focus:borer-rose-600"
                      placeholder="roll no"
                    />
                    <label
                      htmlFor="pincode"
                      className="absolute left-0 -top-3.5 text-gray-700 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Pincode
                    </label>
                  </div>
                  <select
                    className="transition-all w-full bg-transparent py-2 text-base rounded-none border-b-2 placeholder:text-slate-500 text-slate-800 font-semibold border-slate-300 focus:border-slate-300 outline-none"
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
                    className="transition-all w-full bg-transparent py-2 text-base rounded-none border-b-2 placeholder:text-slate-500 text-slate-800 font-semibold border-slate-300 focus:border-slate-300 outline-none"
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
                      class=" bg-yellow-300 text-black  focus:outline-none font-medium text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center font-spaceboards"
                    >
                      Submit Details
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
