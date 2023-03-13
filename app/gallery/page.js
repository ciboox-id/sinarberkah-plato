import React from 'react';

const Gallery = () => {
  return (
    <section>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">Gallery Pola Sinar Berkah</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-medium text-gray">Kami percaya bahwa seni memiliki kekuatan untuk menginspirasi, mentransformasi, dan menghubungkan orang dari berbagai latar belakang dan budaya. Oleh karena itu, kami berusaha menciptakan lingkungan yang ramah dan inklusif di mana semua orang dapat menghargai dan menikmati keindahan seni.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {[
            {
              imgUrl: "./images/15.jpg",
              imgAlt: "gallery",
              title: "Shooting Stars",
              subtitle: "THE SUBTITLE",
              description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            },
            {
              imgUrl: "./images/16.jpg",
              imgAlt: "gallery",
              title: "The Catalyzer",
              subtitle: "THE SUBTITLE",
              description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            },
            {
              imgUrl: "./images/18.jpg",
              imgAlt: "gallery",
              title: "The 400 Blows",
              subtitle: "THE SUBTITLE",
              description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            },
            {
              imgUrl: "./images/22.jpg",
              imgAlt: "gallery",
              title: "Neptune",
              subtitle: "THE SUBTITLE",
              description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            },
            {
              imgUrl: "./images/33.jpg",
              imgAlt: "gallery",
              title: "The 400 Blows",
              subtitle: "THE SUBTITLE",
              description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            },
            {
              imgUrl: "./images/12.jpg",
              imgAlt: "gallery",
              title: "The 400 Blows",
              subtitle: "THE SUBTITLE",
              description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            },
          ].map((item, index) => (
            <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img className="absolute inset-0 w-full h-full object-cover object-center" src={item.imgUrl} alt={item.imgAlt} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 hover:bg-sec-blue">
                  <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">{item.subtitle}</h2>
                  <h1 className="title-font text-lg font-medium font-mulish text-gray-900 mb-3">{item.title}</h1>
                  <p className="leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;