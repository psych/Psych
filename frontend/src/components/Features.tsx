import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getDisplayItems = () => {
    const items = [];
    for (let offset = -1; offset <= 1; offset++) {
      const featureIndex = (index + offset + features.length) % features.length;
      items.push({
        ...features[featureIndex],
        position: offset,
        key: `${featureIndex}-${offset}`,
      });
    }
    return items;
  };

  const truncate = (text: string, length: number) =>
    text.length > length ? text.slice(0, length) + '... read more' : text;

  return (
    <div className="py-20 bg-white flex justify-center items-center min-h-screen overflow-hidden">
      <div className="w-full max-w-7xl text-center">
        <h2 className="text-4xl font-bold mb-12">
          Why Choose <span className="text-[#4A90E2]">Psych</span>
        </h2>

        <div className="relative w-full h-[360px] perspective-[1200px]">
          <div className="relative w-full h-full flex items-center justify-center">
            {getDisplayItems().map((feature) => {
              const isCenter = feature.position === 0;
              const scale = isCenter ? 1 : 0.85;
              const opacity = isCenter ? 1 : 0.75;
              const translateX = feature.position * 280;
              const rotateY = feature.position * -40;
              const zIndex = 10 - Math.abs(feature.position);
              const boxClasses = isCenter
                ? 'w-[260px] h-[260px]'
                : 'w-[220px] h-[220px]';

              return (
                <motion.div
                  key={feature.key}
                  className={`absolute ${boxClasses}`}
                  initial={false}
                  animate={{
                    scale,
                    opacity,
                    x: translateX,
                    rotateY,
                    zIndex,
                  }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div
                    className={`bg-gradient-to-br from-blue-50 to-white h-full p-4 rounded-2xl shadow-xl flex flex-col items-center justify-start
                      ${isCenter ? 'border-2 border-[#4A90E2]/20' : ''}`}
                  >
                    <div className="bg-[#4A90E2] p-3 rounded-lg mb-3">
                      {feature.icon}
                    </div>
                    <h3 className="text-base font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-xs text-center">
                      {isCenter ? feature.desc : truncate(feature.desc, 35)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
