import React from "react";
import Logo from '../assets/Images/Logo.jpg'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="font-poppins grid grid-flow-row grid-cols-2 max-xl:grid-cols-1 max-sm:grid-cols-1 items-center justify-center gap-4 m-4 max-sm:m-2 max-sm:p-4 p-6 max-xl:p-2 border-b-2">
      <div className="grid gap-8 max-sm:gap-3 max-sm:text-sm">
               <h1 className='flex items-center text-2xl max-xl:text-lg font-sans text-orange-700 rounded-2xl p-1 max-sm:text-sm'><img src={Logo} alt="Logo" className='size-8 rounded-xl'/>DreamS...</h1>
       
        <p className="w-3/4 max-sm:text-xs">
          DreamSpace specializes in creating modern, elegant, and functional
          interior designs for every home. We combine contemporary style with
          comfort to transform ordinary spaces into beautiful living
          environments. Our focus is on quality, creativity, and attention to
          detail in every project. Let us bring your dream home to life with
          designs that inspire and impress.
        </p>
        <span className="flex items-center gap-4 max-xl:ml-4 max-xl:mb-8 max-sm:gap-2">
          <FaFacebook
            title="Facebook"
            className="size-8 cursor-pointer max-sm:size-6 border border-green-700 shadow-sm hover:scale-90 hover:duration-150 hover:shadow-gray-400 p-1 rounded-xl text-blue-900"
          />
          <FaTwitter
            title="Twitter"
            className="size-8 cursor-pointer max-sm:size-6 border border-green-700 shadow-sm hover:scale-90 hover:duration-150 hover:shadow-gray-400 p-1 rounded-xl text-blue-900"
          />
          <FaInstagram
            title="Instagram"
            className="size-8 cursor-pointer max-sm:size-6 border border-green-700 shadow-sm hover:scale-90 hover:duration-150 hover:shadow-gray-400 p-1 rounded-xl text-pink-900"
          />
          <FaLinkedinIn
            title="LinkedIn"
            className="size-8 cursor-pointer max-sm:size-6 border border-green-700 shadow-sm hover:scale-90 hover:duration-150 hover:shadow-gray-400 p-1 rounded-xl text-blue-900"
          />
        </span>
      </div>

      <div className="grid grid-flow-col max-sm:grid-flow-row gap-20 max-xl:mx-10 max-md:mx-1 max-md:list-none max-xl:grid-cols-2 max-sm:text-xs max-sm:grid max-sm:grid-cols-2 max-sm:items-center max-sm:gap-4">
        <span className="grid gap-2">
          <li>About us</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Contact us</li>
        </span>
        <span className="grid gap-2">
          <li>Jobs</li>
          <li>Our Team</li>
          <li>LeaderShip</li>
          <li>Privacy Policy</li>
        </span>
        <span className="grid gap-2">
          <li>Support</li>
          <li>Knowledge Base</li>
          <li>Live Chat</li>
        </span>
        
        <span className="grid gap-2">
          <li>Nordic Chair</li>
          <li>Kruzo Aero</li>
          <li>Ergonomic Chair</li>
        </span>
        
      </div>
      
    </div>
  );
};

export default Footer;
