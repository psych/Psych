import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";

type AnswersType = {
    [key: string]: string;
  };
  
  type Question = {
    id: string;
    label: string;
    options: string[];
  };
  
  type QuestionnaireProps = {
    modalOpen: "register" | "questionnaire" | "login" | null;
    setModalOpen: React.Dispatch<React.SetStateAction<"register" | "questionnaire" | "login" | null>>;
  };
  
  export default function Questionnaire({ modalOpen, setModalOpen }: QuestionnaireProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<AnswersType>({});
  
    const questions: Question[] = [
      {
        id: "name",
        label: "What is your name?",
        options: ["Alice", "Bob", "Charlie", "Diana"],
      },
      {
        id: "age",
        label: "How old are you?",
        options: ["Under 18", "18-25", "26-35", "36 and above"],
      },
      {
        id: "color",
        label: "What is your favorite color?",
        options: ["Red", "Blue", "Green", "Yellow"],
      },
    ];
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setAnswers({
        ...answers,
        [questions[currentStep].id]: e.target.value,
      });
      handleNext(e);
    };
  
    const handleNext = (e: React.FormEvent) => {
      e.preventDefault();
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        console.log("Submitted Answers:", answers);
        setModalOpen(null);
      }
    };
  
    const handlePrevious = () => {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
      }
    };
  
    return (
      <AnimatePresence>
        {modalOpen === "questionnaire" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) setModalOpen(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-xl p-8 max-w-md w-full"
            >
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="text-sm text-blue-600 hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowLeft />
                </button>
                <h3 className="text-2xl font-bold">Questionnaire</h3>
                <button
                  onClick={() => setModalOpen(null)}
                  className="hover:bg-gray-100 p-2 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500 hover:text-gray-800" />
                </button>
              </div>
  
              <form className="space-y-4">
                <div>
                  <p className="block text-gray-700 mb-2 text-sm font-medium">
                    {questions[currentStep].label}
                  </p>
                  {questions[currentStep].options.map((option, index) => (
                    <label key={index} className="flex items-center space-x-2 mb-2">
                      <input
                        type="radio"
                        name={questions[currentStep].id}
                        value={option}
                        checked={answers[questions[currentStep].id] === option}
                        onChange={handleChange}
                        className="accent-blue-600"
                        required
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }  