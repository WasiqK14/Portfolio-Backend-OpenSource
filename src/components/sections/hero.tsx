"use client";

import { motion } from "framer-motion";
import { WavyBackground } from "../ui/wavy-background";

export function HeroSection() {
  

  return (
    <WavyBackground
      id="home"
      className="min-h-screen z-10 flex lg:flex-row md:flex-col sm:flex-col items-center justify-center"
      blur={0}
      colors={["#7c3aed"]}
    >
      <div className="text-center container pb-72 ">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-4"
        >
          Muhammad Ahmad Bin Shafiq
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl mb-8"
        >
          Backend Python Engineer & AI Specialist
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        ></motion.div>
      </div>
    </WavyBackground>
  );
}
