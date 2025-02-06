"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

export const DarkBackground = () => {
  const shootingStarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shootingStarRef.current) {
      gsap.to(shootingStarRef.current, {
        x: "120vw",
        y: "60vh",
        duration: 2,
        ease: "power1.in",
        repeat: -1,
        repeatDelay: 5,
        delay: 2,
      });
    }
  }, []);

  return (
    <div className="fixed inset-1 overflow-hidden bg-[#1b1c1e]">
      <Moon />
      <Stars />
      <ShootingStar ref={shootingStarRef} />
      <Mountains />
      <Trees />
      <Fields />
    </div>
  );
};

const Moon: React.FC = () => (
  <motion.div
    className="absolute w-20 h-20 bg-white rounded-full top-32 right-32"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 2, delay: 0.5 }}
  >
    <div className="absolute w-[4.5rem] h-20 bg-[#1b1c1e] rounded-full -right-1 -top-2 " />
  </motion.div>
);

const Stars: React.FC = () => (
  <>
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 2 + Math.random() * 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    ))}
  </>
);

const ShootingStar = React.forwardRef<HTMLDivElement>((_, ref) => (
  <div
    ref={ref}
    className="absolute w-1 h-1 bg-white rounded-full -left-4 top-20"
    style={{ boxShadow: "0 0 4px 2px rgba(255, 255, 255, 0.4)" }}
  />
));

ShootingStar.displayName = "ShootingStar";

const Mountains: React.FC = () => (
  <motion.div
    className="absolute bottom-0 left-0 w-full"
    initial={{ y: "100%" }}
    animate={{ y: 0 }}
    transition={{ duration: 1.5, delay: 1 }}
  >
    <svg viewBox="0 0 1440 320" className="w-full">
      <path
        fill="#1a1a1a"
        d="M0,224L60,208C120,192,240,160,360,165.3C480,171,600,213,720,213.3C840,213,960,171,1080,149.3C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  </motion.div>
);
const Trees: React.FC = () => (
  <motion.div
    className="absolute bottom-0 left-0 w-full"
    initial={{ y: "100%" }}
    animate={{ y: 0 }}
    transition={{ duration: 1.5, delay: 1.1 }}
  >
    <svg viewBox="0 0 1440 320" className="w-full">
      <path
        fill="#0a0a0a"
        d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,176C672,160,768,128,864,128C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </motion.div>
);
const Fields: React.FC = () => (
  <motion.div
    className="absolute bottom-0 left-0 w-full"
    initial={{ y: "100%" }}
    animate={{ y: 0 }}
    transition={{ duration: 1.5, delay: 1.2 }}
  >
    <svg viewBox="0 0 1440 320" className="w-full">
      <path
        fill="#0f0f0f"
        d="M0,32L48,69.3C96,107,192,181,288,181.3C384,181,480,107,576,80C672,53,768,75,864,101.3C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </motion.div>
);
