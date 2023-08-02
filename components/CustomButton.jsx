"use client";

import Lottie from "lottie-react";
import AnimationCircle from "@/public/animation_circle.json";

const CustomButton = ({ btnText, btnStyles }) => {
  return (
    <div className={`${btnStyles} relative group max-w-fit`}>
      {/* <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-0  group-hover:opacity-100 transition duration-200 animate-tilt"></div> */}
      {/* <button className="relative md:px-6 px-4 md:py-3 py-2.5  rounded-full text-xs border-[1px] border-[#9548ee]  leading-none text-white flex items-center">
        <span className="group-hover:text-gray-200 transition duration-200">
          {btnText}
        </span>
      </button> */}
      <button
        className={`${btnStyles} text-red hover:before:bg-[#9548ee] relative md:px-6 px-4 md:py-3 py-2.5  rounded-full text-xs overflow-hidden border border-[#9548ee] bg-transparent text-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#9548ee] before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full`}
      >
        <span className="relative z-10">{btnText}</span>
      </button>
    </div>
  );
};

export default CustomButton;
