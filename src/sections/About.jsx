import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "Building reusable components and scalable frontend structures with clarity and consistency.",
  },
  {
    icon: Rocket,
    title: "Performance First",
    description:
      "Focused on responsive layouts, optimized rendering, and smooth user interactions.",
  },
  {
    icon: Users,
    title: "Design Thinking",
    description:
      "Blending UI/UX principles with frontend development to create intuitive user experiences.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Constantly improving through hands-on projects, exploring new tools, and refining my craft.",
  },
];

const About = () => {
  return (
    <section id="about" className="md:px-12 py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Turning ideas into
              <span className="font-serif italic font-normal text-white">
                {" "}
                interactive digital experiences.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm Poorna Chaitanya Kaisarla, an Electronics and Communication
                Engineering graduate who transitioned into frontend development
                driven by a deep curiosity for how modern web interfaces are
                built.
              </p>

              <p>
                I specialize in React, JavaScript, and Tailwind CSS, creating
                responsive, user-focused applications with clean design and
                maintainable code. My background in UI/UX design helps me think
                beyond functionality — focusing on usability, structure, and
                visual clarity.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in hover:shadow-[0_0_20px_rgba(32,178,166,0.3)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
