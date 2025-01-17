import React, { useRef, useEffect, useState } from 'react';

function Fifth() {
  const cardsRef = useRef([]); 
  const [visibleCards, setVisibleCards] = useState([]); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, entry.target]);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const cards = Array.from({ length: 8 }, (_, i) => `Card ${i + 1}`);
  return (
    <div className="min-h-screen bg-teal-400 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out ${
              visibleCards.includes(cardsRef.current[index])
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-xl font-bold">{card}</h2>
            <p className="mt-2 text-gray-600">
               Mening cardim.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fifth;
