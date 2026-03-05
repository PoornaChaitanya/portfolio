import { Menu, X } from "lucide-react";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "../constants";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check for active section
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = `#${section}`;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong backdrop-blur-xl py-3" : "bg-transparent py-5"} z-50`}
    >
      <nav className="container mx-auto px-12 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
        >
          Chaitanya<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  activeSection === link.href
                    ? "bg-surface text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface/50"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Nav Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#contact">
            <Button size="sm">Contact Me</Button>
          </a>
        </div>

        {/* Mobile Nav Actions */}
        <div className="flex md:hidden items-center gap-2">
          <button
            className="p-2 text-foreground cursor-pointer"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                href={link.href}
                key={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg py-2 transition-colors ${
                  activeSection === link.href
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}

            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full mt-2">Contact Me</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
