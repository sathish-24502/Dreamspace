import React from "react";
import dinningtable from "../assets/Images/DinningTable.png";
import wardrobe from "../assets/Images/Wardrobe-img.png";
import { FaRupeeSign } from "react-icons/fa";

const WoodFurni = () => {
  const woods = [
    {
      image: dinningtable,
      name: "dinnig Table With Chair's",
      price: "11,300.00",
    },
    {
      image: wardrobe,
      name: "Wardrobe Wood",
      price: "9,700.00",
    },
  ];
  return (
    <>
      <span>
        <h1 className="text-2xl font-bold text-gray-800 mx-10 py-6 max-sm:text-lg max-sm:mx-5 max-sm:py-0">
          Modern Wood Fruniture :
        </h1>
      </span>
      <div className="flex justify-evenly items-center py-10 max-sm:flex-col max-sm:gap-8">
        {woods.map((woods, indx) => (
          <div className="grid gap-2">
            <img
              key={indx}
              src={woods.image}
              alt="WoodImage"
              className="w-96 h-64 rounded-xl border border-orange-100 shadow-md max-sm:w-72 max-xl:w-72"
            />
            <h1 className="font-semibold">{woods.name}</h1>
            <p className="flex items-center text-gray-700">
              <FaRupeeSign />
              {woods.price}
            </p>
            <button className="border w-96 p-1 cursor-pointer bg-green-500 focus:bg-green-700 hover:shadow-md focus:text-white rounded-md max-sm:w-72 max-xl:w-72">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default WoodFurni;
