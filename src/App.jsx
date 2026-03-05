import { HelmetProvider, Helmet } from "react-helmet-async";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import CustomCursor from "./components/CustomCursor";
import { ScrollProgress, BackToTop } from "./components/ScrollProgress";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // Default to dark mode on load
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <HelmetProvider>
      <div className="min-h-screen overflow-x-hidden transition-colors duration-500">
        <Helmet>
          <title>Chaitanya Kaisarla | Frontend Developer</title>
          <meta
            name="description"
            content="I build responsive, user-focused web applications with clean design and modern technologies."
          />
          <meta
            name="keywords"
            content="Frontend Developer, React, Tailwind CSS, UI/UX"
          />
          <meta property="og:title" content="Chaitanya Kaisarla | Portfolio" />
          <meta
            property="og:description"
            content="I build responsive, user-focused web applications with clean design and modern technologies."
          />
          <meta property="og:type" content="website" />
        </Helmet>

        <CustomCursor />
        <ScrollProgress />

        <Navbar />
        <main>
          <Hero />
          <Skills />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />

        <BackToTop />
      </div>
    </HelmetProvider>
  );
};

export default App;
