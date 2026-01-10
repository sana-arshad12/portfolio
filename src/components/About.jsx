import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt 
      className="xs:w-[220px] w-full"
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      scale={1.02}
      transitionSpeed={450}
      glareEnable={true}
      glareMaxOpacity={0.25}
      glareColor="#915eff"
      glarePosition="all"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.4 * index, 0.75)}
        className="w-full rounded-[20px] p-[2px] relative group"
        style={{
          background: "linear-gradient(135deg, #915eff 0%, #00cea8 50%, #bf61ff 100%)"
        }}
        whileHover={{ 
          boxShadow: "0 30px 60px -15px rgba(145, 94, 255, 0.5), 0 0 40px rgba(145, 94, 255, 0.2)",
        }}
      >
        {/* Animated border glow */}
        <motion.div
          className="absolute -inset-1 rounded-[22px] opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"
          style={{
            background: "linear-gradient(135deg, #915eff 0%, #00cea8 50%, #bf61ff 100%)"
          }}
        />
        
        <div
          className="relative bg-gradient-to-br from-[#1d1836] to-[#151030] rounded-[18px] py-6 px-8 min-h-[220px] flex justify-evenly items-center flex-col backdrop-blur-sm"
        >
          {/* Decorative elements */}
          <div className="absolute top-3 right-3 w-16 h-16 rounded-full bg-gradient-to-br from-[#915eff]/10 to-transparent blur-xl" />
          <div className="absolute bottom-3 left-3 w-12 h-12 rounded-full bg-gradient-to-br from-[#00cea8]/10 to-transparent blur-xl" />
          
          <motion.div
            className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#915eff]/20 to-[#00cea8]/10 flex items-center justify-center"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              src={`${icon}${icon.includes("?") ? "&" : "?"}tr=f-auto`}
              alt={title}
              loading="lazy"
              width={48}
              height={48}
              className="w-11 h-11 object-contain"
              whileHover={{ 
                filter: "drop-shadow(0 0 25px rgba(145, 94, 255, 0.8))"
              }}
            />
          </motion.div>

          <h3 className="text-white text-[16px] font-bold text-center mt-3 relative z-10">
            {title}
          </h3>
          
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#915eff] to-[#00cea8] mt-2" />
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} animated-gradient-text`}>Overview</h2>
      </motion.div>
      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray-300 text-[15px] sm:text-[16px] max-w-3xl sm:leading-[30px] leading-relaxed"
      >
        Hi, I'm <span className="text-[#915eff] font-semibold">Sana Arshad</span> — an experienced and versatile professional with a 
        strong background in programming, WordPress development, and blogging. 
        I'm proficient in creating and optimizing content for <span className="text-[#00cea8] font-medium">SEO</span> to drive organic 
        traffic and enhance online visibility. Skilled in developing custom WordPress 
        themes and responsive web applications using <span className="text-[#bf61ff] font-medium">HTML, CSS, JavaScript, and Bootstrap</span>. 
        I'm passionate about creating engaging and informative content while staying 
        updated with the latest trends and best practices in the industry to deliver 
        high-quality results.
      </motion.p>
      
      <motion.div 
        className="mt-16 flex flex-wrap justify-center gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
