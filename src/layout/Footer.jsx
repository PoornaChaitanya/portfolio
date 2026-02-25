import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { BsBehance, BsDribbble } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { RiLinkedinFill } from "react-icons/ri";

const socialLinks = [
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

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              Chaitanya<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Chaitanya Kaisarla. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
