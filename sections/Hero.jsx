"use client";

import { motion } from "framer-motion";

import { slideIn, staggerContainer, textVariant } from "@/utils/motion";
import styles from "@/styles";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          RexxVerse
        </motion.h1>
        <motion.div variants={textVariant(1.2)} className="flex flex-row justify-center items-center">
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="relative w-full md:-mt-[20px] -mt-[12px]">
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-0 -top-[30px]" />
        <img src="/Design Sources/D1.jpg" alt="cover" className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative" />
        {/* <a href="#tokenomics">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[15px] pr-[20px] relative z-10">
            <img
              src="/arrow-down.svg"
              alt="down-arrow"
              className="sm:w-[40px] w-[30px] sm:h-[40px] h-[30px] object-contain border-[2px] rounded-full py-1 px-1"
            />
          </div>
        </a> */}
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
