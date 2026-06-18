import React, { useState } from "react";
import product1 from "../assets/product-1.png";
import product2 from "../assets/product-2.png";
import product3 from "../assets/product-3.png";

const ShowCase = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  
  return (
    <>
    {/* <h1 className="text-lg font-poppins font-semibold text-green-950">Timeless Materials, Modern Spaces</h1> */}
      <div className="flex justify-between  p-8 m-10 mt-72 max-xl:mt-12 font-poppins gap-4  max-sm:gap-8  max-sm:mt-10 max-sm:p-0 max-sm:m-3 max-sm:flex-col">
        <span className="grid grid-flow-col max-xl:grid-flow-row gap-3 max-xl:gap-1 justify-center items-center p-4 max-sm:grid-flow-row max-sm:text-sm">
          <span className="w-44 h-44 max-sm:w-32 max-sm:h-28 bg-orange-100 rounded-3xl relative"></span>
          <img
            src={product1}
            alt="product-1"
            className="size-44 max-sm:size-32 absolute mb-10 max-xl:mb-36 max-sm:mb-48 max-md:mt-20"
          />
          <div className="grid">
            <h1 className="flex justify-center font-semibold">Nordic Chair</h1>
            <p className="text-sm max-sm:text-xs text-gray-500">
              The Nordic Chair combines Scandinavian simplicity with modern
              comfort.Its clean lines, natural finishes, and elegant design make it a perfect addition to living rooms, bedrooms, and workspaces.

            </p>
           
          </div>
        </span>
        <span className="grid grid-flow-col max-xl:grid-flow-row gap-2 justify-center items-center p-4 max-sm:grid-flow-row max-sm:text-sm">
          <span className="w-44 h-44 max-sm:w-32 max-sm:h-28 bg-orange-100 rounded-3xl relative"></span>
          <img
            src={product2}
            alt="product-1"
            className="size-44 max-sm:size-32 absolute mb-10 max-xl:mb-36 max-sm:mb-48 max-md:mt-20"
          />
          <div className="grid">
            <h1 className="flex justify-center font-semibold">
              Kruzo Aero Chair
            </h1>
            <p className="text-sm max-sm:text-xs text-gray-500">
              The Kruzo Aero Chair is a modern seating solution designed to
              offer both style and comfort. Its sleek appearance and ergonomic
              features make it suitable for homes, offices, and creative
              workspaces.
            </p>
          </div>
        </span>
        <span className="grid grid-flow-col max-xl:grid-flow-row gap-2 justify-center items-center p-4 max-sm:grid-flow-row max-sm:text-sm">
          <span className="w-44 h-44 max-sm:w-32 max-sm:h-28 bg-orange-100 rounded-3xl relative"></span>
          <img
            src={product3}
            alt="product-1"
            className="size-44 max-sm:size-32 absolute mb-10 max-xl:mb-36 max-md:mt-20 max-sm:mb-48"
          />
          <div className="grid">
            <h1 className="flex justify-center font-semibold">
              Ergonomic Chair
            </h1>
            <p className="text-sm max-sm:text-xs text-gray-500">
              The Ergonomic Chair is designed to support healthy posture and
              maximize comfort during long working or studying sessions. It
              helps reduce physical strain while promoting better productivity.
            </p>
          </div>
        </span>
      </div>
    </>
  );
};

export default ShowCase;
