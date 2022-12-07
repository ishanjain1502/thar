import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row p-4 md:p-8 lg:p-12 xl:px-24  md:pt-24 lg:pt-28 xl:pt-32 items-center">
      <div className="w-full md:w-[40%] mt-8 md:mt-0 p-4 md:m-6 lg:p-8">
        <img
          src="/assets/images/ca/ca.svg"
          className="transition-all w-full sm:w-[90%] md:w-full mx-auto border-none bg-yellow-300/10 hover:scale-105 hover:skew-x-3 hover:-skew-y-3"
          style={{ borderRadius: "30% 70% 53% 47% / 30% 30% 70% 70%" }}
          alt="header_img"
        />
      </div>
      <div className="w-full md:w-[60%] text-slate-50">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-4  font-semibold">
          Campus Ambassadors
        </div>
        <div className="text-base sm:text-lg lg:text-xl text-slate-300">
          If you&apos;re wondering what a campus ambassador program is,
          it&apos;s an opportunity to be a representative of the
          Rajasthan&apos;s prestigious university, RTU. <br /> Act as a link
          between our institute and yours, and be the face of your college
          amongst the amazing campus ambassadors across the nation. This is a
          chance for you to get involved in a network committed towards
          flourishing and boosting the learning curve of your student career.
        </div>
      </div>
    </div>
  );
}
