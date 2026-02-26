import React from 'react';
import NewsGrid from "./elements/NewsGrid";
import { motion } from "motion/react";
import newsData from "@/data/fr/6-6-industry-news.json";

interface NewsData {
  EventNewsTitle: string;
  EventNewsDescription: string;
}

const data = newsData as NewsData;

const IndustryNews = () => {
  return (
    <section className="w-full relative py-16 lg:py-24" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container mx-auto px-4 lg:px-6 flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4"
          >
            <div
              className="w-1 h-10 rounded-full flex-shrink-0"
              style={{ background: 'var(--accent-9)' }}
            />
            <h2 className="text-3xl lg:text-5xl font-black leading-tight text-white">
              {data.EventNewsTitle}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="pl-5 text-sm"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            {data.EventNewsDescription}
          </motion.p>
        </div>

        {/* News layout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <NewsGrid />
        </motion.div>

      </div>
    </section>
  );
};

export default IndustryNews;