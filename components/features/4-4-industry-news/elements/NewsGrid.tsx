"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import newsData from "@/data/fr/6-6-industry-news.json";

interface NewsItem {
  id: number;
  category: string;
  date: string;
  title: string;
  content: string;
  image: string;
  link: string;
}

interface NewsData {
  EventNewsList: NewsItem[];
}

const data = newsData as NewsData;

const NewsGrid: React.FC = () => {
  const news: NewsItem[] = data.EventNewsList;
  const [featured, setFeatured] = useState<NewsItem>(news[0]);
  const sideItems = news.filter(n => n.id !== featured.id);

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-0 rounded-2xl overflow-hidden"
      style={{ border: '1px solid rgba(255,255,255,0.07)' }}
    >

      {/* ── LEFT: Featured big image ── */}
      <motion.div
        key={featured.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col justify-end overflow-hidden"
        style={{ minHeight: 520 }}
      >
        {/* Image */}
        <Image
          src={featured.image}
          alt={featured.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 60vw"
          priority
        />

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.1) 100%)',
          }}
        />

        {/* Content over image */}
        <motion.div
          key={featured.id + '-content'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="relative p-8 lg:p-10 flex flex-col gap-4"
        >
          {/* Category badge */}
          <span
            className="inline-flex w-fit items-center px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{
              background: 'color-mix(in srgb, var(--accent-9) 20%, transparent)',
              border: '1px solid color-mix(in srgb, var(--accent-9) 45%, transparent)',
              color: 'var(--accent-9)',
            }}
          >
            {featured.category}
          </span>

          <h3
            className="text-2xl lg:text-3xl font-bold leading-snug text-white"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
          >
            {featured.title}
          </h3>

          <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 520 }}>
            {featured.content}
          </p>

          <div className="flex items-center justify-between mt-2">
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              {featured.date}
            </span>
            <Link
              href={featured.link}
              className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
              style={{ color: 'var(--accent-9)' }}
            >
              Lire l'article
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* ── RIGHT: Article list ── */}
      <div
        className="flex flex-col divide-y"
        style={{
          background: '#0d0d0d',
          borderLeft: '1px solid rgba(255,255,255,0.07)',
          divideColor: 'rgba(255,255,255,0.06)',
        }}
      >
        {sideItems.map((item, index) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            onClick={() => setFeatured(item)}
            className="w-full text-left flex gap-4 p-5 group transition-all duration-200"
            style={{
              background: featured.id === item.id
                ? 'color-mix(in srgb, var(--accent-9) 8%, transparent)'
                : 'transparent',
              borderLeft: featured.id === item.id
                ? '3px solid var(--accent-9)'
                : '3px solid transparent',
            }}
          >
            {/* Thumbnail */}
            <div className="relative flex-none rounded-lg overflow-hidden" style={{ width: 72, height: 72 }}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="72px"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-1.5 flex-1 min-w-0">
              <span
                className="text-[10px] font-bold tracking-widest uppercase truncate"
                style={{ color: 'var(--accent-9)' }}
              >
                {item.category}
              </span>
              <h4
                className="text-sm font-semibold leading-snug line-clamp-2 transition-colors duration-200"
                style={{ color: featured.id === item.id ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.75)' }}
              >
                {item.title}
              </h4>
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                {item.date}
              </span>
            </div>
          </motion.button>
        ))}

        {/* Bottom CTA */}
        <div className="p-5 mt-auto">
          <Link
            href="/actualites"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:gap-3"
            style={{
              background: 'color-mix(in srgb, var(--accent-9) 12%, transparent)',
              border: '1px solid color-mix(in srgb, var(--accent-9) 25%, transparent)',
              color: 'var(--accent-9)',
            }}
          >
            Toutes les actualités
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default NewsGrid;