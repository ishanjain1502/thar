import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-[#1D1C41] py-20 ">
      <div className="md:w-10/12 m-auto flex flex-row justify-center items-center md:flex-row md:gap-0 gap-4">
        <div className="w-10/12 md:w-8/12 flex flex-col gap-4">
          <h1 className="font-bold text-3xl">What is MUN-RTU?</h1>
          <div className="text-justify leading-relaxed">
            <p>
              We are an atypical league of students from Rajasthan Technical
              University, Kota, a pioneer in Engineering, Technology, Research,
              and Development who strive to establish a platform for
              comprehensive debates and discussions with the flame of
              educational rigor. We envision conducting MUN-RTU with the spirit
              the drafters of the United Nations charter in June of 1945
              contemplated, which was to establish an organization that would
              transcend international boundaries and serve as a forum for
              cooperation and as a unifying force on the global stage.
            </p>
            <p>
              This is the genesis of MUN RTU on the national scale. Before this,
              the team conducted MUNs on the intra-university level. This year
              it is being conducted as a flagship event under ‘THAR’ - the
              techno-management fest of RTU Kota.
            </p>
            <p>
              RTU-MUN strives to ensure both breadth and depth in our committee
              offerings. We hope that all delegates can find a topic that they
              are passionate about. Our team works tirelessly both before and
              throughout the conference to make debates as realistic as possible
              so that our delegates get a sense of the complexities of
              real-world international negotiation. And, as with the real United
              Nations, we strive to emphasize cooperation and compromise rather
              than the supremacy of any one country’s position. In this way,
              each delegate gets a chance to learn about not only current
              international affairs and a particular nation’s policies, but also
              how to keep to that position while working with tens or hundreds
              of other delegates in committee.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mt-8 p-4">
        <Image
          src={"/assets/images/mun/poster.png"}
          height={512}
          width={320}
          quality={80}
          alt=""
          className="flex-grow-0"
        />
      </div>
    </section>
  );
}
