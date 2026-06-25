import React from "react";
import bed1 from "../assets/Images/Bed-img1.jpg";
import bed2 from "../assets/Images/Bed-img2.jpg";
import { FaRupeeSign } from "react-icons/fa";
// import bedAD from '../assets/Images/Bed-AdImge.jpg'

const Bed = () => {
  const Bed = [
    {
      image: bed1,
      name: "Royal Comfort Bed",
      price: "15,500.00",
    },
    {
      image: bed2,
      name: "Oakwood Platform Bed",
      price: "18,500.00",
    },
  ];

  console.log(Bed);

  return (
    <>
      <span>
        <h1 className="text-2xl font-bold text-gray-800 mx-10 py-6 max-sm:text-lg max-sm:mx-5 max-sm:py-0">
          Modern Bed's :
        </h1>
      </span>
      <div className="flex justify-evenly items-center py-10 max-sm:flex-col max-sm:gap-8">
        {Bed.map((Bed, index) => (
          <div className="grid gap-2">
            <img
              key={index}
              src={Bed.image}
              alt="bedImage"
              className="w-96 h-64 rounded-xl border border-orange-100 shadow-md max-sm:w-72 max-xl:w-72"
            />
            <h1 className="font-semibold">{Bed.name}</h1>
            <p className="flex items-center text-gray-700">
              <FaRupeeSign />
              {Bed.price}
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

export default Bed;
