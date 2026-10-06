import MainNews from './components/MainNews';
import MostReadPage from './components/MostRead';
import NewsCard from './components/NewsCard';

interface OtherSections {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
    source: string;
    link: string;
    lastPublished: string;
  }[];
}

const HomePage = async() => {
  const res=await fetch("https://news-api-v2.vercel.app/api/news/sections")
  const data=await res.json()
  const sections=data.data;
  const mainNews=sections[0].articles
  const otherSections:OtherSections[]=sections.slice(1)

  return (
    <div>


    <div className='grid grid-cols-1 gap-4 sm:gap-4 sm:grid-cols-3 max-w-7xl mx-auto my-8'>

{/* news section */}
<div className='col-span-2'>
<MainNews news={mainNews}/>


<div className="my-6 grid gap-5">
  {otherSections.map((ot,i) => (
    <div key={i}>
      <h3 className="font-bold my-4 text-2xl border-b-2 border-red-500">{ot.title}</h3>
    
      <div className="grid grid-cols-1    gap-5 sm:grid-cols-3">
        {ot.articles.map((news) => (
          <NewsCard news={news} key={news.id} />
        ))}
      </div>
    </div>
  ))}
</div>






</div>
{/* most read section */}
<div className='col-span-1  h-20'>
<MostReadPage/>
</div>


    </div>
   
    </div>
  );
};

export default HomePage;