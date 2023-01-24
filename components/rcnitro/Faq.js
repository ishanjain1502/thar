import React, { useEffect } from "react";

export default function Faq() {
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
          header.parentElement.classList.add("bg-indigo-50");
        } else {
          accordionContent.style.maxHeight = `0px`;
          header.querySelector(".fas").classList.add("fa-plus");
          header.querySelector(".fas").classList.remove("fa-minus");
          header.parentElement.classList.remove("bg-indigo-50");
        }
      });
    });
  }, []);

  return (
    <div id="aboutca" className="flex justify-center my-12 md:my-14 lg:my-16">
      {/* Flex Break Point - lg */}
      <div className="w-11/12 sm:w-10/12 md:w-8/12 xl:w-8/12 border-4 border-yellow-300 flex flex-col lg:flex-row">
        <div className=" bg-yellow-300/20 backdrop-blur-xl w-full lg:w-3/12 flex h-full justify-center items-center lg:border-r-4 border-b-4 lg:border-b-0 border-yellow-300">
          <span className="lg:-rotate-90 h-max text-6xl font-spaceboards my-4 pt-3">
            FAQ
          </span>
        </div>
        <article
          lang="en"
          className="w-full lg:w-9/12 p-8 text-xl md: bg-black/20 backdrop-blur-2xl break-words"
        >
          {[
            [
              " Why should I participate in Full Throttle ?",
              "If you're wondering what a campus ambassador program is, it's an opportunity to be a representative of the Rajasthan's prestigious university, RTU. Act as a link between our institute and yours, and be the face of your college amongst the amazing campus ambassadors across the nation. This is a chance for you to get involved in a network committed towards flourishing and boosting the learning curve of your student career.",
            ],
            [
              "How many people can be there in a team?",
              "One Team can have maximum of 8 members.",
            ],
            [
              "Can team have members of different colleges ?",
              "Yes, students from different colleges can from a team . ",
            ],
            [
              "Will fuel be provided at the venue in case of shortage of fuel?",
              "Any type of fuel will not be provided to the participants at the venue, therefore it is advised to carry sufficient amount of fuel with them as per requirement .",
            ],
            [
              "Is any modification is allowed in the buggy after portfolio submission?",
              "NO, modification in the buggy is allowed after the portfolio submission and technical clearance ,if any team is found disobeying the rule shall be strictly disqualified from the event. ",
            ],
            [
              "Are all the team members of particular team permitted on the track for fuel filling or any breakdown?",
              "Besides the driver and captain only two members from each team are allowed near the track and coordinate with the pit crew for fuel refilling .",
            ],
            [
              "Hand touches are allowed by the team members during the laps?",
              "Hand touches during the laps by the team member is strictly prohibited ,only pit crew is allowed to do so when required.",
            ],
          ].map((faq, index) => (
            <div key={index} className="mt-4">
              <div className="text-lg  lg:text-xl xl:text-2xl font-semibold text-yellow-50">
                {faq[0]}
              </div>
              <p className="text-white/80 text-base lg:text-lg">{faq[1]}</p>
            </div>
          ))}
        </article>
      </div>
    </div>
  );
}
