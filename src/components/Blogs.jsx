import React from "react";
import post1 from "../assets/post-1.jpg";
import post2 from "../assets/post-2.jpg";
import post3 from "../assets/post-3.jpg";
const Blogs = () => {
  return (
    <div className="bg-orange-50 p-20 font-poppins  max-xl:p-4 max-sm:p-2">
      <span className="flex justify-between items-center font-poppins mx-20 p-4 max-xl:mx-8 max-sm:mx-0">
        <h1 className="text-3xl font-semibold max-xl:text-xl max-sm:text-lg">Recent Blog</h1>
        <button className="underline max-sm:text-sm text-gray-500 hover:text-black">
          View All Posts
        </button>
      </span>
      <div className="font-poppins grid grid-cols-3 ml-20 max-sm:grid-cols-1 max-xl:ml-0 max-sm:ml-0">
        <span className="">
          <img src={post1} alt="POST1" className="w-96 max-sm:w-72 rounded-3xl p-4 " />
          <h1 className="font-semibold text-lg mb-1 ml-10 max-xl:text-sm max-xl:ml-6 max-sm:text-sm">First Time Home Owner Ideas</h1>
          <div className="flex items-center gap-1 ml-10 max-xl:text-sm max-xl:ml-6 max-sm:text-sm">
            <span className="text-gray-400">By</span>
            <h1 className="font-medium">Robert</h1>
            <span className="text-gray-400">on</span>
            <p className="font-medium">Aug 20, 2022.</p>
          </div>
        </span>
         <span className="">
          <img src={post2} alt="POST1" className="w-96 max-sm:w-72 rounded-3xl p-4 " />
          <h1 className="font-semibold text-lg mb-1 ml-10 max-xl:text-sm max-xl:ml-6 max-sm:text-sm">First Time Home Owner Ideas</h1>
          <div className="flex items-center gap-1 ml-10 max-xl:text-sm max-xl:ml-6 max-sm:text-sm">
            <span className="text-gray-400">By</span>
            <h1 className="font-medium">Winston</h1>
            <span className="text-gray-400">on</span>
            <p className="font-medium">Aug 20, 2022.</p>
          </div>
        </span>
         <span className="">
          <img src={post3} alt="POST1" className="w-96 max-sm:w-72 rounded-3xl p-4 " />
          <h1 className="font-semibold text-lg mb-1 ml-10 max-xl:text-sm max-xl:ml-6 max-sm:text-sm">First Time Home Owner Ideas</h1>
          <div className="flex items-center gap-1 ml-10 max-xl:text-sm max-xl:ml-6 max-sm:text-sm">
            <span className="text-gray-400">By</span>
            <h1 className="font-medium">Dilip Kumar</h1>
            <span className="text-gray-400">on</span>
            <p className="font-medium">Aug 20, 2022.</p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Blogs;
