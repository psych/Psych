import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Award, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Languages, 
  MapPin, 
  MessageSquare, 
  Star, 
  X 
} from 'lucide-react';
import { Doctor } from './Types';

interface DoctorDetailProps {
  doctor: Doctor;
  onBack: () => void;
}

export default function DoctorDetail({ doctor, onBack }: DoctorDetailProps) {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-[#4A90E2] mb-6"
      >
        <ArrowLeft size={20} />
        <span>Back to doctors</span>
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 p-6 border-r border-gray-100">
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              className="w-full h-64 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold text-[#4A90E2] mt-4">{doctor.name}</h2>
            <p className="text-gray-600 font-medium">{doctor.specialization}</p>
            
            <div className="flex items-center space-x-2 mt-4">
              <Star size={16} className="fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{doctor.rating}</span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-3">
                <Award size={20} className="text-[#4A90E2]" />
                <span className="text-gray-600">{doctor.experience} experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-[#4A90E2]" />
                <span className="text-gray-600">{doctor.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Languages size={20} className="text-[#4A90E2]" />
                <span className="text-gray-600">{doctor.languages.join(", ")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageSquare size={20} className="text-[#4A90E2]" />
                <span className="text-gray-600">Consultation fee: ${doctor.fee}</span>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 p-6">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">About</h3>
              <p className="text-gray-600">{doctor.about}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Education</h3>
              <ul className="space-y-2">
                {doctor.education.map((edu, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-green-500" />
                    <span className="text-gray-600">{edu}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Clinic Photos</h3>
              <div className="grid grid-cols-2 gap-4">
                {doctor.clinicPhotos.map((photo, index) => (
                  <img 
                    key={index}
                    src={photo} 
                    alt={`Clinic ${index + 1}`}
                    className="rounded-lg w-full h-40 object-cover"
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Book Appointment</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <select 
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="p-2 border rounded-lg"
                >
                  <option value="">Select Date</option>
                  {Object.keys(doctor.availability).map((date) => (
                    <option key={date} value={date}>{date}</option>
                  ))}
                </select>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="p-2 border rounded-lg"
                  disabled={!selectedDate}
                >
                  <option value="">Select Time</option>
                  {selectedDate && doctor.availability[selectedDate].map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
              <button
                onClick={() => setShowConfirmation(true)}
                disabled={!selectedDate || !selectedTime}
                className="w-full py-3 bg-[#4A90E2] text-white rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl p-6 max-w-md w-full mx-4"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-800">Confirm Appointment</h3>
              <button onClick={() => setShowConfirmation(false)}>
                <X size={24} className="text-gray-500" />
              </button>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                You're about to book an appointment with <span className="font-medium">{doctor.name}</span>
              </p>
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="text-[#4A90E2]" />
                  <span>Date: {selectedDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} className="text-[#4A90E2]" />
                  <span>Time: {selectedTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageSquare size={16} className="text-[#4A90E2]" />
                  <span>Fee: ${doctor.fee}</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowConfirmation(false);
                    // Add API call or booking logic here
                  }}
                  className="flex-1 py-2 bg-[#4A90E2] text-white rounded-lg hover:bg-blue-600"
                >
                  Confirm
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}