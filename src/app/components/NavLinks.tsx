import Link from "next/link";

interface Navs {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

const NavLinks = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/categories",
    {
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0",
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch categories: ${res.status}`);
  }

  const data = await res.json();

  const nav: Navs[] = data.data;
  const filterdNavs = nav.filter((n) => n.scrapable);

  return (
    <div className="flex justify-center mx-4  gap-6 text-lg">
      <Link className="hover:text-red-600" href="/">হোম</Link>

      {filterdNavs.map((n) => (
        <Link className="hover:text-red-600" key={n.slug} href={`/category/${n.slug}`}>
          {n.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;