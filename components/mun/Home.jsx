import CountdownTimer from "../home/CountdownTimer";

export default function Home() {
  return (
    <div
      id="home"
      className="home min-h-screen w-full flex items-center justify-center"
    >
      <div className="bg-[#1D1C41] flex flex-col-reverse sm:flex-row gap-4 sm:gap-8 items-center p-8 py-16 sm:p-32 rounded-full ring-inset ring-8 ring-yellow-600">
        <div className="flex gap-4 sm:gap-4 flex-col items-center sm:items-start">
          <a href="#" className="p-8 py-4 bg-yellow-600 rounded-xl text-xl">
            Register
          </a>
          {/* <CountdownTimer /> */}
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src="/assets/images/mun/logo.png" alt="" className="w-48" />
          <h1 className="text-6xl sm:text-8xl underline underline-offset-8 font-medium">
            MUN RTU
          </h1>
          <p className="sm:text-2xl">The Delegates' Symposium</p>
        </div>
      </div>
    </div>
  );
}
