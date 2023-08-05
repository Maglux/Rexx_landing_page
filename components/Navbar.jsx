"use client";

import { motion } from "framer-motion";

import { navVariants } from "@/utils/motion";
import styles from "@/styles";
import { CustomButton } from ".";

const viewWhitePaper = () => {
  window.open("./pdf/whitepaper.pdf");
};

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    {/* <div className="absolute w-[50%] inset-0 gradient-01" /> */}
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <img
        src="/Rexx Logo.png"
        alt="rexxlogo"
        className="w-auto md:h-[28px] h-[30px] object-contain"
      />
      {/* <h2 className="md:flex hidden font-extrabold text-[24px] leading-[30px] text-white">
        REXXVERSE
      </h2> */}
      {/* <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      /> */}
      {/* <CustomButton btnText="BUY NOW" /> */}
      <CustomButton
        handleClick={viewWhitePaper}
        btnText="VIEW WHITEPAPER &rarr;"
      />
    </div>
  </motion.nav>
);

export default Navbar;
