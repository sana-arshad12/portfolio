import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_website_link,
}) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.15, 0.5)}
      className="group"
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1.02}
        transitionSpeed={450}
        className="bg-gradient-to-br from-[#1d1836] to-[#0d0a1a] p-5 rounded-2xl w-[340px] border border-white/10 hover:border-[#915eff]/30 transition-all duration-300"
      >
        {/* Image Container */}
        <div
          className="relative w-full h-[200px] cursor-pointer overflow-hidden rounded-xl bg-[#151030]"
          onClick={() => window.open(live_website_link, "_blank")}
        >
          <img
            src={image}
            alt={name}
            crossOrigin="anonymous"
            loading="eager"
            className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
            onLoad={(e) => {
              e.target.style.opacity = '1';
            }}
            onError={(e) => {
              console.log('Image failed to load:', image);
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
            style={{ opacity: 0, transition: 'opacity 0.3s' }}
          />
          {/* Fallback placeholder */}
          <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-[#915eff]/30 to-[#00cea8]/30 rounded-xl absolute inset-0">
            <span className="text-5xl">💻</span>
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3 rounded-xl">
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(live_website_link, "_blank");
              }}
              className="px-5 py-2.5 bg-[#915eff] text-white text-sm font-bold rounded-full hover:bg-[#7c4dff] transition-colors shadow-lg"
            >
              🔗 Live Demo
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className="px-5 py-2.5 bg-white/10 backdrop-blur-md text-white text-sm font-bold rounded-full border border-white/30 hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <img src={github} alt="" className="w-4 h-4" /> Code
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[18px] group-hover:text-[#915eff] transition-colors">
            {name}
          </h3>
          <p className="text-gray-400 mt-3 text-[14px] leading-[22px] line-clamp-3">
            {description}
          </p>
        </div>
        
        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.name} 
              className={`${tag.color} text-[12px] font-medium bg-white/5 px-3 py-1 rounded-full`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={`${styles.sectionHeadText} animated-gradient-text`}>Projects</h2>
      </motion.div>
      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl leading-[28px]"
      >
        Real projects showcasing my skills in web development. Each project includes live demos and source code access.
      </motion.p>
      
      <div className="mt-16 flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
