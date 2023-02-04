import React from "react";

export default function TeamCard(props) {
  return (
    <div className="p-4 lg:w-1/5 md:w-1/2 bg-slate-700">
      <div className="h-full flex flex-col items-center text-center">
        <img
          alt="team"
          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
          //   src={`/assets/images/mun/${props.name}.jpg`}
          src="https://dummyimage.com/201x201"
        />
        <div className="w-full">
          <h2 className="title-font text-lg text-white font-bold">
            {props.name}
          </h2>
          <h3 className="text-white font-light mb-3">{props.role}</h3>
        </div>
      </div>
    </div>
  );
}
