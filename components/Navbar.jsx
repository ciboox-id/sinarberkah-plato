import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-offwhite md:px-14 mx-auto">
      <div className="container mx-auto flex p-5 flex-col md:flex-row items-center">
        <a
          href="/"
          className="flex title-font font-bold items-center relative z-30 text-dark-main mb-4 md:mb-0 mx-auto md:mx-0"
        >
          <span className="text-2xl uppercase">Sinar Berkah</span>
        </a>
        <nav className="md:mr-auto md:ml-12 md:py-1 md:pl-4 flex gap-x-5 flex-wrap items-center text-base justify-center mx-auto">
          <Link href="/" className=" hover:text-main-color md:pl-0">
            Beranda
          </Link>
          <Link href="/Cart" className=" hover:text-main-color md:pl-0">
            Produk
          </Link>
          <Link href="/Portfolio" className=" hover:text-main-color">
            Portfolio
          </Link>
          <Link href="/Gallery" className=" hover:text-main-color">
            Gallery Pola
          </Link>
          <Link href="/Article" className=" hover:text-main-color md:pl-0">
            Artikel
          </Link>
        </nav>
        <a href="https://api.whatsapp.com/send?phone=+62 81274000418&text=Halo!">
          <button className="md:inline-flex items-center hidden bg-main-color text-offwhite border-0 py-2 px-4 rounded-lg shadow-md text-base mt-4 md:mt-0 mx-auto md:mx-0">
            Hubungi Kami
          </button>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
