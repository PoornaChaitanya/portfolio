import {
  Code2,
  Lightbulb,
  Rocket,
  Users,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { BsBehance, BsDribbble } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { RiLinkedinFill } from "react-icons/ri";

export const NAV_LINKS = [
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
];

export const HERO_SKILLS = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Tailwind CSS",
  "Figma",
  "Github",
  "AWS",
];

export const SOCIAL_LINKS = [
  {
    icon: FiGithub,
    href: "https://github.com/PoornaChaitanya/",
    label: "GitHub",
  },
  {
    icon: RiLinkedinFill,
    href: "https://www.linkedin.com/in/chaitanyakaisarla/",
    label: "LinkedIn",
  },
  {
    icon: BsBehance,
    href: "https://www.behance.net/chaitankaisarl/",
    label: "Behance",
  },
  {
    icon: BsDribbble,
    href: "https://dribbble.com/chaitanyakaisarla",
    label: "Dribbble",
  },
];

export const HIGHLIGHTS = [
  {
    id: "clean-architecture",
    icon: Code2,
    title: "Clean Architecture",
    description:
      "Building reusable components and scalable frontend structures with clarity and consistency.",
  },
  {
    id: "performance-first",
    icon: Rocket,
    title: "Performance First",
    description:
      "Focused on responsive layouts, optimized rendering, and smooth user interactions.",
  },
  {
    id: "design-thinking",
    icon: Users,
    title: "Design Thinking",
    description:
      "Blending UI/UX principles with frontend development to create intuitive user experiences.",
  },
  {
    id: "continuous-learning",
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Constantly improving through hands-on projects, exploring new tools, and refining my craft.",
  },
];

export const PROJECTS = [
  {
    id: "netflix-clone",
    title: "Netflix Inspired Movie Streaming App",
    description:
      "React-based movie streaming web application integrating third-party REST APIs with dynamic data fetching and reusable component architecture.",
    image: "/projects/movie.png",
    tags: [
      "React",
      "CSS",
      "React Router",
      "React Hooks",
      "API Fetching",
      "Context API",
    ],
    link: "https://streamverse-app-pi.vercel.app/",
    github: "https://github.com/PoornaChaitanya/netflix-clone-react",
  },
  {
    id: "forever-ecommerce",
    title: "Forever - React E-Commerce Web App",
    description:
      "A fully responsive e-commerce platform built with React and Tailwind CSS, featuring product filtering, cart functionality, and dynamic routing.",
    image: "/projects/forever.png",
    tags: [
      "React",
      "Tailwind CSS",
      "React Router",
      "React Hooks",
      "Context API",
    ],
    link: "https://forever-ecommerce-react.vercel.app/",
    github: "https://github.com/PoornaChaitanya/forever-ecommerce-react",
  },
  {
    id: "bento-fitness",
    title: "Bento - Fitness App UI/UX Design Casestudy",
    description:
      "A modern fitness tracking app designed in Figma with user research, wireframes, and high-fidelity prototypes focused on usability and clarity.",
    image: "/projects/bento.png",
    tags: [
      "Figma",
      "UI/UX",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Case Study",
    ],
    link: "https://www.behance.net/gallery/231054787/Bento-Fitness-Diet-App-UI-UX-Casestudy",
    github: false,
  },
];

export const CONTACT_INFO = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: "poornachaitanya4259@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=poornachaitanya4259@gmail.com",
  },
  {
    id: "whatsapp",
    icon: Phone,
    label: "WhatsApp",
    value: "+91 70131 04777",
    href: "https://wa.me/917013104777",
  },
  {
    id: "location",
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
    href: "https://maps.app.goo.gl/b99HCZYGnn5GDFxcA",
  },
];

export const FOOTER_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
