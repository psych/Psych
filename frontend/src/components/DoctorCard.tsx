import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Home, Video } from 'lucide-react';
import { Doctor } from './Types';

interface DoctorCardProps {
  doctor: Doctor;
  onSelect: (doctor: Doctor) => void;
}

export default function DoctorCard({ doctor, onSelect }: DoctorCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="md:flex">
        <div className="md:w-1/3">
          <img 
            src={doctor.image} 
            alt={doctor.name} 
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6 md:w-2/3">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-[#4A90E2]">{doctor.name}</h3>
            <div className="flex items-center space-x-1">
              <Star size={16} className="fill-yellow-400 text-yellow-400" />
              <span className="text-gray-600">{doctor.rating}</span>
            </div>
          </div>
          
          <p className="text-gray-600 font-medium mt-1">{doctor.specialization}</p>
          <p className="text-gray-500 text-sm mt-1">{doctor.experience} experience</p>

          <div className="flex items-center space-x-2 mt-3 text-sm text-gray-500">
            <MapPin size={16} />
            <span>{doctor.location}</span>
          </div>

          <div className="flex items-center space-x-4 mt-4">
            {doctor.homeVisit && (
              <div className="flex items-center space-x-1 text-green-600">
                <Home size={16} />
                <span className="text-sm">Home Visit</span>
              </div>
            )}
            {doctor.onlineConsult && (
              <div className="flex items-center space-x-1 text-blue-600">
                <Video size={16} />
                <span className="text-sm">Online</span>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center mt-6">
            <div>
              <p className="text-sm text-gray-500">Next Available</p>
              <p className="font-medium text-[#4A90E2]">{doctor.nextAvailable}</p>
            </div>
            <button
              onClick={() => onSelect(doctor)}
              className="px-6 py-2 bg-[#4A90E2] text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}