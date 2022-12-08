import React, { useState } from "react";
import axios from "axios";
export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [year, setYear] = useState("1st");
  const [degree, setDegree] = useState("B.Tech");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [caId, setCaId] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  function handleSuccessDetails(e) {
    e.preventDefault();
    if (email.includes("@gmail.com")) {
      setIsProcessing(true);
      axios
        .post("/api/v1/ca/register", {
          name: name,
          phone: phone,
          email: email,
          college: college,
          rollNo: rollNo,
          degree: degree,
          address: address,
          pincode: pincode,
          year: year,
        })
        .then(function (response) {
          setCaId(response.data.data);
          setName("");
          setEmail("");
          setPhone("");
          setCollege("");
          setRollNo("");
          setYear("1st");
          setDegree("B.Tech");
          setAddress("");
          setPincode("");
          setIsProcessing(false);
          setIsSubmitted(true);
        })
        .catch(function (error) {
          alert(error.response.data.message);
          setIsProcessing(false);
        });
    } else {
      alert("Email must be a valid gmail id");
    }
  }
  return (
    <div id="ca" className="flex justify-center mb-10">
      {/* Flex Break Point - lg */}
      <div className="w-11/12 sm:w-10/12 md:w-8/12 xl:w-8/12 border-4 border-yellow-300 flex flex-col lg:flex-row">
        <div className=" bg-yellow-300/20 backdrop-blur-xl w-full lg:w-3/12 flex h-full justify-center items-center lg:border-r-4 border-b-4 lg:border-b-0 border-yellow-300">
          <span className="lg:-rotate-90 text-center h-max text-3xl sm:text-4xl md:text-5xl font-spaceboards my-4 pt-3">
            Campus Ambassadors
          </span>
        </div>
        <form
          action=""
          onSubmit={(e) => handleSuccessDetails(e)}
          className="w-full lg:w-9/12 p-8 text-xl md: bg-black/20 backdrop-blur-2xl hyphens flex flex-col gap-8"
        >
          Fill up this form to become a Campus Ambassador for Thar 2023
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
            minLength={3}
            maxLength={30}
            className="transition-all w-full bg-transparent p-1 lg:p-2 text-base rounded-none border-b-2 placeholder:text-slate-500 border-slate-500 focus:border-slate-300 outline-none"
            required={true}
            placeholder="Name"
          />
          <div className="text-red-300 text-sm -mb-6 -mt-2">
            *Only Gmails allowed
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            minLength={16}
            maxLength={50}
            className="transition-all w-full bg-transparent p-1 lg:p-2 text-base rounded-none border-b-2 placeholder:text-slate-500 border-slate-500 focus:border-slate-300 outline-none"
            required={true}
            placeholder="Email Address"
          />
          <input
            type="mobile"
            autoComplete="off"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            minLength={10}
            maxLength={10}
            className="transition-all w-full bg-transparent p-1 lg:p-2 text-base rounded-none border-b-2 placeholder:text-slate-500 border-slate-500 focus:border-slate-300 outline-none"
            required={true}
            placeholder="Phone no"
          />
          <input
            type="text"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            autoComplete="off"
            minLength={3}
            maxLength={100}
            className="transition-all w-full bg-transparent p-1 lg:p-2 text-base rounded-none border-b-2 placeholder:text-slate-500 border-slate-500 focus:border-slate-300 outline-none"
            required={true}
            placeholder="College"
          />
          <input
            type="text"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            autoComplete="off"
            minLength={3}
            maxLength={30}
            className="transition-all w-full bg-transparent p-1 lg:p-2 text-base rounded-none border-b-2 placeholder:text-slate-500 border-slate-500 focus:border-slate-300 outline-none"
            required={true}
            placeholder="College Roll No"
          />
          <select
            className="transition-all w-full bg-transparent p-1 lg:p-2 text-base rounded-none border-b-2 placeholder:text-slate-500 border-slate-500 focus:border-slate-300 outline-none"
            placeholder="Choose a year"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
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
            className="transition-all w-full bg-transparent p-1 lg:p-2 text-base rounded-none border-b-2 placeholder:text-slate-500 border-slate-500 focus:border-slate-300 outline-none"
            placeholder="Choose a year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
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
          <input
            type="text"
            autoComplete="off"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            minLength={2}
            maxLength={200}
            className="transition-all w-full bg-transparent p-1 lg:p-2 text-base rounded-none border-b-2 placeholder:text-slate-500 border-slate-500 focus:border-slate-300 outline-none"
            required={true}
            placeholder="Address"
          />
          <input
            type="string"
            autoComplete="off"
            value={pincode}
            minLength={6}
            maxLength={6}
            onChange={(e) => setPincode(e.target.value)}
            className="transition-all w-full bg-transparent p-1 lg:p-2 text-base rounded-none border-b-2 placeholder:text-slate-500 border-slate-500 focus:border-slate-300 outline-none"
            required={true}
            placeholder="Pincode"
          />
          <div className="w-full flex justify-end">
            {isProcessing ? (
              <div className="bg-yellow-300 text-black  focus:outline-none font-medium text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center font-spaceboards">
                <svg
                  aria-hidden="true"
                  role="status"
                  class="inline mr-3 w-4 h-4 text-black animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Submitting
              </div>
            ) : (
              <button
                type="submit"
                class=" bg-yellow-300 text-black  focus:outline-none font-medium text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center font-spaceboards"
              >
                Submit Details
              </button>
            )}
          </div>
          {isSubmitted && (
            <div className="w-full p-2">
              Congratulations! You have been registered for Campus Ambassador
              Programme of RTU THAR 2023. Your request id is{" "}
              <span className="font-mono text-yellow-300">{caId}</span> keep
              this id for future refrence, we will contact you soon.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
