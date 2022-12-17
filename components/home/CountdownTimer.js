import React from "react";
import Countdown from "react-countdown";

export default function CountdownTimer() {
  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
    } else {
      // Render a countdown
      return (
        <div className="flex gap-6 sm:gap-10 mb-10 mt-4 text-yellow-300 font-alarmclock">
          <div className="flex flex-col items-center text-4xl sm:text-6xl">
            {days}
            <span className="text-xs sm:text-sm text-white tracking-wide">
              DAYS
            </span>
          </div>
          <div className="flex flex-col items-center text-4xl sm:text-6xl">
            {hours}
            <span className="text-xs sm:text-sm text-white tracking-wide">
              HOURS
            </span>
          </div>
          <div className="flex flex-col items-center text-4xl sm:text-6xl">
            {minutes}
            <span className="text-xs sm:text-sm text-white tracking-wide">
              MINUTES
            </span>
          </div>
          <div className="flex flex-col items-center text-4xl sm:text-6xl">
            {seconds}
            <span className="text-xs sm:text-sm text-white tracking-wide">
              SECONDS
            </span>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="tracking-wide flex w-full flex-col items-center">
      <p className="text-2xl sm:text-4xl font-spaceboards text-stroke text-stroke-color">
        EMBARKING IN
      </p>
      <Countdown renderer={renderer} date={1677252600000} />
    </div>
  );
}
