import About from "@/components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/ Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata = {
  title: "Землевпорядні та геодезичні послуги у Вінниці | ZemWin",

  description:
    "Кадастрові роботи, встановлення меж, топографічна зйомка, технічна документація та геодезичні послуги у Вінниці.",

  keywords: [
    "землевпорядник Вінниця",
    "геодезія Вінниця",
    "кадастровий номер",
    "встановлення меж",
    "топографічна зйомка",
  ],
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
