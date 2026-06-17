import React from "react";
import truck from "../assets/truck.svg";
import bag from "../assets/bag.svg";
import support from "../assets/support.svg";
import Return from "../assets/return.svg";
import Poster from "../assets/why-choose-us-img.jpg";
import dots from "../assets/dots-yellow.svg";

const Service = () => {
  return (
    <div className="grid grid-cols-2 p-4 ml-10 max-sm:ml-0 max-sm:p-0 max-sm:w-screen">
      <div className="">
        <div className="font-poppins grid p-4 ml-10 max-sm:ml-0 mb-2">
          <h1 className="text-4xl font-semibold mb-4 max-sm:text-xl">Why Choose Us</h1>
          <p className="w-80 max-sm:w-60 max-sm:text-xs">
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
              className="bg-orange-100 rounded-full p-1 max-sm:size-8"
            />
            <h1 className="font-poppins font-semibold max-sm:w-20">Free & Fast Shipping</h1>
            <p className="w-52 max-sm:w-28">
              Get your orders delivered quickly at no extra cost.
            </p>
          </span>
          <span className="max-sm:text-xs">
            <img
              src={bag}
              alt="bag"
              className="bg-orange-100 rounded-full p-1 max-sm:size-8"
            />
            <h1 className="font-poppins font-semibold">Easy To Buy</h1>
            <p className="w-52 max-sm:w-28">
              Enjoy a simple and seamless shopping experience.
            </p>
          </span>
          <span className="max-sm:text-xs">
            <img
              src={support}
              alt="support"
              className="bg-orange-100 rounded-full p-1 max-sm:size-8"
            />
            <h1 className="font-poppins font-semibold">24/7 Support</h1>
            <p className="w-52 max-sm:w-28">
              Our team is always available to help whenever you need assistance.
            </p>
          </span>
          <span className="max-sm:text-xs">
            <img
              src={Return}
              alt="return"
              className="bg-orange-100 rounded-full p-1 max-sm:size-8"
            />
            <h1 className="font-poppins font-semibold max-sm:w-20">Hassle Free Return</h1>
            <p className="w-52 max-sm:w-28">
              Return products easily with our customer-friendly policy.
            </p>
          </span>
        </div>
      </div>

      <div className="w-4/5 p-10 border-y-4 border-orange-200 rounded-md max-sm:hidden">
        <img src={Poster} alt="image" className="rounded-xl " />
        {/* <img src={dots} alt="dots-image"  className="absolute"/> */}
      </div>
    </div>
  );
};

export default Service;
