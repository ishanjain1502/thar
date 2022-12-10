import React from "react";

export default function EventWrapper() {
  const nfts = [
    {
      id: 1,
      href: "#link",
      name: "Stargazer #245",
      author: "Alice Dwan",
      bannerImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmHGnxYqNLm4VnQcwCUuPpSRUPS84StLOUkw&usqp=CAU",
      currentBid: "0.85 ETH",
      timeLeft: "2h:35m:36s",
    },
    {
      id: 2,
      href: "#link",
      name: "Binkies #96",
      author: "Binkies Club",
      bannerImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmHGnxYqNLm4VnQcwCUuPpSRUPS84StLOUkw&usqp=CAU",
      currentBid: "4.10 ETH",
      timeLeft: "10h:20m:05s",
    },
    {
      id: 3,
      href: "#link",
      name: "Wka Doo #17",
      author: "Bob Douglas",
      bannerImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmHGnxYqNLm4VnQcwCUuPpSRUPS84StLOUkw&usqp=CAU",
      currentBid: "11 ETH",
      timeLeft: "8h:48m:23s",
    },
  ];
  return (
    <div className="relative mx-auto py-8 md:py-16 px-4 w-full max-w-7xl">
      <div className="mx-auto max-w-5xl">
        {/* :TITLE CONTAINER */}
        <div className="flex items-end justify-between">
          <h2 className="text-xl sm:text-2xl text-white font-bold">Robotics</h2>
          <a
            href="#link"
            className="text-base text-white text-opacity-60 font-semibold hover:underline hover:text-opacity-80"
          >
            See All
          </a>
        </div>
        {/* Cards */}
        <div className="mt-8 mx-auto md:mx-auto max-w-md md:max-w-none grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10">
          {nfts.map((nft) => (
            <a
              href={nft.href}
              key={nft.id}
              className="col-span-1 group relative p-4 pb-5 flex flex-col items-center border-2 border-transparent rounded-xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-md hover:shadow-xl hover:border-yellow-300"
            >
              {/* ::Image */}
              <div className="relative max-h-64 rounded-2xl overflow-hidden w-full">
                <img
                  src={nft.bannerImg}
                  alt=""
                  className="object-cover transition duration-200 ease-in transform group-hover:scale-105 w-full"
                />
                {/* :::time left */}
                <span className="absolute top-2 right-2 py-1 px-3 rounded-full bg-gray-800 bg-opacity-30 text-xs text-white font-bold backdrop-filter backdrop-blur-sm">
                  {nft.timeLeft}
                </span>
              </div>
              {/* ::Details */}
              <div className="mt-2 px-2 w-full flex flex-col space-y-1">
                {/* :::name */}
                <p className="text-xl text-white text-opacity-80 font-semibold tracking-wide group-hover:text-opacity-100 font-spaceboards uppercase text-yellow-300">
                  {nft.name}
                </p>
                {/* :::infos */}
                <span className="flex flex-col justify-between items-center">
                  <span className="text-sm text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta, ex.
                  </span>
                  <button
                    type="button"
                    className="relative inline-flex items-center mt-5 px-2.5 py-1.5 rounded-full bg-gradient-to-t from-pink-600 to-pink-200 text-xs text-white font-bold tracking-wide hover:to-pink-600"
                  >
                    Coming Soon
                  </button>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
