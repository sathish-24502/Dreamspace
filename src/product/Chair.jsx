import React from "react";
import chair1 from "../assets/Images/chair1.jpg";
import chair2 from "../assets/Images/chair2.jpg";
import chair3 from "../assets/Images/chair3.jpg";
import chair4 from "../assets/Images/chair4.jpg";
import chair5 from "../assets/Images/chair5.jpg";
import { FaRupeeSign } from "react-icons/fa";

const Chair = () => {
  const ChairImages = [
    { image: chair2, Name: "Oslo Relax Chair", Price: "7,500.00" },
    { image: chair3, Name: "Luna Accent Chair", Price: "4,500.00" },
    { image: chair4, Name: "Verona Executive Chair", Price: "9,500.00" },
    { image: chair5, Name: "Nordic Comfort Chair", Price: "8,500.00" },
  ];
  console.log(ChairImages);

  return (
    <>
      {/* <div className="font-poppins grid items-center px-10 py-8 gap-2 bg-orange-400 mb-8 max-sm:mb-4 max-sm:px-0 max-sm:py-20">
        <span className="text-2xl max-sm:text-lg font-semibold text-white">
          <h1 className="max-sm:ml-8">Crafted for Comfort ,</h1>
          <h2 className="-ml-2 max-sm:ml-4"> Designed for Life.</h2>
        </span>
        <span className="flex gap-8 flex-row-reverse mx-10 max-xl:mx-4 max-sm:gap-4 max-xl:gap-4 max-sm:flex-col-reverse">
          <img
            src={chair1}
            alt="Adverisement-Image"
            className="w-96 mr-10 max-xl:mr-4 rounded-full max-xl:rounded-3xl max-sm:rounded-3xl max-sm:mr-0 max-xl:w-60 max-sm:w-60"
          />
          <div>
            <p className="text-lg mt-10 max-sm:mt-4 max-sm:text-xs max-xl:text-sm">
            Transform your space with beautifully crafted chairs that combine
            exceptional comfort with timeless style. Designed to complement
            modern interiors while providing support for everyday living.
          </p>
          <p className="text-lg mt-4 max-sm:text-xs max-xl:text-sm">
            Discover our premium collection of chairs that blend modern design,
            superior comfort, and lasting durability. From dining chairs to
            office seating, each piece is thoughtfully crafted to elevate your
            living and workspace.
          </p>
          </div>
        </span>
      </div> */}
      <span>
        <h1 className="text-2xl font-bold text-gray-800 mx-10 py-6 max-sm:text-lg max-sm:mx-5">
          Modern Chair :
        </h1>
      </span>
      <div className="grid grid-flow-col items-center max-xl:grid-rows-2 max-xl:justify-center max-sm:justify-center p-4 ml-6 font-poppins mb-8 max-sm:ml-0 max-sm:gap-6 max-xl:gap-20 max-sm:flex max-sm:flex-col">
        {ChairImages.map((ChairImages, index) => (
          <div className="grid gap-2">
            <img
              key={index}
              src={ChairImages.image}
              alt="ChairImages"
              className="w-80 h-96 rounded-2xl border border-orange-100 shadow-md max-sm:w-72 max-sm:h-72  max-xl:w-80 max-xl:h-72"
            />
            <h1 className="font-semibold cursor-pointer">{ChairImages.Name}</h1>
            <p className="text-sm font-medium flex items-center">
              <FaRupeeSign />
              {ChairImages.Price}
            </p>
            <button className="border w-80 p-1 cursor-pointer bg-green-500 focus:bg-green-700 hover:shadow-md focus:text-white rounded-md max-sm:w-72">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Chair;
