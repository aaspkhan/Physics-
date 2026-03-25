import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Section from "../Section";
import { CheckCircle, XCircle, RefreshCw } from "lucide-react";

const questions = [
  {
    question: "What is the size range of nanomaterials?",
    options: ["1 to 100 millimeters", "1 to 100 micrometers", "1 to 100 nanometers", "1 to 100 picometers"],
    answer: 2,
  },
  {
    question: "Which nanomaterial is known as a single layer of carbon atoms arranged in a honeycomb lattice?",
    options: ["Carbon Nanotubes", "Graphene", "Fullerenes", "Quantum Dots"],
    answer: 1,
  },
  {
    question: "Why do nanomaterials have different properties compared to bulk materials?",
    options: ["Increased surface area to volume ratio", "Quantum effects", "Both A and B", "None of the above"],
    answer: 2,
  },
  {
    question: "In medicine, what is a primary use of nanoparticles?",
    options: ["Creating stronger bones", "Targeted drug delivery", "Replacing blood cells", "Curing all viruses"],
    answer: 1,
  },
  {
    question: "Which environmental application uses nanomaterials to clean water?",
    options: ["Nanofiltration", "Nanocatalysis", "Nanoremediation", "All of the above"],
    answer: 3,
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswer = (index: number) => {
    if (selectedOption !== null) return; // Prevent multiple clicks

    setSelectedOption(index);
    const correct = index === questions[currentQuestion].answer;
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        setShowScore(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  return (
    <Section
      id="quiz"
      title="Interactive Quiz"
      subtitle="Test Your Knowledge"
      className="bg-nano-dark/80"
    >
      <div className="max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          {showScore ? (
            <motion.div
              key="score"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="glass-card p-12 text-center border-nano-blue/50 neon-border-blue"
            >
              <h3 className="text-4xl font-bold text-white mb-6">Quiz Completed!</h3>
              <div className="text-6xl font-black mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-nano-blue to-nano-purple">
                  {score}
                </span>
                <span className="text-white/50 text-4xl"> / {questions.length}</span>
              </div>
              <p className="text-xl text-white/70 mb-8">
                {score === questions.length
                  ? "Perfect! You're a Nano Expert."
                  : score >= questions.length / 2
                  ? "Great job! You know your stuff."
                  : "Keep learning! Nanotechnology is vast."}
              </p>
              <button
                onClick={restartQuiz}
                className="flex items-center gap-2 mx-auto px-8 py-4 bg-nano-blue/20 text-nano-blue font-bold rounded-full hover:bg-nano-blue hover:text-nano-dark transition-all duration-300"
              >
                <RefreshCw className="w-5 h-5" /> Retake Quiz
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="question"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="glass-card p-8 md:p-12 border-white/10"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-nano-blue font-mono uppercase tracking-widest text-sm">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-white/50 font-mono text-sm">
                  Score: {score}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 leading-tight">
                {questions[currentQuestion].question}
              </h3>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => {
                  let buttonClass = "bg-white/5 border-white/10 hover:bg-white/10 hover:border-nano-blue/50 text-white/80";
                  
                  if (selectedOption !== null) {
                    if (index === questions[currentQuestion].answer) {
                      buttonClass = "bg-green-500/20 border-green-500 text-green-400";
                    } else if (index === selectedOption) {
                      buttonClass = "bg-red-500/20 border-red-500 text-red-400";
                    } else {
                      buttonClass = "bg-white/5 border-white/10 text-white/30 opacity-50";
                    }
                  }

                  return (
                    <motion.button
                      key={index}
                      whileHover={selectedOption === null ? { scale: 1.02 } : {}}
                      whileTap={selectedOption === null ? { scale: 0.98 } : {}}
                      onClick={() => handleAnswer(index)}
                      disabled={selectedOption !== null}
                      className={`w-full text-left p-6 rounded-xl border transition-all duration-300 flex items-center justify-between ${buttonClass}`}
                    >
                      <span className="text-lg">{option}</span>
                      {selectedOption !== null && index === questions[currentQuestion].answer && (
                        <CheckCircle className="w-6 h-6 text-green-400" />
                      )}
                      {selectedOption === index && index !== questions[currentQuestion].answer && (
                        <XCircle className="w-6 h-6 text-red-400" />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}
