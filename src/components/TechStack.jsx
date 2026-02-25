import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaAws,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma } from "react-icons/si";

const techStack = [
  { icon: FaHtml5, label: "HTML" },
  { icon: FaCss3Alt, label: "CSS" },
  { icon: FaJsSquare, label: "JavaScript" },
  { icon: FaReact, label: "React" },
  { icon: SiTailwindcss, label: "Tailwind" },
  { icon: SiFigma, label: "Figma" },
  { icon: FaGithub, label: "GitHub" },
  { icon: FaAws, label: "AWS" },
];

const TechStack = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Edge Fade Effect */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex w-max animate-marquee gap-10 items-center">
        {[...techStack, ...techStack].map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-3 shrink-0 px-6 py-3 glass rounded-xl hover:glow-border transition-all duration-300"
          >
            <tech.icon className="text-3xl text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              {tech.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;