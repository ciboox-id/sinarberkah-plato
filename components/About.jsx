import React from 'react';
import { MdPlayArrow } from 'react-icons/md';

const About = () => {
  return (
    <section className="px-14 flex items-center justify-center">
      <div className="container mx-auto py-24 flex md:pl-5 md:flex-row flex-col items-center lg:items-start">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative lg:top-96">
          <img className="object-cover object-center rounded lg:absolute left-36 bottom-10" alt="hero" src="images/aboutus-1.png" />
          <img className="object-cover object-center rounded hidden lg:inline md:absolute left-72 -bottom-20" alt="hero" src="images/aboutus-2.png" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-32 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center relative md:mb-20 md:top-40">
          <h2 className="text-main-color mb-3 text-base font-bold uppercase">Tentang Kami</h2>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-dark-main font-mulish">Kami Sudah Sangat
            <br className="hidden lg:inline-block font-mulish" /> Berpengalaman
          </h1>
          <h2 className="mb-8 leading-relaxed text-xl text-gray font-medium">Sudah terjun ke bidang industri, fabrikasi, <br /> dan konstruksi lebih dari 5 tahun</h2>
          <h3 className="mb-10 leading-relaxed text-base text-gray font-medium">
            Tidak ada keraguan lagi untuk bermitra dengan kami <br />
            karena memang pengalaman kami yang sudah sangat <br />
            ahli di bidangnya
          </h3>
          <div className="flex justify-center">
            <button className="inline-flex items-center bg-main-color border-0 py-3 px-3 rounded-lg shadow-md mt-4 md:mt-0">
              <MdPlayArrow size="2rem" color='white' />
            </button>
            <button className="ml-2 inline-flex text-gray border-0 py-2 px-6 hover:text-main-color rounded text-lg font-medium items-center justify-center">watch video</button>
          </div>
        </div>
      </div>  
    </section>
  )
}

export default About;