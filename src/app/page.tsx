import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technology from "@/components/Technology";
import Services from "@/components/Services";
import Evidence from "@/components/Evidence";
import NoticeSection from "@/components/NoticeSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Technology />
      <Services />
      <Evidence />
      <NoticeSection />
      <Contact />
      <Footer />
    </main>
  );
}
