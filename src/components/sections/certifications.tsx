"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AwardIcon } from "lucide-react";

const certifications = [
  {
    title: "Machine Learning",
    institution: "Stanford University",
    platform: "Coursera",
  },
  {
    title: "Deep Learning Specialization",
    institution: "DeepLearning.ai",
    platform: "Coursera",
  },
  {
    title: "AI for Everyone",
    institution: "DeepLearning.ai",
    platform: "Coursera",
  },
  {
    title: "Getting Started with TensorFlow 2",
    institution: "Imperial College London",
    platform: "Coursera",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function CertificationsSection() {
  return (
    <section id="certifications" className="my-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-10"
        >
          Certifications
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-4"
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="transition-all duration-300 hover:shadow-lg ">
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-4">
                    <AwardIcon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{cert.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="default" className="text-xs">
                      {cert.platform}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Verified
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
