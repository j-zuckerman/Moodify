import React, { useContext } from 'react';
import { MoodifyContext } from '../context';

function BackButton() {
  const { reset } = useContext(MoodifyContext);

  return (
    <button
      className="mt-10 bg-green-800 hover:bg-green-900 text-white font-bold py-3 px-5 rounded"
      onClick={reset}
    >
      Go Back
    </button>
  );
}

export default BackButton;
