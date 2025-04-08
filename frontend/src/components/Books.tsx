import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Books() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <BookCard
        title="JavaScript: The Good Parts"
        overview="A detailed exploration of JavaScript's best features..."
        author="Douglas Crockford"
        image="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800"
      />
      <BookCard
        title="Clean Code"
        overview="A handbook of agile software craftsmanship..."
        author="Robert C. Martin"
        image="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800"
      />
      <BookCard
        title="Design Patterns"
        overview="Elements of reusable object-oriented software..."
        author="Gang of Four"
        image="https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=800"
      />
    </div>
  );
}

function BookCard({ title, overview, author, image }: {
  title: string;
  overview: string;
  author: string;
  image: string;
}) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} className="bg-white rounded-xl shadow-lg overflow-hidden group">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#4A90E2] mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{overview}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{author}</span>
          <motion.button
            whileHover={{ x: 5 }}
            className="text-[#4A90E2] flex items-center space-x-1 text-sm font-medium"
          >
            <span>Read more</span>
            <ArrowRight size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
