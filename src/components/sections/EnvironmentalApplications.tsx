import { motion } from "motion/react";
import Section from "../Section";
import { Droplets, Wind, Leaf } from "lucide-react";

export default function EnvironmentalApplications() {
  return (
    <Section
      id="environment"
      title="Environmental Applications"
      subtitle="Cleaning Our Planet"
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
                <Droplets className="w-8 h-8 text-nano-blue" />
              </div>
              <h3 className="text-2xl font-bold text-white">Water Purification</h3>
            </div>
            <p className="text-white/70 leading-relaxed">
              Nanofilters can remove the smallest impurities, including heavy metals, bacteria, and viruses from water. Carbon nanotubes and graphene oxide membranes are revolutionizing desalination, making clean water accessible globally.
            </p>
          </div>

          <div className="glass-card p-8 border-nano-purple/30 hover:border-nano-purple transition-colors group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-nano-purple/10 rounded-xl group-hover:bg-nano-purple/20 transition-colors">
                <Wind className="w-8 h-8 text-nano-purple" />
              </div>
              <h3 className="text-2xl font-bold text-white">Pollution Control</h3>
            </div>
            <p className="text-white/70 leading-relaxed">
              Nanocatalysts are used in industrial smokestacks and vehicle exhausts to break down toxic gases like carbon monoxide and nitrogen oxides into harmless substances before they enter the atmosphere.
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
          {/* Animated Nanofiltration Diagram */}
          <div className="absolute inset-0 bg-gradient-to-b from-nano-blue/5 to-transparent" />
          
          <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
            <h4 className="text-nano-blue font-mono text-sm uppercase tracking-widest mb-8">Nanofiltration Process</h4>
            
            <div className="relative w-full max-w-xs h-64 border-2 border-white/20 rounded-xl overflow-hidden flex flex-col">
              {/* Dirty Water (Top) */}
              <div className="flex-1 bg-blue-900/30 relative overflow-hidden">
                <span className="absolute top-2 left-2 text-xs font-mono text-blue-300">Contaminated Water</span>
                {/* Particles */}
                {[...Array(15)].map((_, i) => {
                  const size = Math.floor(Math.random() * 3) + 2;
                  return (
                    <motion.div
                      key={`dirt-${i}`}
                      animate={{ y: [0, 100], opacity: [1, 0] }}
                      transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "linear" }}
                      className={`absolute rounded-full ${i % 2 === 0 ? 'bg-red-500/50' : 'bg-green-500/50'}`}
                      style={{ 
                        left: `${Math.random() * 100}%`, 
                        top: '-10px',
                        width: `${size * 4}px`,
                        height: `${size * 4}px`
                      }}
                    />
                  );
                })}
                {/* Water molecules */}
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={`water-${i}`}
                    animate={{ y: [0, 200] }}
                    transition={{ duration: 2 + Math.random(), repeat: Infinity, ease: "linear" }}
                    className="absolute w-1 h-1 bg-nano-blue rounded-full shadow-[0_0_5px_#00f0ff]"
                    style={{ left: `${Math.random() * 100}%`, top: '-10px' }}
                  />
                ))}
              </div>

              {/* Nano Membrane */}
              <div className="h-4 bg-gradient-to-r from-nano-purple to-nano-blue relative flex justify-around items-center">
                {[...Array(10)].map((_, i) => (
                  <div key={`pore-${i}`} className="w-2 h-full bg-nano-dark" />
                ))}
              </div>

              {/* Clean Water (Bottom) */}
              <div className="flex-1 bg-nano-blue/10 relative overflow-hidden">
                <span className="absolute bottom-2 left-2 text-xs font-mono text-nano-blue">Purified Water</span>
                {/* Only water molecules pass through */}
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={`clean-${i}`}
                    animate={{ y: [0, 100], opacity: [0, 1, 0] }}
                    transition={{ duration: 2 + Math.random(), repeat: Infinity, ease: "linear" }}
                    className="absolute w-1 h-1 bg-nano-blue rounded-full shadow-[0_0_5px_#00f0ff]"
                    style={{ left: `${Math.random() * 100}%`, top: '0' }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
