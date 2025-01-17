import React, { useState, useRef } from 'react';
function Fourth() {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null);
  const addProgress = () => {
    if (progress < 100) {
      setProgress((prev) => prev + 10);
    }
  };
  const getProgressColor = () => {
    if (progress <= 50) {
      return 'bg-green-400';  
    } else if (progress < 100) {
      return 'bg-yellow-400'; 
    } else {
      return 'bg-red-400';   
    }
  };
  return (
    <div className="w-full max-w-xs mx-auto p-6">
      <div className="mb-4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-300 h-4 rounded">
            <div
              ref={progressRef}
              style={{ width: `${progress}%` }}
              className={`h-4 rounded ${getProgressColor()}`}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={addProgress}
          disabled={progress === 100}
          className="bg-blue-800 text-white p-2 disabled:bg-emerald-950"
        >
          Add Progress
        </button>
      </div>
    </div>
  );
}

export default Fourth;
