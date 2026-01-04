import { Navbar } from "@/src/components/modules/marketing/Navbar";
import { Hero } from "@/src/components/modules/marketing/Hero";
import { About } from "@/src/components/modules/marketing/About";
import { Gallery } from "@/src/components/modules/marketing/Gallery";
import { Footer } from "@/src/components/ui/Footer";
import { SectionDivider } from "@/src/components/ui/SectionDivider";

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
