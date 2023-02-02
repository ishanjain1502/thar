import React from "react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import {MdClose , MdAdd,  MdOutlineRemove} from "react-icons/md"

export default function GoKartForm({ setBtnClicked }) {
  const { data: session, status } = useSession();
  const [isSubmitting, setIsSubmitting] = useState(true);
  const [additional, setAdditional] = useState([]);
  const [formData, setFormData] = useState({});

  const addField = (e) => {
    e.preventDefault();
    const obj = {
      name: "",
      phone: "",
      email: "",
    };

    setAdditional((additional) => [...additional, obj]);
    console.log(additional);
  };

  const removeLastField = (e) => {
    e.preventDefault();
    let temp = [...additional];
    temp.pop();
    setAdditional(temp);
  };

  const handleChange = (e, index) => {
    const { id, value } = e.target;
    const values = { ...formData };

    values[additionalMembers][index][id];

    setFormData(values);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const option = {
        method: "POST",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      };
      let res = await fetch("/api/v1/gokart/register", option);
      res = await res.json();
      if (!res.error) {
        alert(
          "Successfully Registered! You will receive a confirmation email shortly"
        );
        setBtnClicked(false);
        return;
      }
      alert(res.message);
    } catch (error) {
      alert(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen z-100 p-6 px-6  overflow-scroll backdrop-blur-xl bg-transparent" >
        <div className="flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none ">
        <div className="relative w-full md:w-9/12 lg:w-9/12 my-6 mx-auto ">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-0">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                <h3 className="text-3xl font=semibold">General Info</h3>
                <div className="float-right" >
                    <MdClose style={{fontSize:'1.5rem',cursor:'pointer'}} onClick={()=>setBtnClicked(false)}/>
                </div>
            </div>
            <div className="relative p-6 flex-auto">
                <form
                onSubmit={handleFormSubmit}
                className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
                >
                <label className="block text-black text-sm font-bold mb-1">
                    Team Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    value={formData.teamName}
                    onChange={(e) => {
                    setFormData({ ...formData, teamName: e.target.value });
                    }}
                />
                <label className="block text-black text-sm font-bold mb-1">
                    Captain Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    value={formData.captainName}
                    onChange={(e) => {
                    setFormData({ ...formData, captainName: e.target.value });
                    }}
                />
                <label className="block text-black text-sm font-bold mb-1">
                    Captain Phone no.
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    value={formData.captainPhoneNo}
                    onChange={(e) => {
                    setFormData({ ...formData, captainPhoneNo: e.target.value });
                    }}
                />
                <label className="block text-black text-sm font-bold mb-1">
                    Captain Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    value={formData.captainEmail}
                    onChange={(e) => {
                    setFormData({ ...formData, captainEmail: e.target.value });
                    }}
                />
                <label className="block text-black text-sm font-bold mb-1">
                    Driver Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    value={formData.driverName}
                    onChange={(e) => {
                    setFormData({ ...formData, driverName: e.target.value });
                    }}
                />
                <label className="block text-black text-sm font-bold mb-1">
                    Driver Phone No
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    value={formData.driverPhoneNo}
                    onChange={(e) => {
                    setFormData({ ...formData, driverPhoneNo: e.target.value });
                    }}
                />
                <label className="block text-black text-sm font-bold mb-1">
                    Driver Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    type="email"
                    value={formData.driverEmail}
                    onChange={(e) => {
                    setFormData({ ...formData, driverEmail: e.target.value });
                    }}
                />
                <label className="block text-black text-sm font-bold mb-1">
                    Co-Driver Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    value={formData.coDriverName}
                    onChange={(e) => {
                    setFormData({ ...formData, coDriverName: e.target.value });
                    }}
                />
                <label className="block text-black text-sm font-bold mb-1">
                    Co-Driver Phone No
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    value={formData.coDriverPhoneNo}
                    onChange={(e) => {
                    setFormData({ ...formData, coDriverPhoneNo: e.target.value });
                    }}
                />
                <label className="block text-black text-sm font-bold mb-1">
                    Co-Driver Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    type="email"
                    value={formData.coDriverEmail}
                    onChange={(e) => {
                    setFormData({ ...formData, coDriverEmail: e.target.value });
                    }}
                />
                <label className="block text-black text-sm font-bold mb-1">
                    Co-Captain Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    value={formData.coCaptainName}
                    onChange={(e) => {
                    setFormData({ ...formData, coCaptainName: e.target.value });
                    }}
                />
                <label className="block text-black text-sm font-bold mb-1">
                    Co-Captain Phone No.
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    value={formData.coCaptainPhoneNo}
                    onChange={(e) => {
                    setFormData({
                        ...formData,
                        coCaptainPhoneNo: e.target.value,
                    });
                    }}
                />
                <label className="block text-black text-sm font-bold mb-1">
                    Co-Captain Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    type="email"
                    value={formData.coCaptainEmail}
                    onChange={(e) => {
                    setFormData({ ...formData, coCaptainEmail: e.target.value });
                    }}
                />
                <label className="block text-black text-sm font-bold mb-1">
                    Mentor Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    value={formData.mentorName}
                    onChange={(e) => {
                    setFormData({ ...formData, mentorName: e.target.value });
                    }}
                />
                <label className="block text-black text-sm font-bold mb-1">
                    Mentor Phone No.
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    value={formData.mentorPhoneNo}
                    onChange={(e) => {
                    setFormData({ ...formData, mentorPhoneNo: e.target.value });
                    }}
                />
                <label className="block text-black text-sm font-bold mb-1">
                    Mentor Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    value={formData.mentorEmail}
                    onChange={(e) => {
                    setFormData({ ...formData, mentorEmail: e.target.value });
                    }}
                />
                <label className="block text-black text-sm font-bold mb-1">
                    Address
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    value={formData.address}
                    onChange={(e) => {
                    setFormData({ ...formData, address: e.target.value });
                    }}
                />
                <label className="block text-black text-sm font-bold mb-1">
                    College
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    value={formData.college}
                    onChange={(e) => {
                    setFormData({ ...formData, college: e.target.value });
                    }}
                />
                <label className="block text-black text-sm font-bold mb-1">
                    Payment Recipt
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    value={formData.payment}
                    onChange={(e) => {
                    setFormData({ ...formData, payment: e.target.value });
                    }}
                />
                <div>
                    {Object.entries(additional).map((val, key) => {
                    return (
                        <div key={key}>
                        {key === 0 ? (
                            <>
                            {" "}
                            <br />{" "}
                            <div className="text-black">
                                Additional Members Are&nbsp;:{" "}
                            </div>
                            </>
                        ) : (
                            <></>
                        )}

                        <label className="block text-black text-sm font-bold mb-1">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                            value={val.name}
                            onChange={(e) => handleChange(e, key)}
                        />

                        <label className="block text-black text-sm font-bold mb-1">
                            Phone No.
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                            value={val.phoneNo}
                            onChange={(e) => handleChange(e, key)}
                        />

                        <label className="block text-black text-sm font-bold mb-1">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                            value={val.email}
                            onChange={(e) => handleChange(e, key)}
                        />
                        <br/>
                        </div>
                    );
                    })}
                </div>
                <span>
                    <button
                    className="w-16 h-8 my-4  text-black border-yellow-800 border-2 bg-yellow-200"
                    onClick={addField}
                    >
                    +
                    </button>{" "}
                    &nbsp;&nbsp;
                    <button
                    className="w-16 h-8 my-4  text-black border-yellow-800 border-2 bg-yellow-200"
                    onClick={removeLastField}
                    >
                    -
                    </button>
                </span>
                <div>
                    {/* Payment details */}
                    <br />
                    <label className="block text-black text-sm font-bold mb-1">
                    {process.env.NEXT_PUBLIC_THAR_ACCOUNT_NAME}
                    </label>
                    <label className="block text-black text-sm font-bold mb-1">
                    {process.env.NEXT_PUBLIC_THAR_ACCOUNT_NO}
                    </label>
                    <label className="block text-black text-sm font-bold mb-1">
                    {process.env.NEXT_PUBLIC_THAR_ACCOUNT_IFSC}
                    </label>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="submit"
                    >
                    Submit
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}
