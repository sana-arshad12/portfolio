import React, { Suspense, lazy, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy load non-critical components for better performance
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Certificates = lazy(() => import("./components/Certificates"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars").then(module => ({ default: module.default })));

// Simple loading placeholder
const SectionLoader = () => (
  <div className="w-full min-h-[200px] flex items-center justify-center">
    <div className="loader"></div>
  </div>
);

const Home = () => {
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    // Delay stars canvas for better initial load
    const timer = setTimeout(() => setShowStars(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative z-0 bg-[#050816]">
      <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <Navbar />
        <Hero />
      </div>
      
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      
      <div className="relative z-0">
        {showStars && (
          <Suspense fallback={null}>
            <StarsCanvas />
          </Suspense>
        )}
        
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Education />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Tech />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Works />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Certificates />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Resume />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
