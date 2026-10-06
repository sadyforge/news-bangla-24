
import NewsCard from "@/app/components/NewsCard";
import { notFound } from "next/navigation";

export interface News {
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

export interface CategoryResponse {
  title: string;
  data: News[];
}


const CategoryNews = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
    {
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0",
      },
    },
  );

  if (!res.ok) {
    notFound();
  }

  const data: CategoryResponse = await res.json();

  if (!data?.data || data.data.length === 0) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl space-y-4 px-4 py-8">
      <h2 className="border-b-2 border-red-800 pb-2 text-2xl font-bold">
        {data.title}
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.data.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;

