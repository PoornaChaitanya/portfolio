import TechStack from "../components/TechStack";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="mt-20 scroll-mt-32"
    >
      <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 text-center">
        Technologies I work with
      </p>
      <TechStack />
    </motion.section>
  );
};

export default Skills;
