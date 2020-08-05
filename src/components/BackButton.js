import React, { useContext } from 'react';
import { MoodifyContext } from '../context';
import { FaArrowLeft } from 'react-icons/fa';

function BackButton() {
  const { reset } = useContext(MoodifyContext);

  return (
    <button
      className="flex items-center mt-10 mx-5 bg-green-800 hover:bg-green-900 text-white font-bold py-3 px-5 rounded"
      onClick={reset}
    >
      <FaArrowLeft className="mx-2" />
      Go Back
    </button>
  );
}

export default BackButton;
