import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import History from "@/components/History";
import Technology from "@/components/Technology";
import Services from "@/components/Services";
import Evidence from "@/components/Evidence";
import NoticeSection from "@/components/NoticeSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <History />
      <Technology />
      <Services />
      <Evidence />
      <NoticeSection />
      <Footer />
    </main>
  );
}
