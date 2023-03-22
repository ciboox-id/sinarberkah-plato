"use client";
import React, { useState, useEffect } from "react";
import axios from "@/library/axios";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    axios.get("/api/gallery/v1/portfolio").then((e) => {
      console.log(e.data.data);
      setPortfolio(e.data.data);
    });
  }, []);

  return (
    <section className="px-14">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-2xl font-bold title-font mb-2 text-dark-main">
              Portofolio Sinar Berkah
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed font-medium text-gray">
            Selamat datang di Portofolio Sinar Berkah! <br /> <br /> Kami adalah
            sebuah tim kreatif yang berfokus pada desain grafis, branding, dan
            pemasaran digital. Sebagai penyedia layanan yang berdedikasi, kami
            percaya bahwa setiap proyek adalah kesempatan untuk menciptakan
            sesuatu yang unik dan bernilai.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {portfolio.map((data) => (
            <div key={data._id} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-offwhite p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={data.image.image_url}
                  alt={data.title}
                />
                <h3 className="tracking-widest text-main-color text-xs font-bold title-font">
                  {data.type}
                </h3>
                <h2 className="text-lg text-dark-main font-semibold title-font mb-4">
                  {data.title}
                </h2>
                <p className="leading-relaxed text-base">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
