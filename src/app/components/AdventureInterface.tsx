"use client";  // This must be the first line

import React, { useState } from 'react';
import { Book, Beaker, Search, MessageCircle, Star } from 'lucide-react';
// rest of the code

const AdventureInterface = () => {
  const [score, setScore] = useState(150);
  const [badges, setBadges] = useState(['Scientist', 'Explorer']);
  
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-6">
      {/* Header with Score and Badges */}
      <div className="flex justify-between items-center mb-6 bg-white rounded-lg p-4 shadow-md">
        <div className="flex items-center space-x-4">
          <div className="bg-yellow-100 p-2 rounded-full">
            <Star className="text-yellow-500" size={24} />
          </div>
          <span className="text-2xl font-bold text-yellow-600">{score} points</span>
        </div>
        <div className="flex space-x-2">
          {badges.map(badge => (
            <div key={badge} className="bg-purple-100 px-3 py-1 rounded-full">
              <span className="text-purple-600 font-medium">{badge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-3 gap-6">
        {/* Character Dialog */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-start space-x-4">
            <img
              src="/api/placeholder/120/120"
              alt="George Washington Carver"
              className="rounded-full"
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Dr. George Washington Carver</h3>
              <p className="text-gray-600 mb-4">
                "Welcome young scientist! I need your help finding my missing formula 
                for peanut-based plastic. Can you help me solve this mystery?"
              </p>
              <div className="flex space-x-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                  Let's begin!
                </button>
                <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200">
                  Learn more about me
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Panel */}
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="flex items-center text-lg font-bold text-gray-800 mb-2">
              <Book className="mr-2" /> Journal
            </h3>
            <p className="text-gray-600">Record your discoveries and notes</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="flex items-center text-lg font-bold text-gray-800 mb-2">
              <Beaker className="mr-2" /> Lab Tools
            </h3>
            <p className="text-gray-600">Access virtual experiments</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="flex items-center text-lg font-bold text-gray-800 mb-2">
              <Search className="mr-2" /> Clues
            </h3>
            <p className="text-gray-600">Review collected evidence</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureInterface;