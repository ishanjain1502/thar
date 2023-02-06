import React from "react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import {MdClose , MdAdd,  MdOutlineRemove} from "react-icons/md"
import Spinner from "../../utility/frontend/spinner";

export default function RcNitroForm({ setBtnClicked }) {
  const { data: session, status } = useSession();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    teamName: '',
    teamLeaderName: '',
    teamLeaderPhone: '',
    address: '',
    college: '',
    additionalMembers:[],
    payment:{
        txnId:'',
    }
  });

  const addField = (e) => {
    e.preventDefault();
    const values ={...formData};
    values.additionalMembers.push({name:'',email:'',phoneNo:''});
    setFormData(values);
  };

  const removeLastField = (e) => {
    e.preventDefault();
    let temp = {...formData};
    temp.additionalMembers.pop()
    setFormData(temp)
  };

  const handleChange = (e, index) => {
    const { id, value } = e.target;
    const values = {...formData};
    const dataAttri = e.target.getAttribute("data-property");

    if(id === 'payment'){
        values[id] = {
            txnId: value
        }
    }else if(dataAttri === 'additionalMembers'){
        values[dataAttri][index][id]=value;
    }

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
        body: JSON.stringify(formData),
      };
      let res = await fetch("/api/v1/rcnitro/register", option);
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
        <div className="flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none h-32">
        <div className="relative w-full md:w-9/12 lg:w-9/12 my-6 mx-auto z-50">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-0 z-50">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t z-50">
                <h3 className="text-3xl font=semibold">General Info</h3>
                <div className="float-right" >
                    <MdClose style={{fontSize:'1.5rem',cursor:'pointer'}} onClick={()=>setBtnClicked(false)}/>
                </div>
            </div>
            <div className="relative p-6 flex-auto">
                <form
                onSubmit={handleFormSubmit}
                className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full space-y-2"
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
                Team Leader Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    value={formData.teamLeaderName}
                    onChange={(e) => {
                    setFormData({ ...formData, teamLeaderName: e.target.value });
                    }}
                />
                <label className="block text-black text-sm font-bold mb-1">
                Team Phone no.
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    value={formData.teamLeaderPhone}
                    onChange={(e) => {
                    setFormData({ ...formData, teamLeaderPhone: e.target.value });
                    }}
                />
                <label className="block text-black text-sm font-bold mb-1">
                    Team Leader Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    value={session.user.email}
                    disabled
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
                    College (optional)
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    value={formData.college}
                    onChange={(e) => {
                    setFormData({ ...formData, college: e.target.value });
                    }}
                />
                <label className="block text-black text-sm font-bold mb-1">
                    Transaction ID
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    // value={}
                    id="payment"
                    value={formData.payment.txnId}
                    placeholder="Transaction Id"
                    onChange={handleChange}
                />
                <div>
                    {Object.entries(formData.additionalMembers).map((val, key) => {
                        console.log(key);
                    return (
                        <div
                        key={key}
                        className="space-y-2"
                        >
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
                            id="name"
                            className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                            data-property="additionalMembers"
                            value={val.name}
                            onChange={(e)=>handleChange(e,key)}
                        />

                        <label className="block text-black text-sm font-bold mb-1">
                            Phone No.
                        </label>
                        <input
                            id="phoneNo"
                            className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                            data-property="additionalMembers"
                            value={val.phoneNo}
                            onChange={(e)=>handleChange(e,key)}
                        />

                        <label className="block text-black text-sm font-bold mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                            data-property="additionalMembers"
                            value={val.email}
                            onChange={(e)=>handleChange(e,key)}
                        />
                        <br/>
                        <br/><br/>
                        </div>
                    );
                    })}
                </div>
                <br/>
                <div className="text-black" >Additional Members</div>   
                {}
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
                            <h5 className="text-red-400 text-base">Amount</h5>
                            <span className="text-black">&#8377;1000</span>                            
                        </div>
                        <div>
                        <p className="text-sm text-black">Note: Currently we are accepting payment via bank transfers only.
                            </p>
                            <p className="text-sm text-black">After the payment, fill your transaction id here, otherwise we won&#39;t be able to verify your payment.</p>
                            </div>
                <div>
                    {/* Payment details */}
                    <br />
                    <label className="block text-black text-sm font-bold mb-1 underline underline-offset-4  ">
                        Account Holder Name
                       
                    </label> <p className="text-black text-sm">{process.env.NEXT_PUBLIC_THAR_ACCOUNT_NAME}</p>
                    <br/>
                    <label className="block text-black text-sm font-bold mb-1  underline underline-offset-4">
                        Account Number
                        
                    </label><p className="text-black text-sm">{process.env.NEXT_PUBLIC_THAR_ACCOUNT_NO}</p>
                    <br/>
                    <label className="block text-black text-sm font-bold mb-1  underline underline-offset-4">
                        IFSC Code
                        
                    </label><p className="text-black text-sm">{process.env.NEXT_PUBLIC_THAR_ACCOUNT_IFSC}</p>
                </div>

                <div className="flex flex-row-reverse py-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                    className="w-1/2 sm:w-1/4 flex justify-center items-center text-gray-900 bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    
                    >
                    {
                                isSubmitting ? <Spinner/> : 'Submit'
                            }
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
