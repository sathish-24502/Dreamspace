import React from "react";
import truck from "../assets/truck.svg";
import bag from "../assets/bag.svg";
import support from "../assets/support.svg";
import Return from "../assets/return.svg";
import Poster from "../assets/why-choose-us-img.jpg";
import dots from "../assets/dots-yellow.svg";

const Service = () => {
  return (
    <div className="grid grid-cols-2 p-4 ml-10 max-sm:ml-0 max-sm:p-0 max-sm:w-screen max-xl:ml-2 max-xl:p-1">
      <div className="">
        <div className="font-poppins grid p-4 ml-10 max-xl:ml-4 max-sm:ml-0 mb-2">
          <h1 className="text-4xl font-semibold mb-4 max-sm:text-xl max-xl:text-xl">Why Choose Us</h1>
          <p className="w-80 max-sm:w-60 max-sm:text-xs max-xl:text-sm">
            We provide high-quality furniture with modern designs, exceptional
            comfort, and lasting durability. Our commitment to craftsmanship and
            customer satisfaction ensures a perfect experience for every home.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-7 ml-10 max-sm:ml-0 max-sm:pl-3 max-sm:w-screen max-sm:gap-3 max-sm:items-center">
          <span className="max-sm:text-xs">
            <img
              src={truck}
              alt="Truck"
              className="bg-orange-100 rounded-full p-1 max-xl:size-10 max-sm:size-8"
            />
            <h1 className="font-poppins font-semibold max-sm:w-20 max-xl:text-sm">Free & Fast Shipping</h1>
            <p className="w-52 max-sm:w-28 max-xl:w-28  max-xl:text-xs">
              Get your orders delivered quickly at no extra cost.
            </p>
          </span>
          <span className="max-sm:text-xs">
            <img
              src={bag}
              alt="bag"
              className="bg-orange-100 rounded-full p-1 max-xl:size-10 max-sm:size-8"
            />
            <h1 className="font-poppins font-semibold max-xl:text-sm">Easy To Buy</h1>
            <p className="w-52 max-sm:w-28 max-xl:w-28 max-xl:text-xs">
              Enjoy a simple and seamless shopping experience.
            </p>
          </span>
          <span className="max-sm:text-xs">
            <img
              src={support}
              alt="support"
              className="bg-orange-100 rounded-full p-1 max-xl:size-10 max-sm:size-8"
            />
            <h1 className="font-poppins font-semibold max-xl:text-sm">24/7 Support</h1>
            <p className="w-52 max-sm:w-28 max-xl:text-xs max-xl:w-28">
              Our team is always available to help whenever you need assistance.
            </p>
          </span>
          <span className="max-sm:text-xs">
            <img
              src={Return}
              alt="return"
              className="bg-orange-100 rounded-full p-1 max-xl:size-10 max-sm:size-8"
            />
            <h1 className="font-poppins font-semibold max-sm:w-20 max-xl:text-sm">Hassle Free Return</h1>
            <p className="w-52 max-sm:w-28 max-xl:text-xs  max-xl:w-28">
              Return products easily with our customer-friendly policy.
            </p>
          </span>
        </div>
      </div>

      <div className="w-4/5 max-xl:w-80 p-10 border-y-4 max-xl:border-0 border-orange-200 rounded-md max-sm:hidden">
        <img src={Poster} alt="image" className="rounded-xl relative z-10" />
        <img src={dots} alt="dots-image"  className="absolute hidden max-xl:flex max-xl:w-32 max-xl:-mt-72 max-xl:-ml-6"/>
      </div>
    </div>
  );
};

export default Service;
