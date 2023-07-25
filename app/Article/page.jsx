"use client";
import React, { useState, useEffect } from "react";
import axios from "@/library/axios";

const News = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    axios.get("/api/article/v1").then((e) => {
      console.log(e.data.data);
      setArticle(e.data.data);
    });
  }, []);

  return (
    <section className="px-14">
      <div className="container py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray">
          {article.map((data) => (
            <div key={data._id} className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 mr-6 flex-shrink-0 flex flex-col">
                <img className="w-64" src={data.image.image_url} alt="news" />
              </div>
              <div className="md:flex-grow">
                <h2 className="text-sm title-font font-bold text-main-color uppercase mb-2">
                  {data.category}
                </h2>
                <h2 className="text-2xl font-bold text-dark-main font-mulish mb-2">
                  {data.title}
                </h2>
                {data.content}
                <p className="mt-5 text-gray text-sm">{data.createdAt}</p>
                <a className="text-indigo-500 inline-flex items-center mt-4 hover:text-main-color">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
