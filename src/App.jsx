import { useRef } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import FooterLast from "./Components/Footer";
import Hero from "./Components/Hero";
import PortFolio from "./Components/PortFolio";
import Skills from "./Components/Skills";
import { Toaster } from "sonner";

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  return (
    <>
    <Toaster />
      <Hero ref={heroRef} />
      <About ref={aboutRef} />
      <Skills />
      <PortFolio />
      <Contact />
      <FooterLast />
    </>
  );
}

export default App;
