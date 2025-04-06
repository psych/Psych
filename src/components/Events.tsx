import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

export default function Events() {
  return (
    <div className="space-y-6">
      <EventCard
        title="React Conference 2024"
        details="Join us for the biggest React conference of the year..."
        date="April 15-17, 2024"
        location="San Francisco, CA"
        image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800"
      />
      <EventCard
        title="Web Development Workshop"
        details="Hands-on workshop covering the latest web development techniques..."
        date="May 5, 2024"
        location="Online"
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800"
      />
    </div>
  );
}

function EventCard({ title, details, date, location, image }: {
  title: string;
  details: string;
  date: string;
  location: string;
  image: string;
}) {
  return (
    <motion.div whileHover={{ x: 5 }} className="bg-white rounded-xl shadow-lg overflow-hidden flex">
      <img src={image} alt={title} className="w-1/3 object-cover" />
      <div className="p-6 flex-1">
        <h3 className="text-xl font-bold text-[#4A90E2] mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{details}</p>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
