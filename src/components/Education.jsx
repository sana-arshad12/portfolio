import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { education } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const EducationCard = ({ edu }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={edu.date}
    iconStyle={{ background: edu.iconBg }}
    icon={
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={`${edu.icon}${edu.icon.includes("?") ? "&" : "?"}tr=f-auto`}
          alt={edu.institution}
          loading="lazy"
          width="60%"
          height="60%"
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{edu.degree}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {edu.field}
      </p>
      <p className="text-secondary text-[14px] font-medium mt-1" style={{ margin: 0 }}>
        {edu.institution}
      </p>
    </div>
    <p className="text-white-100 text-[14px] mt-5 tracking-wider">
      {edu.description}
    </p>
  </VerticalTimelineElement>
);

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Academic Journey</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((edu, index) => (
            <EducationCard key={index} edu={edu} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
