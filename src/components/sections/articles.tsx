"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, BookOpenIcon } from "lucide-react";

const articles = [
  {
    title: "K-Means Clustering with Python",
    publication: "Towards Data Science",
    date: "Jul 24, 2020",
    link: "https://towardsdatascience.com/k-means-clustering-with-python-66288925e5f6/?source=friends_link&sk=42e38b33f403937ccc9f2392ad7df34d",
    tags: ["Python", "Machine Learning", "Clustering"],
  },
  {
    title: "Complete Guide to Linear Regression in Python",
    publication: "Towards Data Science",
    date: "Jul 22, 2020",
    link: "https://towardsdatascience.com/complete-guide-to-linear-regression-in-python-d95175447255/?source=friends_link&sk=02d02aefc3f17090daf83d2707e88d8c",
    tags: ["Python", "Machine Learning", "Regression"],
  },
  {
    title: "Which methods should be used for solving linear regression?",
    publication: "KDnuggets",
    date: "January 2023",
    link: "https://www.kdnuggets.com/2020/09/solving-linear-regression.html",
    tags: ["Machine Learning", "Statistics", "Regression"],
  },
  {
    title: "Geographical Plots with Python",
    publication: "KDnuggets",
    date: "January 2023",
    link: "https://www.kdnuggets.com/2020/09/geographical-plots-python.html",
    tags: ["Python", "Data Visualization", "GIS"],
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

export function ArticlesSection() {
  return (
    <section id="articles">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100"
        >
          Articles & Publications
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {articles.map((article, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg ">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary ">{article.title}</CardTitle>
                  <CardDescription className="flex items-center  ">
                    <BookOpenIcon className="w-4 h-4 mr-2" />
                    {article.publication}
                    <span className="mx-2">•</span>
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    {article.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {article.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <motion.a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary text-foreground"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read Article
                  </motion.a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
