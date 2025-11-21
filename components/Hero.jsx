import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-[#333533] py-20 overflow-hidden h-96 flex items-center justify-center">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover blur-xs"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#E8EDDF]">
          Welcome to <span className="text-[#F5CB5C]">TranspoGuide</span>
        </h1>
        <p className="text-lg wrap-anywhere  md:w-2xl md:text-xl text-[#E8EDDF] mb-8">
          Your web-based public transport fare Guide and seat reservation
          system. Easily check fares, reserve seats and travel with confidence.
        </p>
        <div className="relative w-xs md:w-md  ">
          <input
            type="text"
            className="w-full text-white px-4 py-3 rounded-md focus:outline-none border border-gray-300"
            placeholder="location, vehicle, fare..."
          />
          <button className="absolute right-1 top-1 bottom-1 bg-[#F5CB5C] text-black px-4 py-2 rounded-md hover:bg-yellow-400 transition">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
