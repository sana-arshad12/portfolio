import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  freelance,
  shopify,
  sheryians,
  macbookpro,
  falverra,
  tripguide,
  threejs,
  ituCert,
  laptopPic,
  lumsCert,
  numlCert,
  umtCert,
  aleemMedical,
  aspireCollege,
  shifftus,
  geminiApp,
  virtualAssistant,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "skills",
    title: "skills",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "WordPress Developer",
    icon: mobile,
  },
  {
    title: "SEO Expert",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Bootstrap",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Shifft.us",
    icon: web,
    iconBg: "#1a1a2e",
    date: "2024 - Present",
    points: [
      "Developed and maintained the Shifft.us platform, a modern web application for seamless user experiences.",
      "Implemented responsive UI components using React.js and modern CSS frameworks for optimal cross-device compatibility.",
      "Collaborated with the design team to translate mockups into pixel-perfect, interactive web interfaces.",
      "Optimized website performance and loading times, improving overall user engagement and satisfaction.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "DPS Model Town",
    icon: freelance,
    iconBg: "#0188E3",
    date: "January 2024 - February 2024",
    points: [
      "Developed HTML, CSS, and JavaScript webpages, employing industry best practices to ensure optimal functionality and user experience.",
      "Authored stored procedures for MySQL databases, enhancing data retrieval and manipulation efficiency while maintaining data integrity.",
      "Designed responsive webpages utilizing Bootstrap framework, ensuring seamless user interaction across various devices and screen sizes.",
      "Collaborated with team members to deliver high-quality web solutions within project deadlines.",
    ],
  },
  {
    title: "WordPress Developer & Blogger",
    company_name: "guiprojects.com",
    icon: sheryians,
    iconBg: "#ffff",
    date: "January 2024 - Present",
    points: [
      "Developed and hosted a blog website dedicated to programming tutorials and learning resources for students.",
      "Leveraged WordPress tools to create an interactive, user-friendly interface, resulting in a 40% increase in user engagement.",
      "Promoted free access to quality educational content, supporting the academic growth of students worldwide.",
      "Managed SEO strategies to increase visibility and attract a broader audience, driving organic traffic.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "guiprojects.com - Blog Website",
    description:
      "A comprehensive blog website dedicated to programming tutorials and learning resources for students. Features an interactive, user-friendly interface built with WordPress, implementing SEO strategies that resulted in a 40% increase in user engagement.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "seo",
        color: "green-text-gradient",
      },
      {
        name: "blogging",
        color: "pink-text-gradient",
      },
    ],
    image: macbookpro,
    source_code_link: "https://github.com/SanaArshad12",
    live_website_link: "https://guiprojects.com/",
  },
  {
    name: "Shifft.us - Web Platform",
    description:
      "A modern full-stack web platform built with React.js and modern CSS frameworks. Features responsive UI components, pixel-perfect design implementation, and optimized performance for seamless user experiences across all devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fullstack",
        color: "green-text-gradient",
      },
      {
        name: "responsive",
        color: "pink-text-gradient",
      },
    ],
    image: shifftus,
    source_code_link: "https://github.com/SanaArshad12",
    live_website_link: "https://shifft.us/",
  },
  {
    name: "Virtual Assistant",
    description:
      "A smart virtual assistant supporting both voice and chat interactions. It can answer questions, have conversations, and execute system commands like opening File Manager, Microsoft Word, Calculator, Notepad, and other applications. Built with Python for seamless hands-free productivity.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "voice-recognition",
        color: "pink-text-gradient",
      },
    ],
    image: virtualAssistant,
    live_website_link: "https://github.com/SanaArshad12",
  },
  {
    name: "MeetingSummerizer",
    description:
      "A meeting summarization application built in C# using ASP.NET. It ingests meeting transcripts, runs NLP summarization and stores summaries and transcripts in a database. Built with a focus on accuracy, scalability and secure data handling.",
    tags: [
      {
        name: "c#",
        color: "blue-text-gradient",
      },
      {
        name: "asp.net",
        color: "green-text-gradient",
      },
      {
        name: "backend",
        color: "pink-text-gradient",
      },
    ],
    image: macbookpro,
    source_code_link: "https://github.com/SanaArshad12",
    live_website_link: "https://github.com/SanaArshad12",
  },
  {
    name: "Gemini AI Chat App",
    description:
      "An interactive AI chat application built with React and Vite, powered by Google's Gemini API. Features a modern sidebar interface, real-time chat responses, and context management. Provides an intuitive conversational AI experience with smooth animations using Framer Motion.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "gemini-api",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: geminiApp,
    source_code_link: "https://github.com/SanaArshad12/AI-chat-with-react",
    live_website_link: "https://ai-chat-with-react-753i.vercel.app",
  },
  {
    name: "TextTuneUp",
    description:
      "A comprehensive text editing and enhancement tool featuring grammar checking, plagiarism detection, and text rephrasing capabilities. Built with vanilla JavaScript, HTML5, and Bootstrap CSS framework to provide a responsive and user-friendly interface for content improvement.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "html5",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/SanaArshad12",
    live_website_link: "https://github.com/SanaArshad12",
  },
];

