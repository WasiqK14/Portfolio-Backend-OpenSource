"use client";
import { InfiniteMovingCards } from "../ui/infinite-card";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="container mx-auto py-20 rounded-md flex flex-col antialiased  items-center justify-center relative overflow-clip"
    > 
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-10"
      >
        Experience
      </motion.h2>
      <InfiniteMovingCards direction="left" speed="slow">
        {testimonials.flatMap((job, jobIndex) =>
          job.responsibilities.map((responsibility, respIndex) => (
            <Card
              key={`${jobIndex}-${respIndex}`}
              className="w-[500px] h-[300px] flex flex-col shadow-lg"
            >
              <CardHeader>
                <CardTitle className="text-xl text-primary font-bold">{job.company}</CardTitle>
                <CardDescription>{job.position}</CardDescription>
                <CardDescription>{job.duration}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <h4 className="font-bold mb-2 text-primary">{responsibility.title}</h4>
                <p className="text-sm text-foreground">{responsibility.description}</p>
              </CardContent>
            </Card>
          ))
        )}
      </InfiniteMovingCards>
    </section>
  );
}

const testimonials = [
  {
    company: "wAI",
    position: "Technical Team Lead - Python",
    location: "Islamabad, Pakistan",
    duration: "July 2021 - Present",
    responsibilities: [
      {
        title: "Lead Developer for Conversational AI Platform",
        description:
          "Spearheaded the development of enterprise-level, multi-modal (speech and text), and multilingual chatbots. Managed a team to create a user-friendly platform enabling customers to design, test, and deploy their chatbots, with features for journey definition, data ingestion, and production readiness.",
      },
      {
        title: "Expert in Large Language Models (LLMs)",
        description:
          "Utilized semantic similarity for QA and transformed unstructured data into structured formats like intents, entities, queries, and responses, enhancing the conversational AI platform's capabilities.",
      },
      // ... other responsibilities
    ],
  },
  {
    company: "Ninesol",
    position: "Software Engineering Student Intern",
    location: "Islamabad, Pakistan",
    duration: "Feb 2021 - Apr 2021",
    responsibilities: [
      {
        title: "Software Engineering Intern",
        description:
          "Worked as an intern software engineer and interacted with different departments including Mobile App Development, QA, Networks, and UI/UX.",
      },
      {
        title: "Feature Development & Testing",
        description:
          "Majorly responsible for the development and testing of minor features of apps.",
      },
    ],
  },
  {
    company: "Micro-Merger PVT LTD",
    position: "Python Intern",
    location: "Islamabad, Pakistan",
    duration: "Aug 2019 - Oct 2019",
    responsibilities: [
      {
        title: "Python Intern",
        description:
          "Worked as a Python intern and explored multiple phases of the Software Development Life Cycle (SDLC).",
      },
      {
        title: "Database Management",
        description: "Mainly assisted in database management tasks.",
      },
    ],
  },
];
