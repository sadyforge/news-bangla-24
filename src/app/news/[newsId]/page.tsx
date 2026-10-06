import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Byline {
  name: string;
  role: string;
}

interface Topic {
  id: string;
  name: string;
}

interface BodyText {
  type: "text";
  text: string;
}

interface BodySubheading {
  type: "subheading";
  text: string;
}

interface BodyImage {
  type: "image";
  url: string;
  width: number;
  height: number;
  caption?: string;
  altText?: string;
  copyrightHolder?: string;
}

type BodyBlock = BodyText | BodySubheading | BodyImage;

interface News {
  id: string;
  title: string;
  description: {
    blocks: unknown[];
  };
  link: string;
  firstPublished: string;
  lastPublished: string;
  byline: Byline[];
  topics: Topic[];
  tags: string[];
  imageUrl: string;
  body: BodyBlock[];
  text: string;
  wordCount: number;
  source: string;
  sourceUrl: string;
}

interface ArticleResponse {
  success: boolean;
  data: News;
}

const NewsDetailsPage = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
    {
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0",
      },
    }
  );

  // if (!res.ok) {
  //   throw new Error(`Failed to fetch article: ${res.status}`);
  // }

  const result: ArticleResponse = await res.json();
  const news = result.data;
  if(!news){
    notFound()
  }

  if (!news) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">খবর পাওয়া যায়নি</h1>
      </div>
    );
  }

  const publishedDate = new Date(news.lastPublished);

  const formattedDate = publishedDate.toLocaleDateString("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = publishedDate.toLocaleTimeString("bn-BD", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const leadText =
    news.description?.blocks?.[0] &&
    typeof news.description.blocks[0] === "object" &&
    news.description.blocks[0] !== null
      ? (news.description.blocks[0] as {
          model?: {
            blocks?: {
              model?: {
                text?: string;
              };
            }[];
          };
        }).model?.blocks?.[0]?.model?.text || ""
      : "";

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:py-10">
      <article className="mx-auto max-w-5xl">
        <header>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {news.title}
          </h1>

          {leadText && (
            <p className="mt-5 text-lg leading-8 text-base-content/75 sm:text-xl sm:leading-9">
              {leadText}
            </p>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-base-content/60">
            {news.byline?.map((author, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="font-semibold text-base-content">
                  {author.name}
                </span>

                {author.role && <span>({author.role})</span>}
              </div>
            ))}

            <span>•</span>

            <span>{formattedDate}</span>

            <span>এ</span>

            <span>{formattedTime}</span>

            <span>•</span>

            <span>{news.wordCount} শব্দ</span>
          </div>
        </header>

        {/* <figure className="mt-8">
          <div className="relative w-full overflow-hidden bg-base-200">
            <Image
              src={news.imageUrl}
              width={1200}
              height={675}
              priority
              className="h-auto w-full object-cover"
              alt={news.title}
            />
          </div>
        </figure> */}

        <div className="mt-8">
          {news.body?.map((block, index) => {
            if (block.type === "text") {
              return (
                <p
                  key={index}
                  className="mb-6 text-[17px] leading-8 text-base-content/85 sm:text-lg sm:leading-9"
                >
                  {block.text.split("\n").map((paragraph, paragraphIndex) => (
                    <span key={paragraphIndex}>
                      {paragraph}

                      {paragraphIndex < block.text.split("\n").length - 1 && (
                        <br />
                      )}
                    </span>
                  ))}
                </p>
              );
            }

            if (block.type === "subheading") {
              return (
                <h2
                  key={index}
                  className="mb-5 mt-10 border-l-4 border-red-600 pl-4 text-2xl font-bold leading-tight sm:text-3xl"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "image") {
              return (
                <figure key={index} className="my-8">
                  <div className="relative overflow-hidden bg-base-200">
                    <Image
                      src={block.url}
                      width={block.width || 1024}
                      height={block.height || 576}
                      className="h-auto w-full object-cover"
                      alt={block.altText || block.caption || news.title}
                    />
                  </div>

                  {block.caption && (
                    <figcaption className="mt-2 text-sm leading-6 text-base-content/60">
                      {block.caption}
                    </figcaption>
                  )}

                  {block.copyrightHolder && (
                    <p className="mt-1 text-xs text-base-content/40">
                      {block.copyrightHolder}
                    </p>
                  )}
                </figure>
              );
            }

            return null;
          })}
        </div>

        {news.tags?.length > 0 && (
          <div className="mt-12 border-t border-base-300 pt-6">
            <div className="flex flex-wrap gap-2">
              {news.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-base-200 px-3 py-1.5 text-sm text-base-content/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 border-t border-base-300 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-base-content/50">
                © 2026 BanglaBulletin
              </p>

              <p className="mt-1 text-sm text-base-content/50">
                Source: {news.source}
              </p>
            </div>

            {news.sourceUrl && (
              <Link
                href={news.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                মূল সূত্রে পড়ুন →
              </Link>
            )}
          </div>
        </div>
      </article>
    </main>
  );
};

export default NewsDetailsPage;