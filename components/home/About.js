import React from "react";

export default function About() {
  return (
    <div id="about" className="flex justify-center mb-10">
      {/* Flex Break Point - lg */}
      <div className="w-11/12 sm:w-10/12 md:w-8/12 xl:w-8/12 border-4 border-yellow-300 flex flex-col lg:flex-row">
        <div className=" bg-yellow-300/40 backdrop-blur-xl w-full lg:w-3/12 flex h-full justify-center items-center lg:border-r-4 border-b-4 lg:border-b-0 border-yellow-300">
          <span className="lg:-rotate-90 h-max text-6xl font-spaceboards my-4 pt-3">
            About
          </span>
        </div>
        <article
          lang="en"
          className="w-full lg:w-9/12 p-8 text-xl md: bg-black/20 backdrop-blur-2xl hyphens"
        >
          Welcome to the symposium of innovation. Sustaining the legacy of past
          4 editions. RTU is back with an assembly of exceptional minds THAR
          2023.
          <br />
          Rajasthan&apos;s biggest techno management festival is a celebration
          for intellectuals across the country. Providing a platform for
          thinkers and doers alike, it&apos;s a fusion of monumental technology,
          enticing arts, inspirational forums and much more.
          <br />
          THAR 2023 offers a 3 day voyage containing a plethora of competitions,
          unheard stories and surfiet of wonder. It&apos;s an otherworldly
          experience that will leave it&apos;s partakers with an unquenchable
          thirst for technological enlightenment.
        </article>
      </div>
    </div>
  );
}
