import React from "react";
import bgimg from "../assets/Chair-plantTable.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterEnd from "../components/FooterEnd";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Contact = () => {

  return (
    <>
     <div className="bg-orange-400 pt-8 pl-12">
       <div className="flex items-center justify-between mx-16 font-poppins">
        <h1 className='text-2xl max-xl:text-lg font-sans text-white border-l-2 rounded-2xl p-1 max-sm:text-sm'>DreamSpace.</h1>
         <span className="flex justify-center items-center gap-6">
            <Link to="/interiorproducts" className='text-orange-100 hover:text-white border-orange-300 rounded-xl p-1 px-2 hover:border-orange-500 hover:shadow hover:shadow-slate-200'>Shop</Link>
         <p className='text-orange-100 hover:text-white border-orange-300 rounded-xl p-1 px-2 hover:border-orange-500 hover:shadow hover:shadow-slate-200'>Services</p>
          <p className='text-orange-100 hover:text-white border-orange-300 rounded-xl p-1 px-2 hover:border-orange-500 hover:shadow hover:shadow-slate-200'>Blog</p>
          <Link to="/" className='flex items-center gap-1 text-orange-100 hover:text-white border-x border-orange-300 rounded-xl p-1 px-2 hover:border-orange-500 shadow shadow-slate-200'><FaHome/>Home</Link>
         </span>
          
       </div>
      <span className="flex font-poppins items-center py-20">
            <h1 className="text-4xl font-bold ml-10">Contact</h1>
          </span>
     </div>
      <div className="">
        <div className="flex justify-center items-center p-4">
        <div className="mt-8 w-1/2 max-xl:w-4/5 px-10 rounded-xl shadow-2xl">
        <span className="font-poppins text-xl max-xl:text-lg font-semibold text-gray-500 grid justify-center items-center p-2">
            <p>Thanks To Contect Us , Plese Fill Our Details.</p>
            <h1>Team-Dreamspace...</h1>
        </span>
          <div className="grid gap-6 justify-center items-center p-6">
            <input
              type="text"
              required
              value={name}
              placeholder="Enter your Name"
              className="border border-orange-100 focus:outline-none w-72 p-1 rounded-sm"
            />
            <input
              type="text"
              required
              value={name}
              placeholder="Enter your Email-Id"
              className="border border-orange-100 focus:outline-none w-72 p-1 rounded-sm"
            />
            <textarea
              name="message"
              required
              value={name}
              placeholder="Message"
              className="border border-orange-100 p-1 focus:outline-none w-72 h-48 rounded-sm text-gray-400"
            >
        
            </textarea>
            <button type="submit" className="flex justify-center p-1 w-44 mb-10 bg-orange-400 rounded-lg font-semibold hover:shadow-sm hover:shadow-orange-300">
              Submit
            </button>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
      <FooterEnd/>
      {/* <span className="absolute -mt-96 ">
        <img
          src={bgimg}
          alt="Background-Image"
          className="w-screen h-screen"
        />
      </span> */}
    </>
  );
};

export default Contact;
