import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    exit: { 
      x: "100%", 
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" }
    },
  };

  const mobileLinkVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`${styles.paddingX} w-full flex items-center py-2 z-20 fixed transition-all duration-300 ${
        scrolled ? "bg-[#050816]/95 backdrop-blur-md shadow-lg" : "bg-[#050a208e]"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-0"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.img
            src={`${logo}${logo.includes("?") ? "&" : "?"}tr=f-auto`}
            alt="logo"
            loading="lazy"
            className="w-16 object-contain"
            width={64}
            height={64}
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.p 
            className="text-white text-[17px] font-semibold cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <span className="sm:block font-bold">Sana</span> | Arshad
          </motion.p>
        </Link>

        <ul className="list-none hidden text-nowrap sm:flex flex-row gap-10">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.id}
              custom={index}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              className={`${
                active === link.title ? "text-white" : "text-[#ffffff69]"
              } hover:text-[#ffffffac] text-[18px] font-medium cursor-pointer nav-link`}
              onClick={() => setActive(link.title)}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile menu icon */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <motion.img
            src={`${(toggle ? close : menu)}${(toggle ? close : menu).includes("?") ? "&" : "?"}tr=f-auto`}
            alt="menu"
            loading="lazy"
            className="w-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
            width={28}
            height={28}
            whileHover={{ scale: 1.2, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
      </div>

      <AnimatePresence>
        {toggle && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-full w-[85%] max-w-[350px] bg-gradient-to-bl from-[#0c0a1d] to-[#050816] backdrop-blur-xl shadow-2xl z-40 border-l border-white/10"
          >
            <div className="flex flex-col h-full p-8">
              {/* Header */}
              <div className="w-full flex items-center justify-between mb-10">
                <span className="text-white/50 text-sm uppercase tracking-wider">Menu</span>
                <motion.button
                  onClick={() => setToggle(false)}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(145, 94, 255, 0.2)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={`${close}${close.includes("?") ? "&" : "?"}tr=f-auto`}
                    alt="close"
                    className="w-4 h-4 object-contain"
                  />
                </motion.button>
              </div>

              {/* Nav Links */}
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    custom={index}
                    variants={mobileLinkVariants}
                    initial="hidden"
                    animate="visible"
                    onClick={() => {
                      setActive(link.title);
                      setToggle(false);
                    }}
                    className={`text-[18px] font-medium px-4 py-3 rounded-xl transition-all ${
                      active === link.title 
                        ? 'text-white bg-gradient-to-r from-[#915eff]/20 to-transparent border-l-2 border-[#915eff]' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                    whileHover={{ x: 8 }}
                  >
                    {link.title}
                  </motion.a>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-auto pt-8 border-t border-white/10">
                <p className="text-gray-500 text-sm">Get in touch</p>
                <a href="mailto:sanaarshad1209@gmail.com" className="text-[#915eff] text-sm hover:text-white transition-colors">
                  sanaarshad1209@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setToggle(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
