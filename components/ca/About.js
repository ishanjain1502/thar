import React from "react";

export default function About() {
  return (
    <div id="aboutca" className="flex justify-center my-12 md:my-14 lg:my-16">
      {/* Flex Break Point - lg */}
      <div className="w-11/12 sm:w-10/12 md:w-8/12 xl:w-8/12 border-4 border-yellow-300 flex flex-col lg:flex-row">
        <div className=" bg-yellow-300/20 backdrop-blur-xl w-full lg:w-3/12 flex h-full justify-center items-center lg:border-r-4 border-b-4 lg:border-b-0 border-yellow-300">
          <span className="lg:-rotate-90 h-max text-6xl font-spaceboards my-4 pt-3">
            About
          </span>
        </div>
        <article
          lang="en"
          className="w-full lg:w-9/12 p-8 text-xl md: bg-black/20 backdrop-blur-2xl break-words"
        >
          <div className="text-lg md:text-xl lg:text2xl xl:text-3xl font-semibold">
            What is Campus Ambassadors Programme?
          </div>
          <p className="text-white/80 mt-2">
            If you&apos;re wondering what a campus ambassador program is,
            it&apos;s an opportunity to be a representative of the
            Rajasthan&apos;s prestigious university, RTU. Act as a link between
            our institute and yours, and be the face of your college amongst the
            amazing campus ambassadors across the nation. This is a chance for
            you to get involved in a network committed towards flourishing and
            boosting the learning curve of your student career.
          </p>
          <div className="text-lg md:text-xl lg:text2xl xl:text-3xl font-semibold mt-4">
            Who can be a Campus Ambassador?
          </div>
          <p className="text-white/80 mt-2">
            This programme welcomes all, irrespective of your degree, or where
            you come from. Whether you are an Engineer or a business graduate,
            fresher or final year student, consider yourself eligible to apply
            for this amazing programme. All you need is an ardent desire to
            enhance your knowledge.
          </p>
          <div className="text-lg md:text-xl lg:text2xl xl:text-3xl font-semibold mt-4">
            Why should you become one?
          </div>
          <p className="text-white/80 mt-2">
            Not to fret, this programme comes with its own set of benefits. As a
            campus ambassador, you&apos;ll be a part of an ever-growing
            community of intellectuals. You will also have a chance for a first
            hand experience of the fabulous events conducted by the university.
          </p>
        </article>
      </div>
    </div>
  );
}
