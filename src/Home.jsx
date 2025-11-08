import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Certificates from "./components/Certificates";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { StarsCanvas } from "./components/canvas";

const Home = () => {
  return (
    <div className="relative z-0 bg-[#050816]">
      <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <div className="relative z-0">
        <StarsCanvas />
        <Experience />
        <Education />
        <Tech />
        <Works />
        <Certificates />
        <Resume />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
