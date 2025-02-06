"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-10"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-center"
          >
            <p className="text-lg mb-6">
              I'm a passionate Backend Python Engineer and AI Specialist with a strong background in
              developing robust and scalable applications. My expertise lies in leveraging
              cutting-edge technologies to solve complex problems and drive innovation.
            </p>
            <p className="text-lg mb-6">
              With experience at wAI Islamabad, I've honed my skills in AI and machine learning,
              contributing to groundbreaking projects that push the boundaries of what's possible in
              the field of artificial intelligence.
            </p>
            <p className="text-lg mb-8">
              I'm constantly learning and exploring new technologies to stay at the forefront of the
              rapidly evolving tech landscape. My goal is to create impactful solutions that make a
              difference in people's lives and contribute to the advancement of AI technology.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
