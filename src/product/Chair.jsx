import React from "react";
import chair1 from "../assets/Images/chair1.jpg";
import chair2 from "../assets/Images/chair2.jpg";
import chair3 from "../assets/Images/chair3.jpg";
import chair4 from "../assets/Images/chair4.jpg";
import chair5 from "../assets/Images/chair5.jpg";
import chair6 from "../assets/product-1.png";
import chair7 from "../assets/product-2.png";
import chair8 from "../assets/product-3.png";
import chair9 from "../assets/OfficeChair6.jpg";
import chair10 from '../assets/Images/singleSofa.jpg'
import { FaRupeeSign } from "react-icons/fa";

const Chair = () => {
  const ChairImages = [
    { image: chair2, Name: "Oslo Relax Chair", Price: "7,500.00" },
    { image: chair3, Name: "Luna Accent Chair", Price: "4,500.00" },
    { image: chair4, Name: "Verona Executive Chair", Price: "9,500.00" },
    { image: chair5, Name: "Nordic Comfort Chair", Price: "8,500.00" },
    { image: chair6, Name: "Nordic Chair", Price: "3,500.00" },
    { image: chair7, Name: "Kruzo Aero Chair", Price: "4,500.00" },
    { image: chair8, Name: "Ergonomic Chair", Price: "2,500.00" },
    { image: chair9, Name: "Office Chair", Price: "4,500.00" },
    { image: chair10, Name: "Single Confort Sofa", Price: "6,500.00" },
  ];
  console.log(ChairImages);

  return (
    <>
      <span>
        <h1 className="text-2xl font-bold text-gray-800 mx-10 py-6 max-sm:text-lg max-sm:mx-5">
          Modern Chair :
        </h1>
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-6 justify-items-center">
  {ChairImages.map((chair, index) => (
    <div
      key={index}
      className="flex flex-col gap-2 w-80 sm:w-72 xl:w-80"
    >
      <img
        src={chair.image}
        alt={chair.Name}
        className="w-full h-96 sm:h-72 xl:h-80 object-cover rounded-2xl border border-orange-100 shadow-md"
      />

      <h1 className="font-semibold cursor-pointer">
        {chair.Name}
      </h1>

      <p className="flex items-center text-sm font-medium">
        <FaRupeeSign />
        {chair.Price}
      </p>

      <button className="w-full p-2 bg-green-500 hover:bg-green-600 focus:bg-green-700 text-white rounded-md shadow-md transition duration-300 cursor-pointer">
        Buy Now
      </button>
    </div>
  ))}
</div>
    </>
  );
};

export default Chair;
