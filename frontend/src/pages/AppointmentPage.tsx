import React, { useState } from 'react';
import DoctorsList from '../components/DoctorsList';
import DoctorDetail from '../components/DoctorDetail';
import { Doctor } from '../components/Types';

export default function AppointmentPage() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  return (
    <div>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-24">
        {selectedDoctor ? (
          <DoctorDetail 
            doctor={selectedDoctor} 
            onBack={() => setSelectedDoctor(null)}
          />
        ) : (
          <DoctorsList onSelectDoctor={setSelectedDoctor} />
        )}
      </div>
    </div>
    </div>
  );
}