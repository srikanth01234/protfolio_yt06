import React from "react";
import { HERO_CONTENT } from "../constants";
// import React from "react";
import profilePic from "../assets/kevinRushProfile.png";
import { delay, motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pd-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-black  text-6xl font-normal tracking-normal lg:mt-16 lg:text-8xl "
            >
              Srikanth M
            </motion.h1>
            <motion.span
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="pb-10 bg-gradient-to-r from-blue-900 vai-slate-500 to-green-500
                bg-clip-text text-3xl tracking-tight text-transparent"
            >
              React Js developer
            </motion.span>
            <motion.p
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl text-black   py-6  tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center border-4 border-neutral-500 rounded-4xl w-150 h-142">
            <motion.img className="w-150 h-140 object-fit rounded-4xl "
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="kevin Rush"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
