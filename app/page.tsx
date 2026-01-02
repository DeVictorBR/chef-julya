import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="px-4 pt-10">
          <Hero />

          <div className="container">
            <SectionDivider />
            <About />
            <SectionDivider />
            <Gallery />
            <SectionDivider />
          </div>
      </main>

      <Footer />
    </>
  );
}
