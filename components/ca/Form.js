import React, { useState } from "react";

export default function About() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    college: "",
    rollNo: "",
    degree: "",
    address: "",
    pincode: "",
    year: "",
  });
  const [caId, setCaId] = useState("");
  const [processing, setProcessing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  function handle_ca_form(e) {
    // To prevent defaault behaviour of Form
    e.preventDefault();
    alert("Processing");
  }
  return (
    <div className="w-full flex justify-center" id="caform">
      {/* Flex Break Point - lg */}
      <form
        onSubmit={(e) => {
          handle_ca_form(e);
        }}
        className="w-11/12 sm:w-10/12 md:w-8/12 xl:w-8/12 bg-yellow-300/5 backdrop-blur-xl  rounded-md border-4 border-white/40 p-4 md:p-6 lg:p-8 xl:p-12"
      >
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
