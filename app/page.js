"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import Delivery from "@/components/Delivery";
import Hero from "@/components/Hero";
import Material from "@/components/Material";
import Portfolio from "@/components/Portfolio";
import Promo from "@/components/Promo";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Delivery />
      <Portfolio />
      <Promo />
      <Material />
      <Contact />
    </main>
  )
}
