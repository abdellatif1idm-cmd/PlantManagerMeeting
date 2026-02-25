"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

interface NewsItem {
  id: number;
  category: string;
  date: string;
  title: string;
  content: string;
  image: string;
  link: string;
}

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-3 left-3 bg-(--accent-9) text-white text-xs px-2 py-1 rounded-full">
          {news.category}
        </div>
      </div>

      {/* Contenu */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
          <i className="ri-calendar-line" />
          <span>{news.date}</span>
        </div>
        
        <h3 className="text-lg font-bold mb-2 line-clamp-2">{news.title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{news.content}</p>
        
        <Link 
          href={news.link}
          className="mt-auto inline-flex items-center gap-1 text-(--accent-9) font-medium text-sm hover:gap-2 transition-all"
        >
          Lire l'article
          <i className="ri-arrow-right-line" />
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;