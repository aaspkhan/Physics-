import { motion } from "motion/react";
import Section from "../Section";
import { Cpu, Eye, Globe } from "lucide-react";

export default function FutureOfNanotechnology() {
  return (
    <Section
      id="future"
      title="Future of Nanotechnology"
      subtitle="Beyond Imagination"
    >
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-8 border-nano-blue/30 hover:border-nano-blue hover:-translate-y-2 transition-all duration-300 group text-center"
        >
          <div className="w-16 h-16 mx-auto bg-nano-blue/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            <Cpu className="w-8 h-8 text-nano-blue" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Nanorobotics</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Microscopic robots capable of performing cellular surgery, repairing DNA, or assembling materials atom by atom. The ultimate frontier of precision medicine and manufacturing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 border-nano-purple/30 hover:border-nano-purple hover:-translate-y-2 transition-all duration-300 group text-center"
        >
          <div className="w-16 h-16 mx-auto bg-nano-purple/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(176,38,255,0.2)]">
            <Globe className="w-8 h-8 text-nano-purple" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Space Elevator</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Carbon nanotubes are currently the only known material strong and light enough to potentially build a cable stretching from Earth to orbit, revolutionizing space travel.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-8 border-nano-pink/30 hover:border-nano-pink hover:-translate-y-2 transition-all duration-300 group text-center"
        >
          <div className="w-16 h-16 mx-auto bg-nano-pink/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,0,127,0.2)]">
            <Eye className="w-8 h-8 text-nano-pink" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Smart Materials</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Materials that adapt to their environment. Imagine clothing that changes thermal properties based on weather, or structures that self-heal when cracked.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <div className="inline-block relative">
          <div className="absolute inset-0 bg-gradient-to-r from-nano-blue via-nano-purple to-nano-pink blur-xl opacity-30 animate-pulse" />
          <p className="relative z-10 text-2xl font-light italic text-white/90">
            "There's plenty of room at the bottom."
          </p>
          <p className="relative z-10 text-sm text-nano-blue mt-2 font-mono uppercase tracking-widest">
            - Richard Feynman, 1959
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
