import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { webCertificates, extraCurricularCertificates } from "../constants";

// Stagger animation for cards
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

// Image Modal Component
const ImageModal = ({ image, title, isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.7, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image container with proper aspect ratio */}
          <div className="relative w-full h-auto max-h-[80vh] bg-black/50 rounded-2xl overflow-hidden flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="max-w-full max-h-[80vh] w-auto h-auto object-contain"
              style={{ margin: 'auto' }}
            />
          </div>
          
          {/* Close button */}
          <motion.button
            onClick={onClose}
            className="absolute -top-2 -right-2 w-10 h-10 bg-red-500/80 hover:bg-red-500 backdrop-blur-md rounded-full flex items-center justify-center text-white text-lg border border-white/20 transition-all z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ✕
          </motion.button>
          
          {/* Title */}
          <motion.div 
            className="mt-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-white text-sm font-medium text-center">{title}</p>
          </motion.div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const CertificateCard = ({ certificate, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const hasImage = certificate.image !== null;

  return (
    <>
      <motion.div
        variants={cardVariants}
        className="group relative"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Glow effect behind card */}
        <motion.div
          className={`absolute -inset-0.5 rounded-xl blur-lg transition-opacity duration-500 ${
            certificate.highlight 
              ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20' 
              : 'bg-gradient-to-r from-purple-500/10 to-pink-500/10'
          }`}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
        
        <div className={`relative rounded-xl overflow-hidden backdrop-blur-sm ${
          certificate.highlight 
            ? 'bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-teal-500/10 border border-green-500/30' 
            : 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10'
        }`}>
          
          {/* Image Section */}
          {hasImage ? (
            <div 
              className="relative h-36 overflow-hidden cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <motion.img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-full object-cover"
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* View Image Overlay */}
              <motion.div 
                className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 border border-white/20"
                  initial={{ scale: 0.8, y: 10 }}
                  animate={{ scale: isHovered ? 1 : 0.8, y: isHovered ? 0 : 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-white text-xs font-medium">🔍 View</span>
                </motion.div>
              </motion.div>
              
              {/* Highlight Badge */}
              {certificate.highlight && (
                <motion.div 
                  className="absolute top-2 left-2"
                  animate={{ 
                    boxShadow: [
                      "0 0 8px rgba(16, 185, 129, 0.5)",
                      "0 0 15px rgba(16, 185, 129, 0.8)",
                      "0 0 8px rgba(16, 185, 129, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="text-xs">🏆</span>
                    <span className="text-white text-[10px] font-bold uppercase tracking-wider">Featured</span>
                  </div>
                </motion.div>
              )}
              
              {/* Date Badge on Image */}
              <div className="absolute bottom-2 right-2">
                <div className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  certificate.highlight 
                    ? 'bg-green-500 text-white' 
                    : 'bg-[#915eff] text-white'
                }`}>
                  {certificate.date}
                </div>
              </div>
            </div>
          ) : (
            /* Icon Header for cards without images */
            <div className={`h-24 flex items-center justify-center relative ${
              certificate.highlight 
                ? 'bg-gradient-to-br from-green-500/30 to-emerald-600/20' 
                : 'bg-gradient-to-br from-[#915eff]/20 to-pink-500/10'
            }`}>
              <motion.div 
                className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                  certificate.highlight 
                    ? 'bg-gradient-to-br from-green-500 to-emerald-600' 
                    : 'bg-gradient-to-br from-[#915eff] to-pink-500'
                }`}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {certificate.highlight ? (
                  <span className="text-2xl">🏆</span>
                ) : (
                  <img
                    src={certificate.icon}
                    alt={certificate.title}
                    className="w-7 h-7 object-contain filter brightness-0 invert"
                  />
                )}
              </motion.div>
              
              {/* Date Badge */}
              <div className="absolute top-2 right-2">
                <div className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  certificate.highlight 
                    ? 'bg-green-500 text-white' 
                    : 'bg-[#915eff] text-white'
                }`}>
                  {certificate.date}
                </div>
              </div>
            </div>
          )}

          {/* Content Section */}
          <div className="p-3">
            <h3 className={`text-sm font-bold mb-1 line-clamp-2 ${
              certificate.highlight ? 'text-green-400' : 'text-white'
            }`}>
              {certificate.title}
            </h3>
            
            <div className="flex items-center gap-1.5 mb-2">
              <div className={`w-1.5 h-1.5 rounded-full ${
                certificate.highlight ? 'bg-green-500' : 'bg-[#915eff]'
              }`} />
              <p className="text-secondary text-xs font-medium truncate">
                {certificate.issuer}
              </p>
            </div>
            
            <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
              {certificate.description}
            </p>
            
            {/* View Certificate Button for cards with images */}
            {hasImage && (
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className={`mt-2 w-full py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  certificate.highlight
                    ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/30'
                    : 'bg-[#915eff]/20 text-[#915eff] hover:bg-[#915eff]/30 border border-[#915eff]/30'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Certificate
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Image Modal */}
      {hasImage && (
        <ImageModal
          image={certificate.image}
          title={certificate.title}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

const SectionDivider = ({ icon, title, subtitle, color = "purple" }) => (
  <motion.div 
    className="w-full mb-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center gap-3">
      <motion.div 
        className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
          color === "green" 
            ? 'bg-gradient-to-br from-green-500 to-emerald-600' 
            : 'bg-gradient-to-br from-[#915eff] to-pink-500'
        }`}
        whileHover={{ rotate: 10, scale: 1.1 }}
      >
        {icon}
      </motion.div>
      <div>
        <h3 className="text-white text-lg font-bold">{title}</h3>
        <p className="text-secondary text-xs">{subtitle}</p>
      </div>
    </div>
    <div className={`h-[1px] mt-3 rounded-full ${
      color === "green"
        ? 'bg-gradient-to-r from-green-500 via-emerald-500/50 to-transparent'
        : 'bg-gradient-to-r from-[#915eff] via-pink-500/50 to-transparent'
    }`} />
  </motion.div>
);

const Certificates = () => {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Achievements</p>
        <h2 className={`${styles.sectionHeadText} animated-gradient-text`}>
          Certificates & Awards
        </h2>
      </motion.div>
      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[14px] max-w-3xl leading-[24px]"
      >
        Here are the certifications and achievements I've earned throughout my journey,
        showcasing my commitment to continuous growth in web development and beyond.
      </motion.p>

      {/* Tab Buttons */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <motion.button
          onClick={() => setActiveTab("web")}
          className={`relative px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
            activeTab === "web"
              ? "bg-gradient-to-r from-[#915eff] to-[#bf61ff] text-white shadow-[0_0_30px_rgba(145,94,255,0.4)]"
              : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10 hover:border-[#915eff]/50"
          }`}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-lg">💻</span>
          Web Development
          <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
            activeTab === "web" ? "bg-white/20" : "bg-white/10"
          }`}>
            {webCertificates.length}
          </span>
        </motion.button>

        <motion.button
          onClick={() => setActiveTab("extra")}
          className={`relative px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
            activeTab === "extra"
              ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-[0_0_30px_rgba(16,185,129,0.4)]"
              : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10 hover:border-green-500/50"
          }`}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-lg">🏅</span>
          Extra-Curricular
          <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
            activeTab === "extra" ? "bg-white/20" : "bg-white/10"
          }`}>
            {extraCurricularCertificates.length}
          </span>
        </motion.button>
      </div>

      {/* Content based on active tab */}
      <AnimatePresence mode="wait">
        {activeTab === "web" ? (
          <motion.div 
            key="web"
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <SectionDivider 
              icon="💻" 
              title="Web Development" 
              subtitle="Professional certifications in web technologies"
              color="purple"
            />
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {webCertificates.map((certificate, index) => (
                <CertificateCard 
                  key={`web-cert-${index}`} 
                  certificate={certificate} 
                  index={index} 
                />
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            key="extra"
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <SectionDivider 
              icon="🏅" 
              title="Achievements & Awards" 
              subtitle="Recognition for excellence and leadership"
              color="green"
            />
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {extraCurricularCertificates.map((certificate, index) => (
                <CertificateCard 
                  key={`extra-cert-${index}`} 
                  certificate={certificate} 
                  index={index} 
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");
