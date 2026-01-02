// Tech.jsx
import React, { useEffect, useState, memo, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useNavigate } from "react-router-dom";

// Lazy load the heavy BallCanvas
const BallCanvas = lazy(() => import("./canvas/Ball"));

// Simple fallback for tech balls
const BallLoader = memo(() => (
  <div className="w-full h-full rounded-full bg-tertiary animate-pulse flex items-center justify-center">
    <div className="w-12 h-12 rounded-full bg-[#915eff]/20"></div>
  </div>
));

BallLoader.displayName = "BallLoader";

const TechBall = memo(({ icon, name }) => (
  <div className="sm:w-36 w-28 h-28 sm:h-36" title={name}>
    <Suspense fallback={<BallLoader />}>
      <BallCanvas icon={icon} />
    </Suspense>
  </div>
));

TechBall.displayName = "TechBall";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    // Delay rendering tech balls for better performance
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  const visibleTechs = isMobile ? technologies.slice(0, 5) : technologies;

  return (
    <>
      <motion.div className="w-full text-center py-10">
        <p className={styles.sectionSubText}>What I Use to Build</p>
        <h2 className={`${styles.sectionHeadText} animated-gradient-text`}>Technologies</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {isVisible && visibleTechs.map((tech) => (
          <TechBall key={tech.name} icon={tech.icon} name={tech.name} />
        ))}

        {isMobile && (
          <motion.div
            onClick={() => navigate("/all-technologies")}
            className="sm:w-36 w-28 h-28 sm:h-36 rounded-full border border-dashed border-[#915eff] flex items-center justify-center cursor-pointer hover:bg-[#915eff]/10 text-[#915eff] text-sm font-medium transition"
            whileHover={{ scale: 1.1, borderStyle: "solid" }}
            whileTap={{ scale: 0.95 }}
          >
            + More
          </motion.div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
