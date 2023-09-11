import { motion } from "framer-motion";

import { fadeIn, staggerContainer } from "@/utils/motion";
import styles from "@/styles";
import { TypingText } from "@/components";
import { TitleTextTyping } from "@/components/CustomTexts";

const BuyRexx = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      {/* <div className="gradient-02 z-0" /> */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TitleTextTyping title="How to Buy Rexx" textStyle="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] md:px-10 font-normal sm:text-xl text-sm text-center text-secondary-white"
        >
          <h2 className="text-[#9548ee] text-left  font-bold py-4">
            {" "}
            Download the Official Trust Wallet App
          </h2>
          <p className="text-left">
            Head over to the app store and download the Trust Wallet app. Which
            is a wallet backed by Binance exchange. It is available on both
            Android and iOS devices.
          </p>
          <h2 className="text-[#9548ee] text-left  font-bold py-4">
            Create Your Wallet
          </h2>
          <p className="text-left">
            Once the app is installed, open it and create your wallet. All you
            need to do is provide a secure password and confirm it. You’ll be
            ready to go in no time.
          </p>
          <h2 className="text-[#9548ee] text-left  font-bold py-4">
            Backup Your Passphrase
          </h2>
          <p className="text-left">
            It is important to back up your 12-word passphrase and store it
            somewhere safe. This is the only way to recover your wallet if you
            ever lose access to it.
          </p>
        </motion.p>
        {/* <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          c        lassName="w-[18px] h-[28px] object-contain mt-[28px]"
        /> */}
      </motion.div>
    </section>
  );
};

export default BuyRexx;
