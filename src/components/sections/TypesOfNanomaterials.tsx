import { motion } from "motion/react";
import Section from "../Section";
import { Hexagon, Layers, Box, Network } from "lucide-react";

export default function TypesOfNanomaterials() {
  const types = [
    {
      id: "cnt",
      title: "Carbon Nanotubes",
      icon: <Hexagon className="w-10 h-10 text-nano-blue" />,
      desc: "Cylindrical molecules that consist of rolled-up sheets of single-layer carbon atoms (graphene). Known for exceptional strength and electrical conductivity.",
      color: "from-nano-blue/20 to-transparent",
      borderColor: "border-nano-blue/30 hover:border-nano-blue",
    },
    {
      id: "graphene",
      title: "Graphene",
      icon: <Layers className="w-10 h-10 text-nano-purple" />,
      desc: "A single layer of carbon atoms arranged in a two-dimensional honeycomb lattice. It is the thinnest, strongest material known to exist.",
      color: "from-nano-purple/20 to-transparent",
      borderColor: "border-nano-purple/30 hover:border-nano-purple",
    },
    {
      id: "metal",
      title: "Metal Nanoparticles",
      icon: <Box className="w-10 h-10 text-nano-pink" />,
      desc: "Particles of metals like gold or silver at the nanoscale. They exhibit unique optical properties (like surface plasmon resonance) used in sensing and medicine.",
      color: "from-nano-pink/20 to-transparent",
      borderColor: "border-nano-pink/30 hover:border-nano-pink",
    },
    {
      id: "composites",
      title: "Nanocomposites",
      icon: <Network className="w-10 h-10 text-white" />,
      desc: "Materials that incorporate nanosized particles into a matrix of standard material. The result is a drastic improvement in properties like strength or heat resistance.",
      color: "from-white/10 to-transparent",
      borderColor: "border-white/30 hover:border-white",
    },
  ];

  return (
    <Section
      id="types"
      title="Types of Nanomaterials"
      subtitle="Building Blocks of the Future"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {types.map((type, idx) => (
          <motion.div
            key={type.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`glass-card p-6 border transition-all duration-300 group ${type.borderColor} hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden`}
          >
            <div className={`absolute inset-0 bg-gradient-to-b ${type.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10">
              <div className="mb-6 p-4 bg-white/5 rounded-2xl inline-block group-hover:scale-110 transition-transform duration-300">
                {type.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-colors">
                {type.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {type.desc}
              </p>
            </div>

            {/* Decorative background element */}
            <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-20 transition-opacity duration-500 scale-150">
              {type.icon}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
