import TechStack from "../components/TechStack";

const Skills = () => {
  return (
    <section id="skills" className="mt-20 animate-fade-in animation-delay-600 scroll-mt-32">
      <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 text-center">
        Technologies I work with
      </p>
      <TechStack />
    </section>
  );
};

export default Skills;
