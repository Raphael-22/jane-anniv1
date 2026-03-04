import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';

const questions = [
  {
    question: "Where did we first meet?",
    options: ["A coffee shop", "Arz Hotel", "At a party", "Through friends"],
    answer: 1
  },
  {
    question: "Who did you ride the ATV with?",
    options: ["Raphael", "Raphael's brother", "Your sister", "Alone"],
    answer: 1
  },
  {
    question: "What did we disagree about?",
    options: ["Which series is better", "Where to eat", "Andrew Tate", "The weather"],
    answer: 2
  },
  {
    question: "When did we officially become 'us'?",
    options: ["September 4, 2022", "September 16, 2022", "October 1, 2022", "August 20, 2022"],
    answer: 1
  }
];

export default function LoveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswerClick = (index: number) => {
    if (selectedOption !== null) return;
    
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

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  return (
    <section className="py-32 px-6 bg-champagne/20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Heart className="mx-auto text-rose/40 fill-rose/20 mb-6" size={32} />
          <h2 className="text-4xl md:text-6xl font-accent text-rose/80 mb-4">A Little Game</h2>
          <p className="text-taupe uppercase tracking-widest text-sm font-medium">How well do you remember?</p>
        </div>

        <div className="bg-white/60 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-xl shadow-rose/5 border border-rose/10 min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {showScore ? (
              <motion.div
                key="score"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center"
              >
                <h3 className="text-3xl font-serif text-charcoal mb-6">
                  {score === questions.length ? "Perfect Score! ❤️" : "Not bad, my love! 💕"}
                </h3>
                <p className="text-xl text-charcoal/70 mb-8">
                  You scored {score} out of {questions.length}
                </p>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 bg-rose/80 text-white rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-rose transition-colors shadow-md"
                >
                  Play Again
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full"
              >
                <div className="mb-8 flex justify-between items-center text-sm font-medium text-rose/60 uppercase tracking-widest">
                  <span>Question {currentQuestion + 1}/{questions.length}</span>
                  <span>Score: {score}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif text-charcoal mb-8 leading-tight">
                  {questions[currentQuestion].question}
                </h3>
                
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => {
                    let buttonClass = "w-full text-left px-6 py-4 rounded-xl border transition-all duration-300 font-medium ";
                    
                    if (selectedOption === null) {
                      buttonClass += "border-rose/20 hover:border-rose/50 hover:bg-rose/5 text-charcoal/80";
                    } else if (index === questions[currentQuestion].answer) {
                      buttonClass += "border-green-400 bg-green-50 text-green-700";
                    } else if (selectedOption === index) {
                      buttonClass += "border-red-400 bg-red-50 text-red-700";
                    } else {
                      buttonClass += "border-rose/10 opacity-50 text-charcoal/50";
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerClick(index)}
                        disabled={selectedOption !== null}
                        className={buttonClass}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
