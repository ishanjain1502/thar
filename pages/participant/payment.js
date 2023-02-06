import axios from "axios";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { NavBar } from "../../components/globals/NavBar";
import Footer from "../../components/globals/Footer";

import qrcode from '../../public/assets/images/qrcode.png'

export default function Payment() {
  const [trxnId, setTrxnId] = useState("");
  const [tharID, setTharID] = useState("");
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/#participant");
    },
  });

  useEffect(() => {
    if (status === "authenticated") {
      axios.get("/api/v1/tharUser/getUser").then((res) => {
        if (res.data.data == null) {
          alert("Error: user data not found");
        } else {
          // User exists
          setTharID(res.data.data.userTharID);
        }
      });
    }
  }, [status]);

  function submitTrxn() {
    if (confirm("Press OK to confirm transaction.")) {
      // console.log(`Trxn ID: ${trxnId}`)
      axios
        .post("/api/v1/webhook/paymentInitial", {
          tharID: tharID,
          amount: 550,
          transactionId: trxnId
        })
        .then(function (response) {
          // redirect to event registration page
          const prevURL = localStorage.getItem('prevURL');
          localStorage.removeItem('prevUrRL');

          if (response.status === 200) {
            if (prevURL) {
              router.push(prevURL + '/register');
            } else {
              router.push("/participant/dashboard");
            }
          } else {
            alert(response.body.message)
          }
          
        });
    } else {
      console.log("Confirmation cancelled")
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
                <li>
                  1. Scan the QR Code and make a payment of ₹550/-
                </li>
                <li>
                  2. Copy the transaction ID from UPI App and paste it in the input box.
                </li>
                <li>
                  3. Submit the transaction ID.
                </li>
              </ol>
              <p className="text-lg font-spaceboards text-yellow-300 mt-2 mb-2">
                Rules
              </p>
              <ol>
                <li>
                  1. Please pay exactly <b>₹550/-</b> only.
                </li>
                <li>
                  2. This is a non-refundable transaction.
                </li>
                <li>
                  3. If you fail to pay exactly ₹550/- then your transaction will not be considered. You will have to re-register and pay the correct amount.
                </li>
              </ol>
            </div>
            <div className="flex flex-col gap-4 text-center items-center p-6 lg:px-10 max-w-5xl rounded-xl bg-black/80 justify-evenly">
              <div className="h-40 w-40 object-contain rounded overflow-hidden relative">
                <Image
                  src={qrcode}
                  fill
                  quality={75}
                  alt="QR Code"
                />
              </div>
              <p className="text-sm text-gray-300">Scan the QR Code above and pay <span className="text-base font-bold text-yellow-300">₹550</span> using any UPI Payments App</p>
              <input
                autoComplete="off"
                className="border-2 rounded w-full py-2 px-2 text-sm bg-black"
                placeholder="Paste transaction ID here"
                onChange={(e) => { setTrxnId(e.target.value) }}
              />
              <br />
              <button
                className="px-8 py-3 ring-yellow-300 ring text-yellow-300 bg-black/30 backdrop-blur-3xl font-semibold hover:bg-yellow-300 hover:text-yellow-900 hover:rounded-md transition-all ease-in-out w-max self-center *animate-bounce*"
                title="Register Now!"
                onClick={submitTrxn}
              >
                Submit transaction ID
              </button>
            </div>
          </div>
          <Footer />
        </main>
      </>
    );
  }