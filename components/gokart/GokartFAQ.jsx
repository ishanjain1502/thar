import React, { useEffect } from "react";

export default function GokartFAQ() {
  useEffect(() => {
    const accordionHeader = document.querySelectorAll(".accordion-header");
    accordionHeader.forEach((header) => {
      header.addEventListener("click", function () {
        console.log("clicked");
        const accordionContent =
          header.parentElement.querySelector(".accordion-content");
        let accordionMaxHeight = accordionContent.style.maxHeight;

        // Condition handling
        if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
          accordionContent.style.maxHeight = `${
            accordionContent.scrollHeight + 32
          }px`;
          header.querySelector(".fas").classList.remove("fa-plus");
          header.querySelector(".fas").classList.add("fa-minus");
        } else {
          accordionContent.style.maxHeight = `0px`;
          header.querySelector(".fas").classList.add("fa-plus");
          header.querySelector(".fas").classList.remove("fa-minus");
        }
      });
    });
  }, []);

  return (
    <div id="FAQ" className="grid place-items-center py-16">
      <div className="md:w-6/12 mx-auto rounded border ">
        <div className="bg-white/40  p-10 shadow-sm">
          <span className="text-4xl font-bold text-red-400">FAQs</span>
          <div className="h-1 w-full mx-auto border-b my-5"></div>

          <div className="transition hover:bg-black/20 ">
            {/* <!-- header --> */}
            <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <i className="fas fa-plus"></i>
              <h3>Do you provide transportation facility?</h3>
            </div>
            {/* <!-- Content --> */}
            <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p className="leading-6 font-light pl-9 text-justify">
                No, we do not provide any transportation facility from our side.
              </p>
            </div>
          </div>

          <div className="transition hover:bg-black/20 ">
            {/* <!-- header --> */}
            <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <i className="fas fa-plus"></i>
              <h3>Will the participants get certificates?</h3>
            </div>
            {/* <!-- Content --> */}
            <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p className="leading-6 font-light pl-9 text-justify">
                Yes, we will provide certificates to the participants.
              </p>
            </div>
          </div>

          <div className="transition hover:bg-black/20 ">
            {/* <!-- header --> */}
            <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <i className="fas fa-plus"></i>
              <h3>Is there any accommodation facility for the participants?</h3>
            </div>
            {/* <!-- Content --> */}
            <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p className="leading-6 font-light pl-9 text-justify">Yes.</p>
            </div>
          </div>

          <div className="transition hover:bg-black/20 ">
            {/* <!-- header --> */}
            <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <i className="fas fa-plus"></i>
              <h3>How many teams are allowed from one college?</h3>
            </div>
            {/* <!-- Content --> */}
            <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p className="leading-6 font-light pl-9 text-justify">
                Their is no restriction in the number of teams from same
                college. But one participant can only participate from single
                team.
              </p>
            </div>
          </div>

          <div className="transition hover:bg-black/20 ">
            {/* <!-- header --> */}
            <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <i className="fas fa-plus"></i>
              <h3>Is presence of faculty necessary?</h3>
            </div>
            {/* <!-- Content --> */}
            <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p className="leading-6 font-light pl-9 text-justify">
                Yes, it is compulsory for teams to accompany their faculty
                advisors.
              </p>
            </div>
          </div>

          <div className="transition hover:bg-black/20 ">
            {/* <!-- header --> */}
            <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <i className="fas fa-plus"></i>
              <h3>Where to find information about event schedule?</h3>
            </div>
            {/* <!-- Content --> */}
            <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p className="leading-6 font-light pl-9 text-justify">
                Event schedule would be provide at the time of event .
              </p>
            </div>
          </div>

          <div className="transition hover:bg-black/20 ">
            {/* <!-- header --> */}
            <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <i className="fas fa-plus"></i>
              <h3>Does TGKC conduct any placement drives for participants?</h3>
            </div>
            {/* <!-- Content --> */}
            <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p className="leading-6 font-light pl-9 text-justify">
                Yes participants got placed in TGKC season 1.
              </p>
            </div>
          </div>

          <div className="transition hover:bg-black/20 ">
            {/* <!-- header --> */}
            <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <i className="fas fa-plus"></i>
              <h3>
                Will fuel be provided at the venue in case of shortage of fuel?
              </h3>
            </div>
            {/* <!-- Content --> */}
            <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p className="leading-6 font-light pl-9 text-justify">
                Any type of fuel will not be provided to the participants at the
                venue, therefore it is advised to carry sufficient amount of
                fuel with them as per requirement .
              </p>
            </div>
          </div>

          <div className="transition hover:bg-black/20 ">
            {/* <!-- header --> */}
            <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <i className="fas fa-plus"></i>
              <h3>Can team have members of different colleges ?</h3>
            </div>
            {/* <!-- Content --> */}
            <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p className="leading-6 font-light pl-9 text-justify">
                No, students from different colleges cannot form a team .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
