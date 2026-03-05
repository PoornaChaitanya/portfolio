import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaAws,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  // SiNextdotjs,
  // SiTypescript,
  // SiNodedotjs,
  // SiMongodb,
} from "react-icons/si";

const techStack = [
  { icon: FaHtml5, label: "HTML5" },
  { icon: FaCss3Alt, label: "CSS3" },
  { icon: FaJsSquare, label: "JavaScript" },
  { icon: FaReact, label: "React" },
  // { icon: SiNextdotjs, label: "Next.js" },
  // { icon: SiTypescript, label: "TypeScript" },
  // { icon: SiNodedotjs, label: "Node.js" },
  // { icon: SiMongodb, label: "MongoDB" },
  { icon: SiTailwindcss, label: "Tailwind" },
  { icon: SiFigma, label: "Figma" },
  { icon: FaGithub, label: "GitHub" },
  { icon: FaAws, label: "AWS" },
];

const TechStack = () => {
  return (
    <div className="relative w-full overflow-hidden py-10 fade-edges">
      {/* Edge Fade Effect */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent z-10" />

      <div className="flex w-max animate-marquee gap-10 items-center">
        {/* We map it multiple times to ensure the marquee behaves smoothly */}
        {[...techStack, ...techStack, ...techStack].map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-4 group min-w-[120px]"
          >
            <div className="p-6 rounded-2xl glass hover:bg-surface transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-110 shadow-lg glow-border flex items-center justify-center w-24 h-24">
              <tech.icon className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
              {tech.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
