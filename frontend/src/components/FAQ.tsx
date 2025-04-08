import { useState, useRef, forwardRef, useImperativeHandle } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";

// FAQ Data
const faqData = [
  {
    question: "How does online therapy work?",
    answer:
      "Our platform connects you with licensed therapists through secure video sessions. After signing up, you can browse therapist profiles, schedule appointments, and attend sessions from any device with internet access.",
  },
  {
    question: "Is online therapy effective?",
    answer:
      "Research shows online therapy can be as effective as in-person therapy for many conditions including anxiety, depression, and stress management. Our therapists use the same evidence-based approaches they would in traditional settings.",
  },
  {
    question: "How much does it cost?",
    answer:
      "We offer various subscription plans starting at $49/week. Many insurance providers cover our services, and we offer financial aid options for those who qualify.",
  },
  {
    question: "Is my information private?",
    answer:
      "Absolutely. We use bank-level encryption for all communications, and our platform is fully HIPAA compliant. Your privacy and confidentiality are our top priorities.",
  },
];

const FAQ = forwardRef<HTMLDivElement>((props, ref) => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const localRef = useRef<HTMLDivElement>(null);

  // Expose the localRef to the parent via the forwarded ref
  useImperativeHandle(ref, () => localRef.current!);

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div id="faq" ref={localRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our platform
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
              className="mb-4"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="flex justify-between items-center w-full bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <span className="font-medium text-left">{faq.question}</span>
                {activeQuestion === index ? (
                  <ChevronDown className="w-5 h-5 text-[#4A90E2]" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-[#4A90E2]" />
                )}
              </button>
              <AnimatePresence>
                {activeQuestion === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 border border-blue-100 rounded-b-lg">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default FAQ;
