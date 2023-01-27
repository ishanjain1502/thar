import React from "react";

export default function Letter() {
  return (
    <section className="bg-white text-black py-16">
      <div className="sm:w-10/12 m-auto relative flex justify-center items-center py-6">
        <img
          src="/assets/images/mun/logo.png"
          alt=""
          className="w-12 sm:w-20 absolute left-0"
        />
        <h1 className="text-lg sm:text-4xl text-[#5C5C5C] border-b-2 border-b[#5C5C5C] w-max">
          Letter from Secretary-General
        </h1>
      </div>
      <div className="w-10/12 sm:w-6/12 m-auto flex flex-col gap-4 text-justify">
        <p className="font-bold ">
          Dear Delegates, respected Faculty Advisors, and the Secretariat,
        </p>
        <p className="">
          It is my distinct honor and pleasure to invite you to Rajasthan
          Technical University Model United Nations Conference set to occur from
          February 26th-28th, 2023. MUN challenges students to think outside the
          box, and come up with creative solutions while acquiring skills in
          public speaking, leadership, and teamwork. We look forward to opening
          our doors to a diversity of thoughts and constructive,
          thought-provoking discussions.
        </p>
        <p>
          This year’s conference will consist of five committees: The United
          Nations Security Council, The International Press, The Disarmament and
          International Security Committee, The All India Political Parties Meet
          and The Ministry of Magic to make things interesting. The conference
          will continue to put forward thrilling simulations which allow
          delegates to react with regard to real-life situations.
        </p>
        <p>
          We would like to extend our sincerest welcome to all participants of
          the first session of RTU Model United Nations 2023. We would also like
          to avail this opportunity to express our deepest appreciation to all
          delegates, chairs, and volunteers for their endeavor to attend and
          contribute to the simulation of the United Nations at Rajasthan
          Technical University. We are honored and privileged to work with you
          on the United Nations agenda.
        </p>
        <p>
          We also want to congratulate all of the delegates who have decided to
          come to this conference. Your interest and initiative to participate,
          and your devotion of time and energy to make this conference a success
          is appreciated. We are delighted and esteemed to be your hosts.
        </p>
        <p>
          We believe that the Delegates will jointly discharge the essential
          diplomatic responsibilities mandated to them by the Secretariat. Even
          though this is the first session of RTU Model United Nations, we
          assure all delegates and chairs that we shall put paramount efforts to
          ensure that the work is carried out adequately and that our endeavors
          meet with success.
        </p>
        <p>
          MUN-RTU is not only a conference that will benefit you on an academic
          level, considering your opportunity to broaden your knowledge and put
          it to use in engaging debates but it is also your chance to meet new
          people and create indelible memories. Do not miss out on such an
          experience and prepare yourself as you grab this amazing opportunity.
          I offer all of my best wishes to you and look forward to seeing you at
          RTU MUN 2023.
        </p>
        <div className="font-bold">
          <p>
            Warm Regards <br />
            Secretary-General <br />
            Pradhuman <br />
            MUN RTU
          </p>
        </div>
      </div>
    </section>
  );
}
