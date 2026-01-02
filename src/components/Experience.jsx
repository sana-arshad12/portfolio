import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience, index }) => (
  <VerticalTimelineElement
    contentStyle={{ 
      background: "linear-gradient(135deg, rgba(29, 24, 54, 0.9) 0%, rgba(21, 16, 48, 0.95) 100%)", 
      color: "#fff",
      borderRadius: "20px",
      border: "1px solid rgba(145, 94, 255, 0.2)",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(145, 94, 255, 0.1)",
      backdropFilter: "blur(10px)"
    }}
    contentArrowStyle={{ borderRight: "7px solid rgba(145, 94, 255, 0.3)" }}
    date={experience.date}
    dateClassName="text-secondary font-medium"
    iconStyle={{ 
      background: experience.iconBg,
      boxShadow: "0 0 20px rgba(145, 94, 255, 0.4), 0 0 40px rgba(145, 94, 255, 0.2)"
    }}
    icon={
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={`${experience.icon}${
            experience.icon.includes("?") ? "&" : "?"
          }tr=f-auto`}
          alt={experience.company_name}
          loading="lazy"
          width="60%"
          height="60%"
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[22px] font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        {experience.title}
      </h3>
      <p
        className="text-[#915eff] text-[15px] font-semibold mt-1"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 space-y-3">
      {experience.points.map((point, idx) => (
        <li
          key={idx}
          className="text-gray-300 text-[14px] pl-4 tracking-wide relative before:content-['▹'] before:absolute before:left-0 before:text-[#915eff] before:font-bold"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} animated-gradient-text`}>Work Experience</h2>
      </motion.div>
      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl leading-[28px]"
      >
        My professional journey showcasing the roles, responsibilities, and valuable experiences that have shaped my career in web development.
      </motion.p>
      
      <div className="mt-16 flex flex-col">
        <VerticalTimeline lineColor="rgba(145, 94, 255, 0.3)">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
