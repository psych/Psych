import { CheckCircle, Shield, Clock, CreditCard } from 'lucide-react';

export default function Features() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 border border-gray-200 rounded-lg">
            <CheckCircle className="h-8 w-8 text-[#2ECC71] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Verified Professionals</h3>
            <p className="text-gray-600">All therapists are licensed and verified</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <Shield className="h-8 w-8 text-[#2ECC71] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Video Sessions</h3>
            <p className="text-gray-600">End-to-end encrypted video calls</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <Clock className="h-8 w-8 text-[#2ECC71] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
            <p className="text-gray-600">Book sessions that fit your schedule</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <CreditCard className="h-8 w-8 text-[#2ECC71] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Multiple Payment Options</h3>
            <p className="text-gray-600">Secure and flexible payment methods</p>
          </div>
        </div>
      </div>
    </div>
  );
}