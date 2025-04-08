import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Book, Newspaper } from 'lucide-react';
import Articles from '../components/Articles';
import Events from '../components/Events';
import Books from '../components/Books';

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState<'articles' | 'events' | 'books'>('articles');

  return (
    <div>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-[#4A90E2] mb-2 text-center"
        >
          Our Blog
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-center mb-12 text-lg"
        >
          Discover our latest articles, upcoming events, and recommended books
        </motion.p>

        {/* Tabs */}
        <div className="flex justify-center space-x-6 mb-12">
          <TabButton 
            icon={<Newspaper size={20} />}
            label="Articles"
            isActive={activeTab === 'articles'}
            onClick={() => setActiveTab('articles')}
          />
          <TabButton 
            icon={<Calendar size={20} />}
            label="Events"
            isActive={activeTab === 'events'}
            onClick={() => setActiveTab('events')}
          />
          <TabButton 
            icon={<Book size={20} />}
            label="Books"
            isActive={activeTab === 'books'}
            onClick={() => setActiveTab('books')}
          />
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'articles' && <Articles />}
            {activeTab === 'events' && <Events />}
            {activeTab === 'books' && <Books />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
    </div>
  );
}

function TabButton({
  icon,
  label,
  isActive,
  onClick
}: {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all transform hover:scale-105 ${
        isActive
          ? 'bg-[#4A90E2] text-white shadow-lg'
          : 'bg-white text-[#4A90E2] border-2 border-[#4A90E2] hover:bg-blue-50'
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
}
