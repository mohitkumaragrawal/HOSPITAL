import Hero from "@/components/Hero";

import Footer from "@/components/Footer";
import House from "@/components/Sec1";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <>
      <div style={{ scrollBehavior: "smooth" }}>
        <Hero />

        <House />
        <div id="About">
          <About />
        </div>
        <div id="Contact">
          <Contact />
        </div>
        <div data-Aos="fade-up">
          <Footer />
        </div>
      </div>
    </>
  );
}
