import React from "react";
// import { Link } from "react-router-dom";

const Material = () => {
  const materials = [
    {
      name: "Plat Besi",
      thickness: "Tebal 2-5mm",
      description: ["Mentahan/finishing", "Indoor/outdoor"],
    },
    {
      name: "Akrilik",
      thickness: "Tebal 2-5mm",
      description: ["Mentahan/finishing", "Indoor/outdoor"],
    },
    {
      name: "PVC",
      thickness: "Tebal",
      description: ["Banyak Warna", "Bagus untuk hiasan"],
    },
    {
      name: "MDF",
      thickness: "Tebal 9mm",
      description: ["Mentahan/finishing", "Indoor/outdoor"],
    },
  ];

  return (
    <section className="px-14">
      <div className="container mx-auto flex py-12 md:flex-row flex-col items-center justify-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <div className="flex flex-row flex-wrap gap-8 items-center justify-center">
            {materials.map((material, index) => (
              <div
                key={index}
                className={`bg-white relative flex flex-col py-6 h-56 rounded shadow-md`}
              >
                <div className="lg:w-48 px-6">
                  <h2 className="font-mulish font-bold text-center text-dark-main text-lg">
                    {material.name}
                  </h2>
                  <p className="mt-6 mb-2 text-start text-base text-icon-color">
                    {material.thickness}
                  </p>
                  {material.description.map((desc, index) => (
                    <p
                      key={index}
                      className="mb-2 text-start text-base text-icon-color"
                    >
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h2 className="text-main-color mb-3 text-lg font-bold uppercase">
            Bahan Bahan
          </h2>
          <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold font-mulish text-dark-main">
            Kami Memiliki Bahan
            <br className="hidden lg:inline-block" /> Sesuai Kebutuhan
          </h1>
          <h2 className="mb-8 leading-relaxed text-xl font-medium text-gray">
            Pilihlah sesuai kebutuhan dan kondisi <br /> ornamen anda
          </h2>
          <p className="mb-8 leading-relaxed text-lg font-medium text-gray">
            Setiap bahan memiliki kegunaan kekurangan serta <br /> kelebihan
            masing-masing maka dapat disesuaikan <br /> dengan kondisi yang ada
          </p>
          <div className="flex justify-center">
            <button className="inline-flex items-center bg-main-color text-offwhite border-0 py-2 px-4 rounded-lg shadow-md mt-4 md:mt-0">
              Lihat Produk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Material;
