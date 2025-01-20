"use client"

import React from 'react';
import { MapPin, Star, Book, Beaker, Award } from 'lucide-react';

const LearningNavigation = () => {
  const stages = [
    { name: 'Introduction', icon: Book, complete: true },
    { name: 'Clues & Puzzles', icon: MapPin, complete: true },
    { name: 'Experiments', icon: Beaker, complete: false },
    { name: 'Mystery', icon: Star, complete: false },
    { name: 'Conclusion', icon: Award, complete: false }
  ];

  return (
    <div className="w-full bg-blue-50 p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">
        The Mystery of the Missing Peanut Plastic
      </h1>
      
      <div className="flex justify-between items-center">
        {stages.map((stage, index) => (
          <div key={stage.name} className="flex flex-col items-center w-32">
            <div className={`h-16 w-16 rounded-full flex items-center justify-center ${
              stage.complete ? 'bg-green-500' : 'bg-gray-200'
            }`}>
              <stage.icon size={32} color={stage.complete ? 'white' : '#666'} />
            </div>
            <div className="h-1 w-full bg-gray-200 my-2">
              <div 
                className="h-full bg-green-500"
                style={{ width: stage.complete ? '100%' : '0%' }}
              />
            </div>
            <span className="text-sm font-medium text-gray-700 text-center">
              {stage.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningNavigation;