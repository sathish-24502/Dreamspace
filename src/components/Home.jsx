import React from "react";
import couch from "../assets/couch.png";

function Home() {
  return (
    <div className="flex justify-between items-start bg-orange-400 font-poppins">
      <div className="py-16 max-sm:py-20 max-sm:ml-0 ml-20">
        <h1 className="text-5xl max-sm:text-lg text-white font-semibold ml-20 max-sm:ml-5">
          Modern Interior
        </h1>
        <h2 className="text-5xl max-sm:text-lg mt-2 max-sm:mt-0 text-white font-semibold ml-20 max-sm:ml-5">
          Design Studio
        </h2>
        <p className="text-sm mt-4 max-sm:mt-4 w-72 text-black font-semibold ml-20 max-sm:text-xs max-sm:ml-5">
          Explore different wood types, durability factors, and design styles to
          find the perfect furniture for your home.Create a productive and
          stylish workspace with ergonomic furniture, proper lighting, and smart
          organization tips.
        </p>
        <span className="text-white font-semibold ml-20 flex gap-4 max-sm:ml-8 max-sm:gap-2">
          <button className="mt-20 bg-orange-500 border-2 max-sm:h-10 max-sm:flex max-sm:items-center border-orange-300 hover:border-white hover:shadow-orange-100 shadow rounded-md text-black p-3 text-xl max-sm:text-sm">
            Shop Now
          </button>
          <button className="mt-20 border-2 max-sm:h-10 max-sm:flex max-sm:items-center border-orange-300 hover:border-white hover:shadow-orange-100 shadow rounded-md text-black p-3 text-xl max-sm:text-sm">
            Explore
          </button>
        </span>
      </div>
      <span className="flex justify-end items-end max-sm:hidden">
        <img src={couch} alt="Couch" className="" />
      </span>
    </div>
  );
}

export default Home;
