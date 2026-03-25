import { motion } from "motion/react";
import Section from "../Section";
import { Ruler, Maximize, Zap } from "lucide-react";

export default function WhatAreNanomaterials() {
  const features = [
    {
      icon: <Ruler className="w-8 h-8 text-nano-blue" />,
      title: "The Nanoscale",
      desc: "1 to 100 nanometers in size. A nanometer is one-billionth of a meter. To put it in perspective, a sheet of paper is about 100,000 nanometers thick.",
    },
    {
      icon: <Maximize className="w-8 h-8 text-nano-purple" />,
      title: "Surface Area",
      desc: "As materials get smaller, their surface area to volume ratio increases dramatically, making them much more reactive than their bulk counterparts.",
    },
    {
      icon: <Zap className="w-8 h-8 text-nano-pink" />,
      title: "Quantum Effects",
      desc: "At the nanoscale, classical physics gives way to quantum mechanics, fundamentally altering optical, electrical, and magnetic properties.",
    },
  ];

  return (
    <Section
      id="what-are-nanomaterials"
      title="What Are Nanomaterials?"
      subtitle="The Science of the Small"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-white/80 leading-relaxed mb-6">
            Nanomaterials are chemical substances or materials that are manufactured and used at a very small scale. Nanomaterials are developed to exhibit novel characteristics compared to the same material without nanoscale features.
          </p>
          <div className="space-y-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-4 items-start glass p-4 rounded-xl hover:bg-white/10 transition-colors">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[500px] glass-card flex items-center justify-center overflow-hidden group"
        >
          {/* Animated Diagram */}
          <div className="absolute inset-0 bg-gradient-to-br from-nano-blue/10 to-nano-purple/10 opacity-50" />
          
          <div className="relative z-10 w-64 h-64">
            {/* Core */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 m-auto w-24 h-24 bg-nano-blue rounded-full blur-xl opacity-50"
            />
            <div className="absolute inset-0 m-auto w-16 h-16 bg-gradient-to-br from-nano-blue to-white rounded-full shadow-[0_0_30px_rgba(0,240,255,0.8)]" />
            
            {/* Orbit 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 m-auto w-full h-full border border-nano-purple/30 rounded-full"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-nano-purple rounded-full shadow-[0_0_15px_rgba(176,38,255,0.8)]" />
            </motion.div>

            {/* Orbit 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 m-auto w-48 h-48 border border-nano-pink/30 rounded-full"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-nano-pink rounded-full shadow-[0_0_15px_rgba(255,0,127,0.8)]" />
            </motion.div>
          </div>

          <div className="absolute bottom-6 left-6 right-6 text-center">
            <p className="text-sm font-mono text-nano-blue uppercase tracking-widest">Interactive Nano Structure</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
