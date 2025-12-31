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

      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Hero />

          <div className="container">
            <SectionDivider />
            <About />
            <SectionDivider />
            <Gallery />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