const education = [
  {
    degree: "Bachelor's Degree",
    field: "BS Computer Science",
    institution: "National University of Management and Technology (NUMT)",
    date: "2022 - 2026",
    icon: sheryians,
    iconBg: "#E6DEDD",
    description: "Currently pursuing Bachelor's degree in Computer Science, focusing on software development, algorithms, and modern web technologies.",
  },
  {
    degree: "Intermediate",
    field: "Pre-Medical",
    institution: "Minhaj College",
    date: "2020 - 2022",
    icon: freelance,
    iconBg: "#0188E3",
    description: "Completed intermediate education with pre-medical focus, building strong analytical and problem-solving foundations.",
  },
];

// Web Development & Technical Certificates
const webCertificates = [
  {
    title: "Coderush - Web Development",
    issuer: "Information Technology University (ITU)",
    date: "2023",
    icon: backend,
    image: ituCert,
    iconBg: "#E6DEDD",
    description: "Completed comprehensive web development training covering modern frontend and backend technologies.",
  },
  {
    title: "Hack Forge - Web Development",
    issuer: "National University of Modern Languages (NUML)",
    date: "2023",
    icon: web,
    image: numlCert,
    iconBg: "#383E56",
    description: "Advanced web development certification focusing on full-stack development practices.",
  },
  {
    title: "Surge - Web Development",
    issuer: "University of Management and Technology (UMT)",
    date: "2023",
    icon: creator,
    image: umtCert,
    iconBg: "#E6DEDD",
    description: "Specialized training in modern web development frameworks and best practices.",
  },
  {
    title: "Psifi - Web Development",
    issuer: "Lahore University of Management Sciences (LUMS)",
    date: "2023",
    icon: mobile,
    image: lumsCert,
    iconBg: "#383E56",
    description: "Professional web development certification from LUMS focusing on industry standards.",
  },
];

// Extra-Curricular Activities & Achievements
const extraCurricularCertificates = [
  {
    title: "Prime Minister Laptop Scheme",
    issuer: "Prime Minister of Pakistan",
    date: "2025",
    icon: creator,
    image: laptopPic,
    iconBg: "#00C853",
    description: "Received a laptop from the Prime Minister of Pakistan for outstanding academic performance and achievements.",
    highlight: true,
  },
  {
    title: "Fire Fighting Robot",
    issuer: "Al-Aleem Medical College",
    date: "2023",
    icon: backend,
    image: aleemMedical,
    iconBg: "#E6DEDD",
    description: "Developed and programmed a fire-fighting robot demonstrating robotics and automation skills.",
  },
  {
    title: "Best Organizer",
    issuer: "Aspire College",
    date: "2021",
    icon: creator,
    image: aspireCollege,
    iconBg: "#383E56",
    description: "Awarded for outstanding organizational and leadership skills in academic events.",
  },
];

// Combined certificates for backward compatibility
const certificates = [...webCertificates, ...extraCurricularCertificates];

export { services, technologies, experiences, testimonials, projects, education, certificates, webCertificates, extraCurricularCertificates };
