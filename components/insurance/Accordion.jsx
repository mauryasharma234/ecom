import React, { useState } from "react";

const Modal = ({ isOpen, onClose, benefits }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white rounded-lg p-8 max-w-lg">
        <div className="flex justify-end">
          <button onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div>
          {benefits.map((benefit) => (
            <div key={benefit.id} className="mb-4">
              <strong>{benefit.benefit}</strong>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ benefits }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="text-blue-500 hover:text-blue-700"
      >
        View Benefits
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        benefits={benefits}
      />
    </div>
  );
};

export default Accordion;
