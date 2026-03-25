import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/src/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "What Are They", href: "#what-are-nanomaterials" },
  { name: "Types", href: "#types" },
  { name: "Energy", href: "#energy" },
  { name: "Medical", href: "#medical" },
  { name: "Environment", href: "#environment" },
  { name: "Future", href: "#future" },
  { name: "Quiz", href: "#quiz" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold tracking-tighter flex items-center gap-2 group">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-nano-blue to-nano-purple group-hover:neon-text-blue transition-all">
            NanoTech
          </span>
          <span className="text-white">World</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-nano-blue transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nano-blue transition-all group-hover:w-full neon-border-blue" />
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white hover:text-nano-blue transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="lg:hidden overflow-hidden glass border-t-0"
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-white/80 hover:text-nano-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
