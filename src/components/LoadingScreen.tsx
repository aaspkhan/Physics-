import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-nano-dark"
      >
        <div className="relative flex flex-col items-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="w-32 h-32 border-4 border-transparent border-t-nano-blue border-b-nano-purple rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute top-4 left-4 w-24 h-24 border-4 border-transparent border-l-nano-pink border-r-nano-blue rounded-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-nano-blue to-nano-purple">
              {progress}%
            </span>
          </div>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-2xl font-mono tracking-widest text-nano-blue neon-text-blue uppercase"
        >
          Initializing NanoTech
        </motion.h1>
        <div className="w-64 h-1 mt-6 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-nano-blue via-nano-purple to-nano-pink"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
