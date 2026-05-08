import { motion } from "framer-motion";
import { Suspense, lazy, useState, useEffect } from "react";
import { styles } from "../styles";

// Lazy load the heavy 3D canvas
const ComputersCanvas = lazy(() => import("./canvas/Computers"));

const textContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const textChild = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

// Lightweight loading placeholder for 3D model
const Canvas3DLoader = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="text-center">
      <div className="loader mx-auto mb-4"></div>
      <p className="text-secondary text-sm">Loading 3D Model...</p>
    </div>
  </div>
);

const Hero = () => {
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    // Delay 3D loading to prioritize LCP content
    const timer = setTimeout(() => setShow3D(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="relative w-full h-screen mx-auto"
      aria-label="Hero section introducing Sana Arshad"
    >
      {/* Priority content for LCP - renders immediately */}
      <div
        className={`${styles.paddingX} inset-0 sm:top-[70px] top-[90px] absolute max-w-6xl flex flex-row items-start gap-5 z-10 pointer-events-none`}
      >
        <motion.div 
          className="flex flex-col justify-center items-center mt-5"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
        >
          <motion.div 
            className="w-5 h-5 rounded-full bg-[#915eff]"
            animate={{ 
              boxShadow: [
                "0 0 15px rgba(145, 94, 255, 0.4)",
                "0 0 30px rgba(145, 94, 255, 0.7)",
                "0 0 15px rgba(145, 94, 255, 0.4)"
              ]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="w-1 sm:h-80 h-40 violet-gradient"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            style={{ originY: 0 }}
          />
        </motion.div>
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="show"
        >
          <motion.h1 
            className={`${styles.heroHeadText} text-white`}
            variants={textChild}
          >
            Hi, I'm{" "}
            <motion.span 
              className="text-[#915eff] inline-block animated-gradient-text"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(145, 94, 255, 0.3)",
                  "0 0 40px rgba(145, 94, 255, 0.6)",
                  "0 0 20px rgba(145, 94, 255, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Sana Arshad
            </motion.span>
          </motion.h1>
          <motion.p 
            className={`${styles.heroSubText} mt-3 text-gray-300`}
            variants={textChild}
          >
            <span className="text-white font-semibold">Full Stack Developer</span>, <span className="text-[#00cea8]">WordPress Expert</span>{" "}
            <br className="sm:block hidden" />
            and <span className="text-[#bf61ff]">SEO Specialist</span>
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="mt-6 flex flex-wrap gap-3 pointer-events-auto"
            variants={textChild}
          >
            <motion.a
              href="#contact"
              className="px-5 py-2.5 text-sm bg-gradient-to-r from-[#915eff] to-[#bf61ff] text-white font-semibold rounded-xl flex items-center gap-2 shadow-lg shadow-[#915eff]/25"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(145, 94, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect <span>→</span>
            </motion.a>
            <motion.a
              href="#work"
              className="px-5 py-2.5 text-sm bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl flex items-center gap-2 hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* 3D Canvas - loads after main content */}
      {show3D && (
        <Suspense fallback={<Canvas3DLoader />}>
          <ComputersCanvas />
        </Suspense>
      )}

      {/* Scroll indicator */}
      <div className="absolute sm:bottom-20 bottom-32 w-full flex justify-center items-center z-10 pointer-events-none">
        <a href="#about" aria-label="Scroll to about section" className="pointer-events-auto">
          <motion.div 
            className="w-[35px] h-[64px] rounded-3xl border-2 border-white/30 flex justify-center items-start p-2 backdrop-blur-sm bg-white/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            whileHover={{ scale: 1.1, borderColor: "#915eff", backgroundColor: "rgba(145, 94, 255, 0.1)" }}
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="w-2.5 h-2.5 rounded-full bg-gradient-to-b from-[#915eff] to-[#00cea8]"
            />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
