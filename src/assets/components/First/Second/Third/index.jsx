import React, { useState, useRef, useEffect } from 'react';

function Third() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    <div className="relative">
      <button
        onClick={openModal}
        className="bg-blue-500 text-white p-2 rounded-lg"
      >
        Open Modal
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={closeModal}
        ></div>
      )}

      {/* Modal */}
      {isOpen && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 flex justify-center items-center"
        >
          <div
            className={`bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 ${
              isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            <h2 className="text-xl font-bold mb-4">Modal</h2>
            <p className="mb-4">Modal ochildi</p>
            <button
              onClick={closeModal}
              className="bg-red-700 text-white p-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Third;
