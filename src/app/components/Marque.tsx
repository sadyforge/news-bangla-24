import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Headlines {
  id: string;
  title: string;
}

const Marque = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news?limit=10"
  );

  const data = await res.json();
  const headLines: Headlines[] = data.data;

  return (
    <div className="my-4 bg-red-600  px-6 text-white">
      <div className="mx-auto flex max-w-7xl items-center font-bold">
        <div className="z-10 bg-red-800 p-3 text-white">
          সর্বশেষ
        </div>

        <MarqueeText
          className="py-1"
          direction="right"
          duration={20}
        >
          {headLines.map((h) => (
            <span key={h.id}>
              <Link
                href={`/news/${h.id}`}
                className="hover:underline"
              >
                {h.title}
              </Link>

              <span className="mx-4">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marque;