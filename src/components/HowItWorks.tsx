import React from 'react';
import { Search, Calendar, Video } from 'lucide-react';

export default function HowItWorks() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Search className="h-8 w-8 text-[#4A90E2]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Browse & Choose</h3>
            <p className="text-gray-600">Find the right therapist for your needs</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Calendar className="h-8 w-8 text-[#4A90E2]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Book Instantly</h3>
            <p className="text-gray-600">Schedule sessions at your convenience</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Video className="h-8 w-8 text-[#4A90E2]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Start Healing</h3>
            <p className="text-gray-600">Connect via video, chat, or in-person</p>
          </div>
        </div>
      </div>
    </div>
  );
}