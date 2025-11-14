import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";

// Sana Arshad Contact Information:
// Email: sanaarshad1209@gmail.com
// Phone: 03204078238
// GitHub: github.com/SanaArshad12

/* 
  EmailJS Setup Instructions:
  1. Go to https://www.emailjs.com/ and create a free account
  2. Add your email service (Gmail, Outlook, etc.)
  3. Create an email template with these variables: {{from_name}}, {{from_email}}, {{to_name}}, {{message}}
  4. Get your Service ID, Template ID, and Public Key
  5. Create a .env file in the root directory and add:
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
  6. Or replace the values directly below
*/

// EmailJS Configuration - Replace with your actual credentials
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_xxxxxxx",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_xxxxxxx",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key_here",
};

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Check if EmailJS is configured
    if (!EMAILJS_CONFIG.serviceId || EMAILJS_CONFIG.serviceId === "service_xxxxxxx") {
      alert("EmailJS is not configured yet. Please check EMAILJS_SETUP.md for setup instructions.\n\nFor now, please contact me directly at: sanaarshad1209@gmail.com");
      return;
    }

    setLoading(true);

    // Send email using EmailJS
    emailjs
      .send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          to_name: "Sana Arshad", // Your name
          message: form.message,
        },
        EMAILJS_CONFIG.publicKey
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for your message! I will get back to you as soon as possible. 😊");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          alert("Oops! Something went wrong. Please try again or contact me directly at sanaarshad1209@gmail.com");
        }
      );
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-2">{errors.name}</span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-2">{errors.email}</span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
            {errors.message && (
              <span className="text-red-500 text-sm mt-2">{errors.message}</span>
            )}
          </label>

          <button
            type="submit"
            disabled={loading}
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-[#1a1443] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-secondary/20">
          <p className="text-secondary text-sm">
            Or reach me directly at:{" "}
            <a
              href="mailto:sanaarshad1209@gmail.com"
              className="text-white hover:text-[#915eff] transition-colors"
            >
              sanaarshad1209@gmail.com
            </a>
          </p>
          <p className="text-secondary text-sm mt-2">
            Phone:{" "}
            <a
              href="tel:03204078238"
              className="text-white hover:text-[#915eff] transition-colors"
            >
              03204078238
            </a>
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
