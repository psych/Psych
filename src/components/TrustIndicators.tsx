import React from 'react';

export default function TrustIndicators() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[#4A90E2] mb-2">10,000+</div>
            <div className="text-gray-600">Registered Therapists</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#4A90E2] mb-2">50,000+</div>
            <div className="text-gray-600">Successful Sessions</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#4A90E2] mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#4A90E2] mb-2">100%</div>
            <div className="text-gray-600">HIPAA Compliant</div>
          </div>
        </div>
      </div>
    </div>
  );
}