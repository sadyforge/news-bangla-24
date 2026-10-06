
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  url: string;
  publishedAt: string;
}

const MainNews = ({ news }:{news:News[]}) => {
  const [firstNews, ...otherNews] = news;

  if (!firstNews) return null;

  return (
    <div className="flex flex-col gap-6 p-2 sm:flex-row">
      <div className="w-full sm:w-1/2">
        <Link href={firstNews.url || "#"} className="group block">
          <div className="overflow-hidden rounded-lg bg-base-100">
            <div className="relative h-[250px] w-full overflow-hidden sm:h-[300px]">
              <Image
                src={firstNews.imageUrl}
               fill
                priority
                className="object-cover transition duration-500 group-hover:scale-105"
                alt={firstNews.title || "News image"}
              />
            </div>

            <div className="pt-4">
                            <p className="text-red-500 ">{firstNews.category}</p>

              <h2 className="text-xl font-bold leading-snug transition group-hover:text-red-600 sm:text-xl">
                {firstNews.title}
              </h2>

              {firstNews.description && (
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-base-content/70 sm:text-base">
                  {firstNews.description}
                </p>
              )}

              {firstNews.publishedAt && (
                <p className="mt-3 text-xs text-base-content/50 sm:text-sm">
                  {new Date(firstNews.publishedAt).toLocaleDateString(
                    "bn-BD",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </p>
              )}
            </div>
          </div>
        </Link>
      </div>

      {/* otherNews */}
      <div className="w-full space-x-5 sm:space-y-20 sm:w-1/2">
        {otherNews.slice(0, 4).map((on) => (
          <div
            key={on.id}
            className="flex gap-3 border-b border-base-300 pb-4"
          >
        

            <div className="flex min-w-0 flex-col justify-center">
              <p className="text-red-500 ">{on.category}</p>
              <Link href={on.url || "#"}>
                <h3 className="line-clamp-3 text-sm font-semibold leading-snug transition hover:text-red-600 sm:text-base">
                  {on.title}
                </h3>
              </Link>

              {on.publishedAt && (
                <p className="mt-2 text-xs text-base-content/50">
                  {new Date(on.publishedAt).toLocaleDateString("bn-BD", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;

