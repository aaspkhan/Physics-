import { motion } from "motion/react";
import Section from "../Section";
import { Pill, Activity, Dna } from "lucide-react";

export default function MedicalApplications() {
  return (
    <Section
      id="medical"
      title="Medical Applications"
      subtitle="Nanomedicine & Targeted Therapy"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1 relative h-[400px] glass-card flex items-center justify-center overflow-hidden"
        >
          {/* Animated Targeted Drug Delivery Diagram */}
          <div className="absolute inset-0 bg-gradient-to-tr from-nano-pink/10 to-transparent" />
          
          <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
            <h4 className="text-nano-pink font-mono text-sm uppercase tracking-widest mb-8">Targeted Drug Delivery</h4>
            
            <div className="relative w-full max-w-sm h-48 border border-white/10 rounded-full overflow-hidden bg-white/5">
              {/* Bloodstream */}
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center w-[200%]"
              >
                {/* Red Blood Cells */}
                {[...Array(10)].map((_, i) => (
                  <div
                    key={`rbc-${i}`}
                    className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/40 mx-4 shadow-[inset_0_0_10px_rgba(255,0,0,0.2)]"
                    style={{ transform: `translateY(${Math.sin(i) * 20}px)` }}
                  />
                ))}
              </motion.div>

              {/* Cancer Cell */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 w-24 h-24 bg-purple-900/40 rounded-full border-2 border-purple-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(128,0,128,0.4)]">
                <span className="text-xs font-mono text-purple-300">Tumor</span>
              </div>

              {/* Nanoparticles delivering drug */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={`nano-${i}`}
                  initial={{ x: -50, y: 0, opacity: 0 }}
                  animate={{ 
                    x: [ -50, 150, 200 ], 
                    y: [ 0, Math.sin(i) * 30, 0 ],
                    opacity: [0, 1, 0],
                    scale: [1, 1, 0.5]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 1.2 }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-nano-pink rounded-full shadow-[0_0_10px_#ff007f] flex items-center justify-center"
                >
                  <div className="w-1 h-1 bg-white rounded-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2 space-y-6"
        >
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-nano-pink/10 rounded-xl border border-nano-pink/30">
              <Pill className="w-6 h-6 text-nano-pink" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Targeted Drug Delivery</h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Nanoparticles can be engineered to carry drugs directly to diseased cells (like cancer cells) while ignoring healthy ones. This drastically reduces side effects and improves treatment efficacy.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-3 bg-nano-blue/10 rounded-xl border border-nano-blue/30">
              <Activity className="w-6 h-6 text-nano-blue" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Diagnostics & Imaging</h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Quantum dots and magnetic nanoparticles enhance MRI and fluorescent imaging, allowing doctors to detect diseases at their earliest stages, long before physical symptoms appear.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-3 bg-nano-purple/10 rounded-xl border border-nano-purple/30">
              <Dna className="w-6 h-6 text-nano-purple" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Tissue Engineering</h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Nanomaterials provide scaffolds that mimic the body's natural extracellular matrix, promoting cell growth and helping to regenerate damaged tissues or even entire organs.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
