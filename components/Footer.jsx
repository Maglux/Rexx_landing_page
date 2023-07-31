"use client";

import { motion } from "framer-motion";

import { socials } from "@/constants";

import styles from "@/styles";
import { footerVariants } from "@/utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter the RexxVerse
        </h4>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-0  group-hover:opacity-100 transition duration-200 animate-tilt" />
          <button
            type="button"
            className="relative flex items-center h-fit py-4 px-6 border-[1px] border-[#9548ee] rounded-[32px] gap-[12px]"
          >
            <img
              src="/Rexx_Logo(no_text).png"
              alt="Rexx Logo No Text"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px] text-white">
              ENTER REXXVERSE
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* <h4 className="font-extrabold text-[24px] text-white">Rexx</h4> */}
          <img
            src="/Rexx_Logo(text).png"
            alt="Rexx logo text"
            className="w-auto h-[24px] object-contain"
          />

          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 - 2024 Rexx. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
