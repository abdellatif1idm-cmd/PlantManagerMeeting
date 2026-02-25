import React from 'react';
import NewsGrid from "./elements/NewsGrid";
import MNBlurWrapper from "@/components/ui/motions/MNBlurWrapper";
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
  EventNewsTitle: string;
  EventNewsDescription: string;
  EventNewsList: NewsItem[];
}

const data = newsData as NewsData;

const IndustryNews = () => {
  return (
    <section className="w-full relative overflow-hidden py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <MNBlurWrapper initialPosition="bottom" className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold border-l-4 border-(--accent-9) pl-4 inline-block">
            {data.EventNewsTitle}
          </h2>
          <p className="text-base lg:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            {data.EventNewsDescription}
          </p>
        </MNBlurWrapper>

        <NewsGrid />
      </div>
    </section>
  );
};

export default IndustryNews;