import React from "react";
import Picture1 from "../assets/img-grid-1.jpg";
// import Picture2 from '../assets/img-grid-2.jpg'
import Picture2 from "../assets/img-grid-3.jpg";
import dotsgreen from "../assets/dots-green.svg";

const Facilities = () => {
  return (
    <>
      <div className="max-xl:ml-12">
        <div className="flex items-center p-4 m-8 mt-20 max-sm:hidden">
          <span className="">
            <img src={dotsgreen} alt="dotsgreen" className="relative" />
          </span>
          <span>
            <img
              src={Picture1}
              alt="Picture1"
              className="absolute -ml-44 mt-2 w-1/3 max-xl:w-60 max-xl: max-xl:-mt-8 rounded-3xl"
            />
          </span>
        </div>

        <span className="max-sm:hidden">
          <img
            src={Picture2}
            alt="Picture2"
            className="w-80 absolute ml-96 -mt-60 max-xl:w-44 max-xl:ml-4 max-xl:-mt-8 rounded-3xl"
          />
        </span>
      </div>

      <div className="grid justify-end font-poppins gap-4 mr-4 -mt-44 max-xl:-mt-60 max-xl:mr-28 max-sm:mt-8 max-sm:mr-0 max-sm:mx-4  max-sm:p-2 max-sm:justify-center max-sm:items-center max-sm:text-xs">
        <h1 className="text-3xl font-semibold w-96 max-xl:text-2xl text-gray-600 max-sm:w-60 max-sm:text-lg">
          We Help You Make Modern Interior Design
        </h1>
        <p className="w-96 max-sm:w-72">
          We help create modern, stylish, and functional interior spaces that
          match your lifestyle. Our designs focus on comfort, elegance, smart
          space utilization, and high-quality materials to transform homes and
          offices into beautiful environments.
        </p>
        <span className="grid grid-cols-2 max-xl:grid-cols-1 font-medium max-sm:flex max-sm:flex-col">
          <li>Modern and elegant designs</li>
          <li>Space-saving solutions</li>
          <li>Customized interiors</li>
          <li>High-quality materials</li>
          <li>Comfortable and functional spaces</li>
          <li>Living room, bedroom, kitchen, and office designs</li>
          <li>Professional planning and execution</li>
          <li>Affordable and premium design options</li>
        </span>
        <button className="flex justify-center items-center border p-3 my-10 w-52 max-sm:h-8 max-sm:w-28 max-sm:my-4 rounded-3xl bg-orange-300 hover:shadow-black hover:shadow-sm font-semibold hover:border-orange-600">
          Explore
        </button>
      </div>
    </>
  );
};

export default Facilities;
