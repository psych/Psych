import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Heart, Shield, Clock } from 'lucide-react';

const features = [
  {
    title: "Connect with Licensed Therapists",
    description: "Access a network of verified mental health professionals from the comfort of your home",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
    icon: <Heart className="w-8 h-8 text-white" />
  },
  {
    title: "Secure Video Sessions",
    description: "Experience private, encrypted therapy sessions with complete peace of mind",
    image: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?auto=format&fit=crop&w=1200&q=80",
    icon: <Shield className="w-8 h-8 text-white" />
  },
  {
    title: "Flexible Scheduling",
    description: "Book appointments that fit your lifestyle, available 24/7",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=1200&q=80",
    icon: <Clock className="w-8 h-8 text-white" />
  },
];

export default function WelcomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Slider */}
      {features.map((feature, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
      ))}

      {/* Centered Auth Overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-2xl max-w-md w-full text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-[#4A90E2] rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mt-4">Psych</h1>
            <p className="text-gray-600 text-lg mt-2">
             Hello Your journey to better mental health begins here
            </p>
          </div>
          <div className="space-y-4">
            <button className="w-full bg-[#4A90E2] text-white py-4 rounded-xl hover:bg-[#357ABD] transition-all font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Login
            </button>
            <button className="w-full border-2 border-[#4A90E2] text-[#4A90E2] py-4 rounded-xl hover:bg-blue-50 transition-all font-medium text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Register
            </button>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            <p>
              By continuing, you agree to our{' '}
              <a href="#" className="text-[#4A90E2] hover:underline font-medium">
                Terms of Service
              </a>{' '}
              &amp;{' '}
              <a href="#" className="text-[#4A90E2] hover:underline font-medium">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center space-x-4 z-30">
        <button
          onClick={prevSlide}
          className="bg-white/20 hover:bg-white/30 rounded-full p-3 backdrop-blur-sm transition-all hover:scale-110"
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <div className="flex space-x-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-10' : 'bg-white/50 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="bg-white/20 hover:bg-white/30 rounded-full p-3 backdrop-blur-sm transition-all hover:scale-110"
          aria-label="Next slide"
        >
          <ArrowRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
