import { motion } from "motion/react";
import Section from "../Section";
import { ExternalLink, BookOpen } from "lucide-react";

export default function References() {
  const references = [
    {
      title: "National Nanotechnology Initiative",
      desc: "Official website of the United States National Nanotechnology Initiative, providing comprehensive information on nano research and development.",
      link: "https://www.nano.gov/",
    },
    {
      title: "Nature Nanotechnology",
      desc: "A multidisciplinary journal publishing high-quality research papers in all areas of nanoscience and nanotechnology.",
      link: "https://www.nature.com/nnano/",
    },
    {
      title: "Introduction to Nanotechnology",
      desc: "Charles P. Poole Jr., Frank J. Owens. A foundational textbook covering the physics and chemistry of nanomaterials.",
      link: "#",
    },
  ];

  return (
    <Section
      id="references"
      title="References & Further Reading"
      subtitle="Dive Deeper"
    >
      <div className="max-w-4xl mx-auto grid gap-6">
        {references.map((ref, idx) => (
          <motion.a
            key={idx}
            href={ref.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass p-6 rounded-xl border-white/10 hover:border-nano-blue/50 transition-all duration-300 group flex items-start gap-4"
          >
            <div className="p-3 bg-white/5 rounded-lg group-hover:bg-nano-blue/10 transition-colors shrink-0">
              <BookOpen className="w-6 h-6 text-white/50 group-hover:text-nano-blue transition-colors" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-nano-blue transition-colors flex items-center gap-2">
                {ref.title}
                {ref.link !== "#" && <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />}
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                {ref.desc}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
