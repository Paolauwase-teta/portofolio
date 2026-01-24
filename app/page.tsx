import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Solutions from "@/components/Solutions";
import Insights from "@/components/Insights";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000]">
      <Navbar />
      <Hero />
      <div className="space-y-24 md:space-y-32">
        <About />
        <Features />
        <Solutions />
        <Insights />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
