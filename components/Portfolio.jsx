"use client"
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from '@/library/axios';

const Portfolio = () => {

  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    axios.get("/gallery/posts").then((e) => { setGallery(e.data.data) })
  }, [])


  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 100,
    cssEase: "linear",
  };

  // const index = [1, 2, 3, 4, 5, 6]

  return (
    <section className="px-14 py-24">
      <div className="container mx-auto flex md:flex-row flex-col items-start justify-end">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mx-auto items-center">
          <div className="pt-10">
            <Slider {...settings}>
              {gallery.map((index) => {
                return (
                  <div className="wrapper">
                    <img src={`https://api-plato.vercel.app/${index.image}`} alt="" />
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-36 md:pl-16 flex flex-col md:items-start md:text-left items-start text-center">
          <h2 className="text-main-color mb-3 text-base font-bold uppercase mx-auto md:mx-0">Portofolio Kami</h2>
          <h1 className="title-font sm:text-4xl text-4xl mb-6 font-bold text-dark-main font-mulish">Project Yang Pernah
            <br className="hidden lg:inline-block" /> Kami Kerjakan
          </h1>
          <p className="mb-10 leading-relaxed text-gray font-medium text-lg">Sangat ideal untuk bermitra dengan kami karena sudah <br /> tidak diragukan lagi cara kami dalam menangani <br /> orderan dari anda semua</p>
          <div className="flex w-full justify-center items-center">
            <button className="inline-flex items-center bg-main-color text-offwhite border-0 py-2 px-4 rounded-lg shadow-md mt-4 md:mt-0 md:relative md:mx-auto md:ml-0">Lihat Semua</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;