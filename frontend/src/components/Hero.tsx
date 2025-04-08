import { Search, ArrowRight } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Hero({ searchQuery, setSearchQuery }: HeroProps) {
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
          <div className="max-w-3xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for therapists by specialty, location, or name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#4A90E2] text-white px-8 py-3 rounded-lg hover:bg-[#357ABD] flex items-center justify-center">
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