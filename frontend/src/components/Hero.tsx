import { ArrowRight } from 'lucide-react';
import React from 'react';

interface MainWindowProps {
  setIsSection: React.Dispatch<React.SetStateAction<"MainWindow" | "Find_therapist" | "Blogs">>;
}



export default function Hero({setIsSection} : MainWindowProps) {

  const handleClick = (
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
      e.preventDefault();
      setIsSection("Find_therapist");
    };
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Mental Health Journey Starts Here
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Connect with Licensed Psychologists in Minutes
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#4A90E2] text-white px-8 py-3 rounded-lg hover:bg-[#357ABD] flex items-center justify-center"
              onClick={(e) => handleClick(e)}
            >
              Find a Therapist
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-[#4A90E2] text-[#4A90E2] px-8 py-3 rounded-lg hover:bg-blue-50">
              Join as a Professional
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}