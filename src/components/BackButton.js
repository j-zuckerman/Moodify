import React, { useContext } from 'react';
import { MoodifyContext } from '../context';

function BackButton() {
  const { reset } = useContext(MoodifyContext);

  return (
    <button
      className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={reset}
    >
      Go Back
    </button>
  );
}

export default BackButton;
