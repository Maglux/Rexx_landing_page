"use client";

import { motion } from "framer-motion";
import styles from "@/styles";
import { fadeIn, staggerContainer, planetVariants } from "@/utils/motion";
import { TypingText, TitleText, MilestoneSteps } from "@/components";
import { firstQuarterMilestoneSteps } from "@/constants";

const Roadmap = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      {/* -----------------1------------------------- */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants("left")}
          className={`${styles.flexCenter}`}
        >
          <img
            src="/get-started.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className=" flex justify-center flex-col"
        >
          <TypingText title="| Our Roadmap" />
          <TitleText
            title={<>Q1 2023 - Project Inception & Development</>}
          />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {firstQuarterMilestoneSteps.map((feature, index) => (
              <MilestoneSteps
                key={feature}
                number={index + 1}
                text={feature}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
      <div className=" h-[2px] bg-white opacity-10" />

      {/* -----------------2------------------------- */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants("right")}
          className={`${styles.flexCenter} md:hidden block`}
        >
          <img
            src="/whats-new.png"
            alt="what's new"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className=" flex justify-center flex-col"
        >
          <TypingText title="| Our Roadmap" />
          <TitleText
            title={<>Q2 2023 - Platform Launches & Community Building </>}
          />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {firstQuarterMilestoneSteps.map((feature, index) => (
              <MilestoneSteps
                key={feature}
                number={index + 1}
                text={feature}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className={`${styles.flexCenter} hidden md:block`}
        >
          <img
            src="/whats-new.png"
            alt="what's new"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
      <div className=" h-[2px] bg-white opacity-10" />

      {/* -----------------3------------------------- */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants("left")}
          className={`${styles.flexCenter}`}
        >
          <img
            src="/get-started.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className=" flex justify-center flex-col"
        >
          <TypingText title="| Our Roadmap" />
          <TitleText
            title={<>Q3 2023 - Expansion & New Platform Developments</>}
          />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {firstQuarterMilestoneSteps.map((feature, index) => (
              <MilestoneSteps
                key={feature}
                number={index + 1}
                text={feature}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
      <div className=" h-[2px] bg-white opacity-10" />

      {/* -----------------4------------------------- */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants("right")}
          className={`${styles.flexCenter} md:hidden block`}
        >
          <img
            src="/whats-new.png"
            alt="what's new"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className=" flex justify-center flex-col"
        >
          <TypingText title="| Our Roadmap" />
          <TitleText
            title={<>Q4 2023 - Further Platform Launches & Enhancements</>}
          />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {firstQuarterMilestoneSteps.map((feature, index) => (
              <MilestoneSteps
                key={feature}
                number={index + 1}
                text={feature}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className={`${styles.flexCenter} hidden md:block`}
        >
          <img
            src="/whats-new.png"
            alt="what's new"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
      <div className=" h-[2px] bg-white opacity-10" />

      {/* -----------------5------------------------- */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants("left")}
          className={`${styles.flexCenter}`}
        >
          <img
            src="/get-started.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className=" flex justify-center flex-col"
        >
          <TypingText title="| Our Roadmap" />
          <TitleText
            title={
              <>Q1 2024 - Introduction of More Decentralized Solutions</>
            }
          />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {firstQuarterMilestoneSteps.map((feature, index) => (
              <MilestoneSteps
                key={feature}
                number={index + 1}
                text={feature}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
      <div className=" h-[2px] bg-white opacity-10" />

      {/* -----------------6------------------------- */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants("right")}
          className={`${styles.flexCenter} md:hidden block`}
        >
          <img
            src="/whats-new.png"
            alt="what's new"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className=" flex justify-center flex-col"
        >
          <TypingText title="| Our Roadmap" />
          <TitleText
            title={<>Q2 2024 - Continued Growth & Platform Launches </>}
          />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {firstQuarterMilestoneSteps.map((feature, index) => (
              <MilestoneSteps
                key={feature}
                number={index + 1}
                text={feature}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className={`${styles.flexCenter} hidden md:block`}
        >
          <img
            src="/whats-new.png"
            alt="what's new"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
      <div className=" h-[2px] bg-white opacity-10" />

      {/* -----------------7------------------------- */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants("left")}
          className={`${styles.flexCenter}`}
        >
          <img
            src="/get-started.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className=" flex justify-center flex-col"
        >
          <TypingText title="| Our Roadmap" />
          <TitleText
            title={<>Q3-Q4 2024 - Ecosystem Refinement & Expansion</>}
          />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {firstQuarterMilestoneSteps.map((feature, index) => (
              <MilestoneSteps
                key={feature}
                number={index + 1}
                text={feature}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Roadmap;
