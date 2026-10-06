
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  source: string;
  link: string;
  lastPublished: string;
}
const NewsCard = ({ news }:{news:News}) => {
  if (!news) return null;

  return (
    <Link href={`/news/${news.id}` || "#"} target="_blank" className="group block">
      <article className="overflow-hidden border border-base-300 bg-base-100 transition hover:-translate-y-1 hover:shadow-lg">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={news.imageUrl}
            width={400}
            height={300}
            className="object-cover transition duration-500 group-hover:scale-105"
            alt={news.imageAlt || news.title}
          />
        </div>

        <div className="p-4">
          <div className="mb-2 flex items-center gap-2 text-xs">
            <span className="font-semibold text-red-600">
              {news.category}
            </span>

            <span className="text-base-content/40">•</span>

            <span className="text-base-content/50">
              {news.source}
            </span>
          </div>

          <h2 className="line-clamp-2 text-xl font-bold leading-snug transition group-hover:text-red-600">
            {news.title}
          </h2>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-base-content/70">
            {news.description}
          </p>

          <div className="mt-4 flex items-center justify-between border-t border-base-300 pt-3">
            <span className="text-xs text-base-content/50">
              {new Date(news.lastPublished).toLocaleDateString("bn-BD", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>

            <span className="text-sm font-semibold text-red-600 transition group-hover:translate-x-1">
              বিস্তারিত →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;

