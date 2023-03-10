"use client"
import About from "@/components/About";
import Delivery from "@/components/Delivery";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Delivery />
      <Portfolio />
    </main>
  )
}
