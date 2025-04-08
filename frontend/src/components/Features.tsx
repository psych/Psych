import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Shield,
  Clock,
  Users,
  MessageCircle,
} from 'lucide-react';

const features = [
  {
    icon: <Heart className="w-6 h-6 text-white" />,
    title: "Connect with Therapists",
    desc: "Licensed professionals available at your fingertips for personalized care and support.",
  },
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: "Secure Sessions",
    desc: "End-to-end encrypted video sessions ensuring your privacy and confidentiality.",
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    title: "Flexible Scheduling",
    desc: "Book sessions that fit your schedule with our easy-to-use calendar system.",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Group Support",
    desc: "Join therapeutic group sessions and connect with others on similar journeys.",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-white" />,
    title: "24/7 Support",
    desc: "Access our AI-powered chatbot for immediate support whenever you need it.",
  },
];

export default function FeaturesSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % features.length);
    }, 6000); // Increased interval time to 6 seconds
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % features.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const getAdjacentIndices = () => {
    const prevIndex = (index - 1 + features.length) % features.length;
    const nextIndex = (index + 1) % features.length;
    return { prevIndex, nextIndex };
  };

  const truncate = (text: string, length: number) =>
    text.length > length ? text.slice(0, length) + '...' : text;

  return (
    <div className="py-20 bg-white flex justify-center items-center min-h-screen overflow-hidden">
      <div className="w-full max-w-7xl text-center px-4">
        <motion.h2 
          className="text-4xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose <span className="text-[#4A90E2]">Psych</span>
        </motion.h2>

        <div className="relative w-full h-[400px]">
          <div className="absolute inset-0 flex items-center justify-between z-10 px-4">
            <button 
              onClick={handlePrev}
              className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-300"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-300"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="relative w-full h-full flex items-center justify-center">
            {/* Previous Card */}
            <motion.div
              className="absolute w-[260px] h-[300px] left-0 transform -translate-x-1/2"
              animate={{
                x: '-15%',       // Keep a slight offset to the left
                scale: 0.85,     // A scaled-down size for context
                opacity: 1,      // Fully visible
                filter: 'blur(0px)', // No blur for clarity during the swipe
              }}
              transition={{ 
                duration: 2.0,   // Slower transition duration for the left swipe
                ease: "easeInOut"
              }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-white h-full p-6 rounded-2xl shadow-xl 
                flex flex-col items-center justify-start gap-4">
                <div className="bg-[#4A90E2] p-4 rounded-xl">
                  {features[getAdjacentIndices().prevIndex].icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {features[getAdjacentIndices().prevIndex].title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {truncate(features[getAdjacentIndices().prevIndex].desc, 60)}
                </p>
              </div>
            </motion.div>


            {/* Main Card */}
            <AnimatePresence mode="popLayout">
              <motion.div
                key={index}
                className="absolute w-[320px] h-[360px] z-20"
                initial={{ 
                  scale: 0.9,
                  opacity: 0,
                  x: direction * 100
                }}
                animate={{ 
                  scale: 1,
                  opacity: 1,
                  x: 0
                }}
                exit={{ 
                  scale: 0.9,
                  opacity: 0,
                  x: direction * -100
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 0.8
                }}
              >
                <motion.div
                  className="bg-gradient-to-br from-blue-50 to-white h-full p-8 rounded-2xl shadow-xl 
                    border-2 border-[#4A90E2]/20 flex flex-col items-center justify-start gap-6"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.4 }
                  }}
                >
                  <motion.div 
                    className="bg-[#4A90E2] p-5 rounded-xl"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.4 }
                    }}
                  >
                    {features[index].icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {features[index].title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {features[index].desc}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Next Card */}
            <motion.div
              className="absolute w-[260px] h-[300px] right-0 transform translate-x-1/2"
              animate={{
                x: '15%',
                scale: 0.85,
                opacity: 0.5,
                filter: 'blur(2px)',
              }}
              transition={{ 
                duration: 1.2,
                ease: "easeInOut"
              }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-white h-full p-6 rounded-2xl shadow-xl 
                flex flex-col items-center justify-start gap-4">
                <div className="bg-[#4A90E2] p-4 rounded-xl">
                  {features[getAdjacentIndices().nextIndex].icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {features[getAdjacentIndices().nextIndex].title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {truncate(features[getAdjacentIndices().nextIndex].desc, 60)}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-[-40px] left-0 right-0 flex justify-center gap-2">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  i === index ? 'bg-[#4A90E2] w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}