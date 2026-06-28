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
      <span className="flex font-poppins items-center py-28">
            <h1 className="text-4xl font-bold ml-10">Contact</h1>
          </span>
     </div>
    <div className="flex justify-center items-center py-10 px-4 lg:my-0 sm:my-44">
  <form className="w-full max-w-xl bg-white rounded-xl shadow-2xl p-8">
    <div className="text-center mb-8">
      <p className="text-lg md:text-xl font-semibold text-gray-500">
        Thanks for Contacting Us. Please fill in your details.
      </p>
      <h1 className="text-xl md:text-2xl font-bold text-orange-500 mt-2">
        Team Dreamspace
      </h1>
    </div>

    <div className="flex flex-col gap-5">
      <input
        type="text"
        placeholder="Enter your Name"
        className="w-full border border-orange-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <input
        type="email"
        placeholder="Enter your Email"
        className="w-full border border-orange-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <textarea
        rows="6"
        placeholder="Enter your Message"
        className="w-full border border-orange-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
      ></textarea>

      <button
        type="submit"
        className="w-full md:w-48 mx-auto bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition duration-300"
      >
        Submit
      </button>
    </div>
  </form>
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
