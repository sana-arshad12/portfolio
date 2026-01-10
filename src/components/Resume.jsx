import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useState } from "react";

const Resume = () => {
  const [showPdf, setShowPdf] = useState(false);
  
  // Your resume PDF file name in the public folder
  const resumePath = "/sana-resume.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Sana_Arshad_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    setShowPdf(!showPdf);
  };

  const handleViewInNewTab = () => {
    window.open(resumePath, "_blank");
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Professional Profile</p>
        <h2 className={styles.sectionHeadText}>Resume</h2>
      </motion.div>
      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        View or download my complete resume to see my skills, experience, education, and achievements in detail.
      </motion.p>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 1)}
        className="mt-12 flex flex-wrap gap-5"
      >
        <button
          onClick={handleView}
          className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-[#915eff] transition-colors"
        >
          {showPdf ? "Hide Resume" : "View Resume"}
        </button>

        <button
          onClick={handleViewInNewTab}
          className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-[#915eff] transition-colors"
        >
          Open in New Tab
        </button>
        
        <button
          onClick={handleDownload}
          className="bg-[#915eff] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-tertiary transition-colors"
        >
          Download Resume
        </button>
      </motion.div>

      {showPdf && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 w-full"
        >
          <div className="bg-tertiary rounded-2xl p-2 shadow-2xl">
            <object
              data={resumePath}
              type="application/pdf"
              className="w-full h-[800px] rounded-xl"
              aria-label="Resume PDF"
            >
              <embed
                src={resumePath}
                type="application/pdf"
                className="w-full h-[800px] rounded-xl"
              />
              <div className="w-full h-[800px] flex items-center justify-center bg-black-100 rounded-xl">
                <div className="text-center p-8">
                  <p className="text-white text-xl mb-4">
                    Unable to display PDF in browser.
                  </p>
                  <button
                    onClick={handleViewInNewTab}
                    className="bg-[#915eff] py-3 px-8 text-white font-bold rounded-xl hover:bg-tertiary transition-colors"
                  >
                    Open in New Tab
                  </button>
                </div>
              </div>
            </object>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SectionWrapper(Resume, "resume");
