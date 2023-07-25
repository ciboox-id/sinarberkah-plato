import React from "react";

const Delivery = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto flex md:flex-row flex-col items-center">
        <div className="flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center relative">
          <div className="flex bg-offwhite items-center justify-center">
            <img
              className="object-cover object-center"
              alt="delivery"
              src="images/delivery-bg.png"
            />
          </div>
          <h2 className="text-base text-main-color tracking-widest font-bold title-font uppercase mb-1 md:pl-14 top-28 absolute">
            Fasilitas Kami
          </h2>
          <h1 className="md:text-5xl text-3xl font-bold title-font text-dark-main mb-16 md:pl-14 top-36 absolute">
            Pengiriman Seluruh Indonesia
          </h1>
          <a href="https://api.whatsapp.com/send?phone=+6285156674215&text=Halo!">
            <button className="inline-flex items-center bg-main-color text-offwhite text-base font-medium border-0 py-2 px-4 md:absolute md:left-14 md:top-64 rounded-lg shadow-md mt-4 md:mt-0 relative mx-auto top-36">
              Pesan Sekarang
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
