import React from "react";
import product1 from "../assets/product-1.png";
import product2 from "../assets/product-2.png";
import product3 from "../assets/product-3.png";
import { FaPlus, FaRupeeSign } from "react-icons/fa";

const Products = () => {
  return (
    <div className="flex max-sm:flex-col max-xl:flex-col justify-around items-center font-poppins mx-4 my-20  max-xl:my-10 max-sm:my-4">
      <span className="grid gap-3 max-sm:gap-2">
        <h1 className="text-4xl font-semibold max-sm:text-lg max-xl:text-xl">Crafted With</h1>
        <h1 className="text-4xl font-semibold max-sm:text-lg max-xl:text-xl">Excellent Material.</h1>
        <p className="w-72 h-44 max-sm:text-xs max-xl:text-xs">
          Wood Materials are known for their durability, natural beauty, and
          timeless appeal. They add warmth and elegance to any interior while
          providing long-lasting strength. 
        </p>
        <button className=" w-44 max-xl:w-32  max-xl:text-sm py-3 max-sm:h-10 max-sm:w-16 max-sm:rounded-2xl max-sm:text-xs rounded-full hover:border-orange-600 hover:shadow-sm hover:shadow-black bg-orange-300 max-sm:-mt-12 max-xl:-mt-10 max-xl:mb-10">
          Explore
        </button>
      </span>
      <div className="flex max-sm:flex-col max-sm:gap-4 max-sm:py-8">
        <span className="grid gap-2 justify-center items-center p-4 rounded-md">
          <img
            src={product1}
            alt="product-1"
            className="size-64 max-xl:w-56 max-sm:size-44 hover:-translate-y-10 duration-500 hover:duration-500"
          />
          <div className="grid gap-2 font-semibold justify-center items-center">
            <h1 className="flex justify-center max-sm:text-sm">Nordic Chair</h1>
            <span className="flex justify-center items-center max-sm:text-sm">
              <FaRupeeSign />
              <h1>3,500.00</h1>
            </span>
            <button className="border w-44 bg-green-400 border-green-400 rounded-lg hover:border-green-600 max-sm:text-sm max-sm:py-1">
              Add to Cart
            </button>
          </div>
        </span>
        <span className="grid gap-2 justify-center items-center p-4 rounded-md">
          <img
            src={product2}
            alt="product-1"
            className="size-64 max-xl:w-56 max-sm:size-44 hover:-translate-y-10 duration-500 hover:duration-500 "
          />
          <div className="grid gap-2 font-semibold justify-center items-center">
            <h1 className="flex justify-center max-sm:text-sm">Kruzo Aero Chair</h1>
            <span className="flex justify-center items-center max-sm:text-sm">
              <FaRupeeSign />
              <h1>4,500.00</h1>
            </span>
            <button className="border w-44 bg-green-400 border-green-400 rounded-lg hover:border-green-600 max-sm:text-sm max-sm:py-1">
              Add to Cart
            </button>
          </div>
        </span>
        <span className="grid gap-2 justify-center items-center p-4 rounded-md">
          <img
            src={product3}
            alt="product-1"
            className="size-64 max-xl:w-56 max-sm:size-44 hover:-translate-y-10 duration-500 hover:duration-500 "
          />
          <div className="grid gap-2 font-semibold justify-center items-center">
            <h1 className="flex justify-center max-sm:text-sm">Ergonomic Chair</h1>
            <span className="flex justify-center items-center max-sm:text-sm">
              <FaRupeeSign />
              <h1>2,500.00</h1>
            </span>
            <button className="border w-44 bg-green-400 border-green-400 rounded-lg hover:border-green-600 max-sm:text-sm max-sm:py-1">
              Add to Cart
            </button>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Products;
