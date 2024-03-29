import { motion } from "framer-motion";

import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
  zoomIn,
} from "@/utils/motion";
import styles from "@/styles";
import { Tilt } from "react-tilt";
import { exploreProjects, heroProjects } from "@/constants";
import { CustomButton } from "@/components";

const ProjectCardHeroSection = ({ index, title, icon, desc, btnText }) => (
  <Tilt className="xs:w-[250px] md:w-full">
    <motion.div
      variants={fadeIn("right", "tween", index * 0.5, 0.1)}
      className="w-full green-pink-gradient p-[0.5px] rounded-[12px] shadow-card
      text-red hover:before:bg-[#9548ee] relative text-xs overflow-hidden border border-[#9548ee] bg-transparent text-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#9548ee] before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full
      "
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-black relative z-10 rounded-[12px] py-5 px-12 min-h-[280px] flex justify-between flex-col gap-4"
      >
        <motion.div variants={zoomIn(0.5, 1)}>
          <video
            src={icon}
            autoPlay
            loop
            muted
            alt="web-development"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <h3 className="text-white text-[20px] font-bold">{title}</h3>

        <h3 className="text-white text-[10px] ">{desc}</h3>

        <CustomButton
          btnText={btnText}
          btnStyles="md:px-5 px-4 md:py-2 py-2.5 tracking-wider min-w-fit"
        />
      </div>
    </motion.div>
  </Tilt>
);

const Hero = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10 gap-4">
        <motion.h1
          variants={textVariant(1.1)}
          className="text-md text-white  text-3xl text-center"
        >
          The Home of <span className="text-[#9548ee]">Rexx</span> ecosystem
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          {/* <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1> */}
          <h2 className=" text-white md:w-[60%] text-xl text-center">
            Powered by the <span className="text-[#9548ee]">Rexx Coin</span>,
            presenting a wide array of decentralized solution across various
            sectors
          </h2>
        </motion.div>
        <div className="mt-20 flex flex-wrap md:flex-nowrap gap-8 justify-center md:px-20">
          {heroProjects.map((project, index) => (
            <ProjectCardHeroSection
              key={project.title}
              index={index}
              {...project}
            />
          ))}
        </div>
      </div>
      {/* <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-0 -top-[30px]" />
        <img
          src="/Design Sources/D1.jpg"
          alt="cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />
      </motion.div> */}
    </motion.div>
  </section>
);

export default Hero;
