import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { education } from "../constants";

const EducationCard = ({ edu, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.5)}
    className="bg-gradient-to-br from-[#1d1836] to-[#0d0a1a] p-4 rounded-xl border border-[#00cea8]/20 hover:border-[#00cea8]/40 transition-all duration-300 group"
  >
    <div className="flex items-start gap-3">
      {/* Icon */}
      <div 
        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: edu.iconBg }}
      >
        <img
          src={edu.icon}
          alt={edu.institution}
          className="w-7 h-7 object-contain"
        />
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-[#00cea8] font-bold text-[14px] truncate">{edu.degree}</h3>
          <span className="text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded-full flex-shrink-0">{edu.date}</span>
        </div>
        <p className="text-white text-[12px] font-medium mt-1 truncate">{edu.field}</p>
        <p className="text-gray-400 text-[11px] mt-0.5 truncate">📍 {edu.institution}</p>
        <p className="text-gray-500 text-[10px] mt-2 line-clamp-2 leading-relaxed">{edu.description}</p>
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Academic Journey</p>
        <h2 className={`${styles.sectionHeadText} animated-gradient-text`}>Education</h2>
      </motion.div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {education.map((edu, index) => (
          <EducationCard key={index} edu={edu} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
