import React, { useState, useRef, useEffect } from 'react';
import Gadzhi from "../../../images/Gadzhi.png";
import Hormozi from "../../../images/Hormozi.webp";
import Luke from "../../../images/Luke.jpeg";
import TOPG from "../../../images/TOPG.png";
import Tristan from "../../../images/Tristan.jpeg";

function Second() {
  const images = [Gadzhi, Hormozi, Luke, TOPG, Tristan];
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideIntervalRef = useRef(null);

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    slideIntervalRef.current = setInterval(goNext, 1000000000);
    return () => {
      clearInterval(slideIntervalRef.current);
    };
  }, []);

  return (
    <div className="w-[600px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-full h-[500px] object-cover" />
      </div>
      <div className="flex justify-between p-4">
        <button
          onClick={goPrevious}
          className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition"
        >
          Oldinga
        </button>
        <button
          onClick={goNext}
          className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition"
        >
        Keyingi
        </button>
      </div>
    </div>
  );
}

export default Second;
