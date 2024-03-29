import axios from "axios";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import { NavBar } from "../../components/globals/NavBar";
import Footer from "../../components/globals/Footer";

import qrcode from "../../public/assets/images/qrcodes/qr500.png";

export default function Payment() {
  const [trxnId, setTrxnId] = useState("");
  const [userData, setUserData] = useState("");
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // router.push("/#participant");
      signIn("google", { callbackUrl: "/participant/dashboard" })
    },
  });

  // useEffect(() => {
  //   if (status === "authenticated") {
  //     axios.get("/api/v1/tharUser/getUser").then((res) => {
  //       if (res.data.data == null) {
  //         // alert("Error: user data not found");
  //         router.push("/participant/dashboard");
  //       } else {
  //         // User exists
  //         setUserData(res.data.data);
  //       }
  //     });
  //   }
  // }, [status]); 
   
    useEffect(()=>{
      router.replace("/404");
    },[])

  function submitTrxn(e) {
    e.preventDefault();
    // if(!trxnId) return;
    if (confirm("Press OK to confirm transaction.")) {
      // console.log(`Trxn ID: ${trxnId}`)
      axios
        .post("/api/v1/webhook/paymentInitial", {
          tharId: userData.userTharID,
          amount: "500",
          transactionId: trxnId,
        })
        .then(function (response) {
          // redirect to event registration page
          const eventID = localStorage.getItem("eventID");
          localStorage.removeItem("eventID");

          if (response.status === 200) {
            if (eventID) {
              router.push(`/events/register?eventID=${eventID}`);
            } else {
              router.push("/participant/dashboard");
            }
          } else {
            alert(response.body.message);
          }
        })
        .catch(function (error) {
          if (error.response.status === 403) {
            alert("You can't make more than one payment");
            router.push("/participant/dashboard");
          }
          console.log(error);
        });
    } else {
      console.log("Confirmation cancelled");
    }
  }
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Buy Credits - Thar 2023</title>
      </Head>
      <main className="flex flex-col items-center">
        <NavBar />
        <h1 className="pt-32 lg:pt-48 pb-6 text-center font-spaceboards text-yellow-300 text-3xl sm:text-5xl md:text-7xl text-stroke text-stroke-color break-all">
          Buy Credits
        </h1>
        <div className="grid gap-4 lg:gap-8 lg:grid-cols-2 md:max-w-4xl p-10 xl:max-w-5xl w-full mt-4 rounded-xl">
          <div className="flex flex-col gap-4 items-center p-6 lg:px-10 max-w-5xl rounded-xl bg-black/80 justify-evenly">
            <p className="text-lg font-spaceboards text-yellow-300 mt-2 mb-2">
              How-to
            </p>
            <ol>
              <li>1. Scan the QR Code and make a payment of ₹500/-</li>
              <li>
                2. Copy the transaction ID from UPI App and paste it in the
                input box.
              </li>
              <li>3. Submit the transaction ID.</li>
            </ol>
            <p className="text-lg font-spaceboards text-yellow-300 mt-2 mb-2">
              Rules
            </p>
            <ol>
              <li>
                1. Please pay exactly <b>₹500/-</b> only.
              </li>
              <li>2. This is a non-refundable transaction.</li>
              <li>3. You will get 3 credits for ₹500/-.</li>
              <li>
                4. If you fail to pay exactly ₹500/- then your transaction will
                not be considered. You will have to re-register and pay the
                correct amount.
              </li>
              <br />
              <li className="text-yellow-300">
                Note: Avail early bird offer till 15th february 2023 to get one
                extra credit 🎉🎉
              </li>
            </ol>
          </div>
          <div className="flex flex-col gap-4 text-center items-center p-6 lg:px-10 max-w-5xl rounded-xl bg-black/80 justify-evenly">
            <div className="h-40 w-40 object-contain rounded overflow-hidden relative">
              <Image src={qrcode} fill quality={75} alt="QR Code" />
            </div>
            <p className="text-sm text-gray-300">
              Scan the QR Code above and pay{" "}
              <span className="text-base font-bold text-yellow-300">₹500</span>{" "}
              using any UPI Payments App
            </p>
            <p className="text-yellow-300">
              Note: UD RTU students don&apos;t have to pay, you will get credits
              later
            </p>
            <form className="flex flex-col" onSubmit={submitTrxn}>
              <input
                autoComplete="off"
                placeholder="Paste transaction ID here"
                value={trxnId}
                onChange={(e) => {
                  setTrxnId(e.target.value);
                }}
                minLength={12}
                required
                className="border-2 rounded w-full py-2 px-2 text-sm bg-black"
              />
              <br />
              <button
                className="px-8 py-3 ring-yellow-300 ring text-yellow-300 bg-black/30 backdrop-blur-3xl font-semibold hover:bg-yellow-300 hover:text-yellow-900 hover:rounded-md transition-all ease-in-out w-max self-center *animate-bounce*"
                title="Submit transaction"
                type="submit"
              >
                Submit transaction ID
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
