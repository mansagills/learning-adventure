"use client";

import React, { useState } from 'react';
import { ThermometerSun, Timer, AlertCircle } from 'lucide-react'; // Remove unused Beaker

const VirtualLabExperiment = () => {
  const [temperature, setTemperature] = useState(25);
  const [timer, setTimer] = useState(0);
  const [step, setStep] = useState(0);
  
  const experimentSteps = [
    {
      title: "Extract Peanut Oil",
      description: "Use the press to extract oil from crushed peanuts",
      target: { temp: 25, time: 5 }
    },
    {
      title: "Heat Treatment",
      description: "Heat the extracted oil to the correct temperature",
      target: { temp: 60, time: 10 }
    },
    {
      title: "Chemical Reaction",
      description: "Add the catalyst and monitor the reaction",
      target: { temp: 45, time: 15 }
    }
  ];

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Virtual Lab: Creating Peanut Plastic</h2>
      
      {/* Experiment Controls */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <ThermometerSun className="mr-2 text-blue-500" />
              <span className="font-medium">Temperature</span>
            </div>
            <span className="text-2xl font-bold text-blue-600">{temperature}°C</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={temperature}
            onChange={(e) => setTemperature(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Timer className="mr-2 text-purple-500" />
              <span className="font-medium">Timer</span>
            </div>
            <span className="text-2xl font-bold text-purple-600">{timer}m</span>
          </div>
          <div className="flex justify-around">
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
              onClick={() => setTimer(prev => prev + 1)}
            >
              Add Time
            </button>
            <button
              className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-300"
              onClick={() => setTimer(0)}
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Current Step */}
      <div className="bg-green-50 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-bold text-green-800 mb-2">
          Step {step + 1}: {experimentSteps[step].title}
        </h3>
        <p className="text-green-700 mb-4">{experimentSteps[step].description}</p>
        <div className="flex items-center text-green-600">
          <AlertCircle className="mr-2" />
          <span>Target: {experimentSteps[step].target.temp}°C for {experimentSteps[step].target.time} minutes</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          className="bg-gray-200 text-gray-600 px-6 py-2 rounded-lg hover:bg-gray-300"
          onClick={() => setStep(prev => Math.max(0, prev - 1))}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => setStep(prev => Math.min(experimentSteps.length - 1, prev + 1))}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default VirtualLabExperiment;