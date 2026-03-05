import { HIGHLIGHTS } from "../constants";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="md:px-12 py-20 lg:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.div variants={fadeUp}>
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground"
            >
              Turning ideas into
              <span className="font-serif italic font-normal text-white">
                {" "}
                interactive digital experiences.
              </span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="space-y-4 text-muted-foreground"
            >
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
            </motion.div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 gap-4 lg:gap-6"
          >
            {HIGHLIGHTS.map((item) => (
              <motion.div
                variants={fadeUp}
                key={item.id}
                className="glass p-5 sm:p-6 rounded-2xl hover:shadow-[0_0_20px_rgba(32,178,166,0.3)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
