"use client";
import React, { useState, useEffect } from "react";
import axios from "@/library/axios";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    axios.get("/api/gallery/v1").then((e) => {
      console.log(e.data.data);
      setGallery(e.data.data);
    });
  }, []);

  return (
    <section className="px-14">
      <div className="container py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-dark-main">
            Gallery Pola Sinar Berkah
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-medium text-gray">
            Kami percaya bahwa seni memiliki kekuatan untuk menginspirasi,
            mentransformasi, dan menghubungkan orang dari berbagai latar
            belakang dan budaya. Oleh karena itu, kami berusaha menciptakan
            lingkungan yang ramah dan inklusif di mana semua orang dapat
            menghargai dan menikmati keindahan seni.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {gallery.map((data) => (
            <div key={data._id} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={data.image.image_url}
                  alt={data.title}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 hover:bg-offwhite">
                  <h2 className="tracking-widest text-sm title-font font-bold text-main-color mb-1">
                    {data.type}
                  </h2>
                  <h1 className="title-font text-lg font-semibold font-mulish text-gray-900 mb-3">
                    {data.title}
                  </h1>
                  <p className="leading-relaxed">{data.description}</p>
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
