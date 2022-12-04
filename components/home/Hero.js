import { useEffect, useState } from "react";

function Hero() {
  const [isScrollVisible, setIsScrollVisible] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollYval = scrollY;
      if (scrollYval > 50 && isScrollVisible === true) {
        setIsScrollVisible(false);
      }
      if (scrollYval < 49 && isScrollVisible === false) {
        setIsScrollVisible(true);
      }
    });
  }, [isScrollVisible]);
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="flex justify-center flex-col items-center mt-10 sm:mt-20 w-full">
        <p className="font-spaceboards text-yellow-300 text-center text-shadow-lg text-stroke-color text-stroke text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl">
          The Galaxy
          <br />
          Indelible
        </p>
        {isScrollVisible && (
          <p className="tracking-scroll absolute bottom-8 animate-pulse flex flex-col justify-center items-center">
            SCROLL DOWN
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
            </svg>
          </p>
        )}
      </div>
    </div>
  );
}

export default Hero;
