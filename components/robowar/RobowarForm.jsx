import { useState } from "react";
import {MdClose,MdAdd, MdOutlineRemove, MdContentCopy} from "react-icons/md"
import { useSession } from "next-auth/react"
import Spinner from "../../utility/frontend/spinner";



export default function RobowarForm({setBtnClicked}){

    const {data:session}= useSession();

    const [input, setInput] = useState({
        teamName:'',
        captainName:'',
        captainPhoneNo:'',
        botName:'',
        category:'15KG',
        address:'',
        college:'',
        additionalMembers:[],
        payment:{
            txnId:''
        }
    });
    // console.log('input',input);
    const [isSubmitting,setIsSubmitting]=useState(false);

    const handleChange=(e,index)=>{
        const {id,value}=e.target;
        const dataAttri = e.target.getAttribute("data-property");

        const values ={...input};

        if(dataAttri === 'additionalMembers'){
            values[dataAttri][index][id]=value;
        }
        else if(id === 'payment'){
            values[id]={
                txnId:value
            }
        }
        else{
            values[id]=value;
        }
        setInput(values);
    }

    const handleAdd=()=>{
        const values ={...input};
        values.additionalMembers.push({name:'',email:'',phoneNo:''});
        setInput(values);
    }

    const handleRemove=()=>{
        const values ={...input};
        values.additionalMembers.pop();
        setInput(values);
    }

    const copyPaymentDetails= async(value)=>{

        if(!navigator.clipboard){
            return;
        }
        try {
            await navigator.clipboard.writeText(value);
            alert('Copied to clipboard!');
          } catch (err) {
            console.error('Failed to copy!', err)
          }
        
    }

    const handleFormSubmit=async(e)=>{
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const option = {
                method: 'POST',
                headers: {
                  Accept: 'application.json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(input),
              }
            let res= await fetch('/api/v1/robowar/register',option);
            res = await res.json();
            if(!res.error){
                alert('Successfully Registered! You will receive a confirmation email shortly');
                setBtnClicked(false);
                return;
            }
            alert(res.message);
        } catch (error) {
            alert(error.message)
        }finally{
            setIsSubmitting(false);
        }

    }
    
    return (
       <div className="fixed top-0 left-0 w-full h-screen z-100 p-6 px-6  overflow-scroll backdrop-blur-xl bg-transparent">
            <div className="w-95Percent mx-auto  bg-black border-2 border-white p-6 px-8 sm:w-1/2 rounded-xl">  
                <div className="float-right">
                    <MdClose style={{fontSize:'1.5rem',cursor:'pointer'}} onClick={()=>setBtnClicked(false)}/>
                </div>
                <form onSubmit={handleFormSubmit} className="py-8 text-base leading-6 space-y-4 text-gray-400 sm:text-lg sm:leading-7">
                    <div className="relative">
                        <input
                        id="teamName"
                        type="text"
                        value={input.teamName}
                        autoComplete="off"
                        minLength={3}
                        maxLength={100}
                        className="peer placeholder-transparent h-10 mt-2 w-full border-b-2 bg-transparent border-gray-300 text-gray-50 font-semibold text-lg focus:outline-none focus:borer-rose-600"
                        placeholder="Team Name"
                        onChange={handleChange}
                        />
                        <label
                        htmlFor="teamName"
                        className="absolute left-0 -top-3.5 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
                        >
                        Team Name
                        </label>
                    </div>
                    <div className="relative">
                        <input
                        id="captainName"
                        type="text"
                        value={input.captainName}
                        autoComplete="off"
                        minLength={3}
                        maxLength={100}
                        className="peer placeholder-transparent h-10 mt-2 w-full border-b-2 bg-transparent border-gray-300 text-gray-50 font-semibold text-lg focus:outline-none focus:borer-rose-600"
                        placeholder="Captain Name"
                        onChange={handleChange}
                        />
                        <label
                        htmlFor="captainName"
                        className="absolute left-0 -top-3.5 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
                        >
                        Captain Name
                        </label>
                    </div>
                    <div className="relative">
                        <input
                        id="captainEmail"
                        type="text"
                        value={session?.user?.email}
                        readOnly
                        className="peer placeholder-transparent h-10 mt-2 w-full border-b-2 bg-transparent border-gray-300 text-gray-50 font-semibold text-lg focus:outline-none focus:borer-rose-600"
                        placeholder="Captain Email"
                        />
                        <label
                        htmlFor="captainEmail"
                        className="absolute left-0 -top-3.5 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
                        >
                        Captain Email
                        </label>
                    </div>
                    <div className="relative">
                        <input
                        id="captainPhoneNo"
                        type="text"
                        value={input.captainPhoneNo}
                        autoComplete="off"
                        minLength={3}
                        maxLength={100}
                        className="peer placeholder-transparent h-10 mt-2 w-full border-b-2 bg-transparent border-gray-300 text-gray-50 font-semibold text-lg focus:outline-none focus:borer-rose-600"
                        placeholder="Captain PhoneNo"
                        onChange={handleChange}
                        />
                        <label
                        htmlFor="captainPhoneNo"
                        className="absolute left-0 -top-3.5 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
                        >
                        Captain PhoneNo
                        </label>
                    </div>
                    <div className="relative">
                        <input
                        id="botName"
                        type="text"
                        value={input.botName}
                        autoComplete="off"
                        minLength={3}
                        maxLength={100}
                        className="peer placeholder-transparent h-10 mt-2 w-full border-b-2 bg-transparent border-gray-300 text-gray-50 font-semibold text-lg focus:outline-none focus:borer-rose-600"
                        placeholder="Boat Name"
                        onChange={handleChange}
                        />
                        <label
                        htmlFor="botName"
                        className="absolute left-0 -top-3.5 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
                        >
                        Bot Name
                        </label>
                    </div>
                    <div>
                        <label className="text-gray-400 text-base">Category</label>
                        <select
                            className="transition-all w-full text-gray-50 bg-transparent py-2 text-base rounded-none border-b-2 placeholder:text-slate-400 font-semibold border-slate-300 focus:border-slate-300 outline-none"
                            placeholder="Choose Category"
                            value={input.category}
                            onChange={handleChange}
                            id="category"
                            >
                            <option className="bg-black text-gray-50" value="15KG">
                            15KG
                            </option>
                            <option className="bg-black text-gray-50" value="30KG">
                            30KG
                            </option>
                        </select>
                    </div>
                   <div className="relative">
                        <input
                        id="address"
                        type="text"
                        value={input.address}
                        autoComplete="off"
                        minLength={3}
                        maxLength={100}
                        className="peer placeholder-transparent h-10 mt-2 w-full border-b-2 bg-transparent border-gray-300 text-gray-50 font-semibold text-lg focus:outline-none focus:borer-rose-600"
                        placeholder="Address"
                        onChange={handleChange}
                        />
                        <label
                        htmlFor="address"
                        className="absolute left-0 -top-3.5 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
                        >
                        Address
                        </label>
                    </div>
                    <div className="relative">
                        <input
                        id="college"
                        type="text"
                        value={input.college}
                        autoComplete="off"
                        maxLength={100}
                        className="peer placeholder-transparent h-10 mt-2 w-full border-b-2 bg-transparent border-gray-300 text-gray-50 font-semibold text-lg focus:outline-none focus:borer-rose-600"
                        placeholder="College"
                        onChange={handleChange}
                        />
                        <label
                        htmlFor="college"
                        className="absolute left-0 -top-3.5 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
                        >
                        College(Optional)
                        </label>
                    </div>
                    <div>
                        <label>Additional Members</label>
                        <div className="space-y-4">
                            {
                                input.additionalMembers.map((ele,index)=>{

                                    return (
                                        <div key={index} className="space-y-4">
                                            <div className="relative">
                                                <input
                                                id="name"
                                                type="text"
                                                value={ele.name}
                                                autoComplete="off"
                                                minLength={3}
                                                maxLength={100}
                                                className="peer placeholder-transparent h-10 mt-2 w-full border-b-2 bg-transparent border-gray-300 text-gray-50 font-semibold text-lg focus:outline-none focus:borer-rose-600"
                                                placeholder="Name"
                                                data-property="additionalMembers"
                                                onChange={(e)=>handleChange(e,index)}
                                                />
                                                <label
                                                htmlFor="name"
                                                className="absolute left-0 -top-3.5 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
                                                >
                                                Name
                                                </label>
                                            </div>
                                            <div className="relative">
                                                <input
                                                id="email"
                                                type="text"
                                                value={ele.email}
                                                autoComplete="off"
                                                minLength={3}
                                                maxLength={100}
                                                className="peer placeholder-transparent h-10 mt-2 w-full border-b-2 bg-transparent border-gray-300 text-gray-50 font-semibold text-lg focus:outline-none focus:borer-rose-600"
                                                placeholder="Email"
                                                data-property="additionalMembers"
                                                onChange={(e)=>handleChange(e,index)}
                                                />
                                                <label
                                                htmlFor="email"
                                                className="absolute left-0 -top-3.5 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
                                                >
                                                Email
                                                </label>
                                            </div>
                                            <div className="relative">
                                                <input
                                                id="phoneNo"
                                                type="text"
                                                value={ele.phoneNo}
                                                autoComplete="off"
                                                minLength={3}
                                                maxLength={100}
                                                className="peer placeholder-transparent h-10 mt-2 w-full border-b-2 bg-transparent border-gray-300 text-gray-50 font-semibold text-lg focus:outline-none focus:borer-rose-600"
                                                placeholder="PhoneNo"
                                                data-property="additionalMembers"
                                                onChange={(e)=>handleChange(e,index)}
                                                />
                                                <label
                                                htmlFor="phoneNo"
                                                className="absolute left-0 -top-3.5 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
                                                >
                                                PhoneNo
                                                </label>
                                            </div>
                                       </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button type="button" className="bg-green-700 py-2 px-6 rounded-sm" onClick={handleAdd}>
                            <MdAdd style={{color:'white',fontSize:'1rem'}}/>
                        </button>
                        <button type="button" className="bg-red-400 py-2 px-6 rounded-sm" onClick={handleRemove}>
                            <MdOutlineRemove style={{color:'white',fontSize:'1rem'}}/>
                        </button>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-green-500 text-xl">Payment</h4>
                        <div>
                            <h5 className="text-red-400 text-base">Amount</h5>
                            <span className="text-white">&#8377;1000</span>                            
                        </div>
                        {/* <p className="text-red-400 text-sm">Note: Currently we are not accepting payments through debit or credit card so please make the payment through the given account details below. </p> */}
                        <div className="text-sm space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <div>
                                        <label className="text-red-400">Account Holder Name</label>
                                        <p className="text-gray-50 text-sm">{process.env.NEXT_PUBLIC_THAR_ACCOUNT_NAME}</p>
                                    </div>
                                    <button type="button" onClick={()=>copyPaymentDetails(process.env.NEXT_PUBLIC_THAR_ACCOUNT_NAME)}>
                                        <MdContentCopy style={{color:'white'}}/>
                                    </button>
                                </div>
                                <div className="flex justify-between">
                                    <div>
                                        <label className="text-red-400">Account No</label>
                                        <p className="text-gray-50 text-sm">{process.env.NEXT_PUBLIC_THAR_ACCOUNT_NO}</p>
                                    </div>
                                    <button type="button" onClick={()=>copyPaymentDetails(process.env.NEXT_PUBLIC_THAR_ACCOUNT_NO)}>
                                        <MdContentCopy style={{color:'white'}}/>
                                    </button>
                                </div>
                                <div className="flex justify-between">
                                    <div>
                                        <label className="text-red-400">IFSC Code</label>
                                        <p className="text-gray-50 text-sm">{process.env.NEXT_PUBLIC_THAR_ACCOUNT_IFSC}</p>
                                    </div>
                                    <button type="button" onClick={()=>copyPaymentDetails(process.env.NEXT_PUBLIC_THAR_ACCOUNT_IFSC)}>
                                        <MdContentCopy style={{color:'white'}}/>
                                    </button>
                                </div>
                            </div>
                            <p className="text-sm text-gray-300">Note: Currently we are accepting payment via bank transfers only.</p>
                        </div>
                    </div>
                   <div className="space-y-4">
                        <p className="text-sm text-gray-300">After the payment, fill your transaction id here, otherwise we won&#39;t be able to verify your payment.</p>
                        <div className="relative">
                            <input
                            id="payment"
                            type="text"
                            value={input.payment.txnId}
                            autoComplete="off"
                            minLength={3}
                            maxLength={100}
                            className="peer placeholder-transparent h-10 mt-2 w-full border-b-2 bg-transparent border-gray-300 text-gray-50 font-semibold text-lg focus:outline-none focus:borer-rose-600"
                            placeholder="Transaction Id"
                            onChange={handleChange}
                            />
                            <label
                            htmlFor="txnId"
                            className="absolute left-0 -top-3.5 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
                            >
                            Transaction Id
                            </label>
                        </div>
                   </div>
                    <div className="flex flex-row-reverse">
                        <button className="flex justify-center items-center w-1/3 bg-yellow-400 text-gray-900 px-4 py-2 rounded-sm font-semibold">
                            {
                                isSubmitting ? <Spinner/> : 'Submit'
                            }
                        </button>
                    </div>
                </form>          
            </div>
       </div>
    )
}