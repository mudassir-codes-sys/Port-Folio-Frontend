import { useEffect } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import FooterLast from "./Components/Footer";
import Hero from "./Components/Hero";
import PortFolio from "./Components/PortFolio";
import Skills from "./Components/Skills";
import { Toaster } from "sonner";
import Chatbot from "./Components/Chatbot";

function App() {
  return (
    <>
      <Toaster richColors position="top-center" />
      <Hero />
      <About />
      <Skills />
      <PortFolio />
      <Contact />
      <Chatbot />
      <FooterLast />
    </>
  );
}

export default App;
