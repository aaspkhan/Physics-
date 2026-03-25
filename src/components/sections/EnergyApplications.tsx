import { motion } from "motion/react";
import Section from "../Section";
import { Sun, BatteryCharging } from "lucide-react";

export default function EnergyApplications() {
  return (
    <Section
      id="energy"
      title="Energy Applications"
      subtitle="Powering the Future"
      className="bg-nano-dark/50"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="glass-card p-8 border-nano-blue/30 hover:border-nano-blue transition-colors group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-nano-blue/10 rounded-xl group-hover:bg-nano-blue/20 transition-colors">
                <Sun className="w-8 h-8 text-nano-blue" />
              </div>
              <h3 className="text-2xl font-bold text-white">Solar Cells</h3>
            </div>
            <p className="text-white/70 leading-relaxed">
              Nanomaterials like quantum dots and perovskites are dramatically increasing the efficiency of solar panels. They can absorb a wider spectrum of light and are cheaper to manufacture, paving the way for ubiquitous solar energy.
            </p>
          </div>

          <div className="glass-card p-8 border-nano-purple/30 hover:border-nano-purple transition-colors group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-nano-purple/10 rounded-xl group-hover:bg-nano-purple/20 transition-colors">
                <BatteryCharging className="w-8 h-8 text-nano-purple" />
              </div>
              <h3 className="text-2xl font-bold text-white">Advanced Batteries</h3>
            </div>
            <p className="text-white/70 leading-relaxed">
              Silicon nanowires and carbon nanotubes are being used to create batteries that charge faster, hold more power, and last longer. This is crucial for the widespread adoption of electric vehicles and renewable energy storage.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[400px] glass-card flex items-center justify-center overflow-hidden"
        >
          {/* Animated Photovoltaic Effect Diagram */}
          <div className="absolute inset-0 bg-gradient-to-b from-nano-blue/5 to-transparent" />
          
          <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
            <h4 className="text-nano-blue font-mono text-sm uppercase tracking-widest mb-8">Photovoltaic Effect</h4>
            
            <div className="relative w-full max-w-xs h-48 border-2 border-white/20 rounded-xl overflow-hidden flex flex-col">
              {/* Sun rays */}
              <div className="absolute top-0 left-0 right-0 h-1/2 flex justify-around overflow-hidden">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, 50, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    className="w-1 h-full bg-gradient-to-b from-yellow-400 to-transparent"
                  />
                ))}
              </div>

              {/* N-Type Layer */}
              <div className="flex-1 bg-nano-blue/20 border-b border-white/20 flex items-center justify-center relative">
                <span className="text-xs font-mono text-nano-blue">N-Type (Electrons)</span>
                {/* Electrons */}
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={`e-${i}`}
                    animate={{ y: [0, -20], opacity: [1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    className="absolute w-2 h-2 bg-nano-blue rounded-full shadow-[0_0_10px_#00f0ff]"
                    style={{ left: `${20 * i}%`, bottom: '10px' }}
                  />
                ))}
              </div>
              
              {/* P-Type Layer */}
              <div className="flex-1 bg-nano-purple/20 flex items-center justify-center relative">
                <span className="text-xs font-mono text-nano-purple">P-Type (Holes)</span>
              </div>
            </div>

            {/* Circuit */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path
                d="M 20 50 L 10 50 L 10 90 L 90 90 L 90 50 L 80 50"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
              />
              <motion.circle
                cx="50" cy="90" r="4"
                fill="#b026ff"
                animate={{ cx: [10, 50, 90] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
