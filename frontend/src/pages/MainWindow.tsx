import React from "react";
import Hero from '../components/Hero';
import TrustIndicators from '../components/TrustIndicators';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';

interface MainWindowProps {
  setIsSection: React.Dispatch<React.SetStateAction<"MainWindow" | "Find_therapist" | "Blogs">>;
}

export default function MainWindow({ setIsSection }: MainWindowProps) {
  return (
    <div>
      <Hero setIsSection={setIsSection} />
      <TrustIndicators />
      <HowItWorks />
      <Features />
      <Testimonials />
    </div>
  );
}
