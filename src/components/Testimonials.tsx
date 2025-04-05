import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=50&h=50"
                alt="Client"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <div className="font-semibold">Sarah M.</div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">"Finding the right therapist was so easy with Psych. The platform is intuitive and the video sessions are seamless."</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=50&h=50"
                alt="Therapist"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <div className="font-semibold">Dr. John D.</div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">"As a therapist, Psych has helped me reach more clients and manage my practice efficiently."</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=50&h=50"
                alt="Client"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <div className="font-semibold">Emily R.</div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">"The flexibility of scheduling and variety of payment options made therapy accessible for me."</p>
          </div>
        </div>
      </div>
    </div>
  );
}