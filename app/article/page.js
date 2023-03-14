import React from 'react';

const articleData = [
  {
    imageUrl: './images/12.jpg',
    category: 'CATEGORY',
    title: 'Bitters hashtag waistcoat fashion axe chia unicorn',
    description:
      'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
    date: '12 Jun 2023',
  },
  {
    imageUrl: './images/12.jpg',
    category: 'CATEGORY',
    title: 'Meditation bushwick direct trade taxidermy shaman',
    description:
      'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
    date: '12 Jun 2023',
  },
  {
    imageUrl: './images/12.jpg',
    category: 'CATEGORY',
    title: 'Woke master cleanse drinking vinegar salvia',
    description:
      'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
    date: '12 Jun 2023',
  },
];

const Article = ({ article }) => {
  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:mb-0 mb-6 flex-shrink-0 flex flex-col lg:w-1/4 md:w-1/2 p-4 w-full">
        <img
          className="object-cover object-center w-full h-full"
          src={article.imageUrl}
          alt="article"
        />
      </div>
      <div className="md:flex-grow ml-8 pt-8">
        <p className="text-sm font-semibold title-font text-main-color mb-4">
          {article.category}
        </p>
        <h2 className="text-2xl font-bold text-dark-main title-font mb-2">
          {article.title}
        </h2>
        <p className="leading-relaxed text-gray font-semibold">
          {article.description}
        </p>
        <p className="mt-6 text-gray text-sm">{article.date}</p>
        <a className="text-dark-main inline-flex items-center mt-5 hover:text-main-color">
          Lihat Selengkapnya
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

const News = () => {
  return (
    <section className="px-14">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {articleData.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default News;