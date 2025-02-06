"use client";

import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  FaPython,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaJira,
  FaMicrochip,
} from "react-icons/fa";
import {
  SiDjango,
  SiFastapi,
  SiTensorflow,
  SiPytorch,
  SiKubernetes,
  SiFlask,
  SiNginx,
  SiPostgresql,
  SiGooglecloud,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: FaPython },
  { name: "Django", icon: SiDjango },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Flask", icon: SiFlask },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "PyTorch", icon: SiPytorch },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "SQL", icon: FaDatabase },
  { name: "Nginx", icon: SiNginx },
  { name: "Docker", icon: FaDocker },
  { name: "Git", icon: FaGitAlt },
  { name: "AWS", icon: FaAws },
  { name: "GCP", icon: SiGooglecloud },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "CI/CD", icon: FaMicrochip },
  { name: "Agile", icon: FaJira },
];

export function SkillsSection() {
  return (
    <section id="skills" className="my-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-10"
        >
          Skills & Tech Stack
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {skills.map((skill, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-full shadow-lg "
                  >
                    <skill.icon size={50} color="#7c3aed" />
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
