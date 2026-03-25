import { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function Section({ id, children, className, title, subtitle }: SectionProps) {
  return (
    <section id={id} className={cn("min-h-screen py-24 relative flex flex-col justify-center", className)}>
      <div className="container mx-auto px-6 relative z-10">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-nano-blue/80 max-w-2xl mx-auto font-mono uppercase tracking-widest text-sm">
                {subtitle}
              </p>
            )}
            {title && (
              <div className="w-24 h-1 bg-gradient-to-r from-nano-blue to-nano-purple mx-auto mt-6 rounded-full neon-border-blue" />
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
