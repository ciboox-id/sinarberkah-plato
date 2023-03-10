import React from 'react';

const Hero = () => {
  return (
    <section className="bg-offwhite px-14">
      <div className="px-14">
        <img className="bg-cover bg-left hidden md:flex md:hiddine absolute bottom-20" alt="hero" src="/images/sinarberkah-bg.png" />
      </div>
      <div className="container mx-auto md:pt-52 flex px-5 py-24 md:flex-row flex-col items-center sm:text-center">
        <div className="lg:absolute relative lg:flex-grow lg:right-96 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 text-dark-main font-mulish font-extrabold">Jasa Cutting dan
            <br className="hidden lg:inline-block" /> Ornament
          </h1>
          <p className="mb-12 leading-relaxed relative z-50 font-medium text-lg text-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nunc vulputate libero et velit interdum, ac aliquet odio <br />  mattis. Class aptent taciti </p>
          <div className="flex justify-center">
            <button className="inline-flex text-offwhite bg-main-color border-0 py-2 px-6 text-base rounded-lg shadow-md">Layanan Kami</button>
          </div>
          <img className="object-cover object-center md:flex absolute top-64 right-60 hidden" alt="hero" src="/images/01.png" />
        </div>
        <div className="ml-auto mt-auto lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center md:inline hidden" alt="hero" src="/images/hero-bg.png" />
        </div>
      </div>
    </section>
  )
}

export default Hero;