export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
      filter: "blur(10px)",
    },
    show: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
        stiffness: 100,
        damping: 12,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      filter: "blur(5px)",
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: -10,
    },
    show: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        delay: delay,
        duration: duration,
        stiffness: 200,
        damping: 15,
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren || 0.1,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

// New smooth floating animation
export const floatAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

// Pulse glow effect
export const pulseGlow = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(145, 94, 255, 0.3)",
      "0 0 40px rgba(145, 94, 255, 0.6)",
      "0 0 20px rgba(145, 94, 255, 0.3)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

// Smooth scale on hover
export const scaleOnHover = {
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  whileTap: {
    scale: 0.95,
  },
};

// Letter by letter animation for text
export const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

// Rotate in animation
export const rotateIn = (delay, duration) => {
  return {
    hidden: {
      rotate: -180,
      opacity: 0,
      scale: 0,
    },
    show: {
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        delay: delay,
        duration: duration,
        stiffness: 100,
        damping: 10,
      },
    },
  };
};

// Bounce animation
export const bounceIn = (delay) => {
  return {
    hidden: {
      opacity: 0,
      scale: 0.3,
      y: 100,
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: delay,
        stiffness: 400,
        damping: 10,
      },
    },
  };
};