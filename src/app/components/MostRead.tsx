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

const MostReadPage = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/most-read",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch most read news: ${res.status}`);
  }

  const data = await res.json();
  const mostRead: News[] = data.data;

  return (
    <section className="my-10 card bg-base-100 border-gray-500">
      <div className="mb-6 flex items-center gap-3 border-b-2 border-red-600 pb-3">
        

        <h2 className="text-2xl font-bold sm:text-3xl">
          সর্বাধিক পঠিত
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-1">
        {mostRead.map((news, index) => (
          <Link
            key={news.id}
            href={news.link || "#"}
            target="_blank"
            className="group"
          >
            <article className="flex gap-4 border-b border-base-300 pb-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-red-600 text-xl font-bold text-white">
                {index + 1}
              </div>

           

              <div className="min-w-0 flex-1">
              

                <h3 className="line-clamp-2 text-base font-bold leading-snug transition group-hover:text-red-600 ">
                  {news.title}
                </h3>

               
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MostReadPage;