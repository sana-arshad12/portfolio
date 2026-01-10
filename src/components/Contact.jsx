import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// Sana Arshad Contact Information:
// Email: sanaarshad1209@gmail.com
// Phone: 03204078238
// GitHub: github.com/SanaArshad12

// API endpoint for contact form (Nodemailer + Gmail backend)
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Send email using Nodemailer backend
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setLoading(false);
        alert("Thank you for your message! I will get back to you as soon as possible. 😊");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Failed to send email");
      }
    } catch (error) {
      setLoading(false);
      console.error("Email Error:", error);
      alert("Oops! Something went wrong. Please try again or contact me directly at sanaarshad1209@gmail.com");
    }
  };
  return (
    <div className="xl:mt-4 xl:flex-row flex-col-reverse flex gap-4 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.6] bg-gradient-to-br from-[#1d1836]/90 to-[#0c0a1d]/95 p-4 rounded-xl border border-white/5 backdrop-blur-sm relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#915eff]/10 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <p className="text-secondary text-[11px] uppercase tracking-wider">Get in touch</p>
          <h3 className="text-white font-bold text-[20px] animated-gradient-text">Contact</h3>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-3 relative z-10"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-1 text-xs">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-[#1d1836] py-2 px-3 placeholder:text-gray-500 text-white text-xs rounded-lg outline-none border border-white/10 font-medium focus:border-[#915eff]/50 transition-all"
              required
            />
            {errors.name && (
              <span className="text-red-400 text-sm mt-2 flex items-center gap-1">⚠️ {errors.name}</span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-1 text-xs">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-[#1d1836] py-2 px-3 placeholder:text-gray-500 text-white text-xs rounded-lg outline-none border border-white/10 font-medium focus:border-[#915eff]/50 transition-all"
              required
            />
            {errors.email && (
              <span className="text-red-400 text-sm mt-2 flex items-center gap-1">⚠️ {errors.email}</span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-1 text-xs">Your Message</span>
            <textarea
              rows={2}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-[#1d1836] py-2 px-3 placeholder:text-gray-500 text-white text-xs rounded-lg outline-none border border-white/10 font-medium resize-none focus:border-[#915eff]/50 transition-all"
              required
            />
            {errors.message && (
              <span className="text-red-400 text-[10px] mt-1">⚠️ {errors.message}</span>
            )}
          </label>

          <motion.button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-[#915eff] to-[#bf61ff] py-2 px-6 outline-none w-fit text-white font-bold text-xs rounded-lg transition-all disabled:opacity-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center gap-2">
              {loading ? "Sending..." : "Send Message →"}
            </span>
          </motion.button>
        </form>

        {/* Contact Info - Inline */}
        <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap gap-3">
          <a href="mailto:sanaarshad1209@gmail.com" className="text-gray-400 hover:text-[#915eff] text-[10px] transition-colors">
            📧 sanaarshad1209@gmail.com
          </a>
          <a href="tel:03204078238" className="text-gray-400 hover:text-[#00cea8] text-[10px] transition-colors">
            📱 03204078238
          </a>
          <span className="text-gray-400 text-[10px]">
            📍 College Road, Township, Lahore
          </span>
        </div>
      </motion.div>
      
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-[450px] md:h-[400px] h-[300px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
