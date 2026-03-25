import { Atom } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/10 bg-nano-dark overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-nano-blue/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Atom className="w-8 h-8 text-nano-blue neon-text-blue" />
            <div>
              <h2 className="text-xl font-bold text-white">NanoTech World</h2>
              <p className="text-xs text-white/50 font-mono">Exploring the Invisible</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm font-medium text-white/80 mb-1">
              Mini Project – Semiconductor Physics
            </p>
            <p className="text-xs text-nano-blue font-mono uppercase tracking-widest">
              SRM Institute of Science and Technology
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} NanoTech World. Designed for educational purposes.</p>
        </div>
      </div>
    </footer>
  );
}
