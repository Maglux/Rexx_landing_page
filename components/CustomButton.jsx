"use client";

import Lottie from "lottie-react";
import AnimationCircle from "@/public/animation_circle.json";

const CustomButton = ({ btnText }) => {
  return (
    <div className="relative group max-w-fit">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-0  group-hover:opacity-100 transition duration-200 animate-tilt"></div>
      <button className="relative md:px-6 px-4 md:py-3 py-2.5  rounded-full text-xs border-[1px] border-[#9548ee]  leading-none text-white flex items-center">
        <span className="group-hover:text-gray-200 transition duration-200">
          {btnText}
        </span>
        <div></div>
      </button>
    </div>
  );
};

export default CustomButton;
