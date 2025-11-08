import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants";

const CertificateCard = ({ certificate, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="bg-tertiary p-1 rounded-[20px] shadow-card sm:w-[360px] w-full"
  >
    <div className="bg-black-200 rounded-[20px] py-8 px-6 min-h-[320px] flex flex-col justify-between hover:bg-black-100 transition-all duration-300">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-tertiary flex items-center justify-center mb-5 shadow-lg">
          <img
            src={`${certificate.icon}${certificate.icon.includes("?") ? "&" : "?"}tr=f-auto`}
            alt={certificate.title}
            loading="lazy"
            className="w-12 h-12 object-contain"
          />
        </div>
        
        <h3 className="text-white text-[20px] font-bold text-center mb-3">
          {certificate.title}
        </h3>
        
        <div className="w-16 h-1 bg-gradient-to-r from-[#915eff] to-pink-500 rounded-full mb-4"></div>
        
        <p className="text-secondary text-[15px] font-semibold text-center mb-2">
          {certificate.issuer}
        </p>
        
        <div className="inline-block bg-[#915eff] px-4 py-1 rounded-full mb-4">
          <p className="text-white text-[13px] font-medium">
            {certificate.date}
          </p>
        </div>
      </div>
      
      <p className="text-white-100 text-[14px] text-center leading-relaxed">
        {certificate.description}
      </p>
    </div>
  </motion.div>
);

const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Achievements</p>
        <h2 className={styles.sectionHeadText}>Certificates</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Here are the certifications and achievements I've earned throughout my learning journey,
        showcasing my commitment to continuous growth and skill development in web development and technology.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {certificates.map((certificate, index) => (
          <CertificateCard key={`certificate-${index}`} certificate={certificate} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");
