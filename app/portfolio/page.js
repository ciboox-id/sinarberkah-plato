import React from 'react';

const Portfolio = () => {
  return (
    <section className="px-14">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-2xl font-bold title-font mb-2 text-dark-main">Portofolio Sinar Berkah</h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed font-medium text-gray">Selamat datang di Portofolio Sinar Berkah! <br /> <br /> Kami adalah sebuah tim kreatif yang berfokus pada desain grafis, branding, dan pemasaran digital. Sebagai penyedia layanan yang berdedikasi, kami percaya bahwa setiap proyek adalah kesempatan untuk menciptakan sesuatu yang unik dan bernilai.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {[
            {
              imgSrc: './images/12.jpg',
              title: 'Chichen Itza',
              subtitle: 'SUBTITLE',
              text: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
            },
            {
              imgSrc: './images/15.jpg',
              title: 'Colosseum Roma',
              subtitle: 'SUBTITLE',
              text: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
            },
            {
              imgSrc: './images/16.jpg',
              title: 'Great Pyramid of Giza',
              subtitle: 'SUBTITLE',
              text: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
            },
            {
              imgSrc: './images/18.jpg',
              title: 'San Francisco',
              subtitle: 'SUBTITLE',
              text: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
            },
          ].map(({ imgSrc, title, subtitle, text }) => (
            <div key={title} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-offwhite p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={imgSrc} alt={title} />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{subtitle}</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{title}</h2>
                <p className="leading-relaxed text-base">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
