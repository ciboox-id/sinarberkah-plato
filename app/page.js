"use client";
import Contact from "./Section/Contact";
import Delivery from "./Section/Delivery";
import Hero from "./Section/Hero";
import Material from "./Section/Material";
import Portfolio from "./Section/Portfolio";
import Product from "./Section/Product";
import Promo from "./Section/Promo";
import Services from "./Section/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Product />
      <Services />
      <Delivery />
      <Portfolio />
      <Promo />
      <Material />
      <Contact />
    </main>
  );
}
