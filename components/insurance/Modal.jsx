import React, { useState } from "react";
import ProposalForm from "./ProposalForm";

const Modal = ({toggleModal}) => {
 

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full max-h-96 overflow-y-auto z-50">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={toggleModal}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <ProposalForm />
          </div>
        </>
      {/* <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={toggleModal}
      >
        Toggle modal
      </button> */}
    </div>
  );
};

export default Modal;
