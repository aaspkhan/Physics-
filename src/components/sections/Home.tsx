import { motion } from "motion/react";
import { ArrowDown, Atom } from "lucide-react";

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 inline-block"
        >
          <div className="relative">
            <Atom className="w-24 h-24 text-nano-blue mx-auto animate-spin-slow neon-text-blue" />
            <div className="absolute inset-0 bg-nano-blue/20 blur-3xl rounded-full" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black tracking-tighter mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-nano-blue via-nano-purple to-nano-pink neon-text-purple">
            NanoTech
          </span>
          <br />
          <span className="text-white">World</span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 font-light"
        >
          Exploring the invisible universe. Discover how materials at the nanoscale are revolutionizing energy, medicine, and our environment.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#what-are-nanomaterials"
            className="group relative px-8 py-4 bg-nano-blue/10 text-nano-blue font-bold rounded-full overflow-hidden border border-nano-blue/50 hover:border-nano-blue transition-all neon-border-blue"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Now <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-nano-blue/20 to-nano-purple/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
        </motion.div>

        {/* Scale Comparison Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 max-w-2xl mx-auto glass-card p-6 relative overflow-hidden"
        >
          <h3 className="text-sm font-mono text-nano-blue mb-4 uppercase tracking-widest">Scale Comparison</h3>
          <div className="flex items-center justify-between text-xs text-white/50 mb-2">
            <span>Human Hair (~80,000 nm)</span>
            <span>Nanometer (1 nm)</span>
          </div>
          <div className="relative h-4 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "1%" }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-nano-blue to-nano-purple"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
