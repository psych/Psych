
import { Heart, Shield, Clock, Users, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: <Heart className="w-6 h-6 text-white" />, 
    title: "Connect with Licensed Therapists", 
    shortDesc: "Verified mental health professionals.",
    desc: "Access a network of verified mental health professionals from the comfort of your home."
  },
  {
    icon: <Shield className="w-6 h-6 text-white" />, 
    title: "Secure Video Sessions", 
    shortDesc: "Private encrypted calls.",
    desc: "Experience private, encrypted therapy sessions with complete peace of mind."
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />, 
    title: "Flexible Scheduling", 
    shortDesc: "Book anytime, 24/7.",
    desc: "Book appointments that fit your lifestyle, available any time of the day or night."
  },
  {
    icon: <Users className="w-6 h-6 text-white" />, 
    title: "Community Group Events", 
    shortDesc: "Group support available.",
    desc: "Join group therapy and peer discussions to feel connected and supported on your journey."
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-white" />, 
    title: "24/7 Mental Health Chatbot", 
    shortDesc: "Instant chatbot support.",
    desc: "Get instant support and mental wellness tips any time with our intelligent chatbot."
  }
];

export default function FeaturesSection() {
  const featuresRef = useRef(null);

  return (
    <div id="features" ref={featuresRef} className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-[#4A90E2]">Psych</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform offers everything you need for effective online therapy
          </p>
        </motion.div>

        <div className="flex space-x-6 overflow-x-auto pb-4 scroll-smooth snap-x">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="snap-start min-w-[280px] bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg flex-shrink-0 hover:z-10 hover:shadow-xl transition-all cursor-pointer group"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="bg-[#4A90E2] inline-block p-3 rounded-lg mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm block md:hidden">{feature.shortDesc}</p>
              <p className="text-gray-600 text-sm hidden md:block group-hover:block transition-all duration-300 ease-in-out">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
