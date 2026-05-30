import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio"; // 1. Import Portfolio

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Portfolio /> {/* 2. Letakkan di sini */}
    </main>
  );
}