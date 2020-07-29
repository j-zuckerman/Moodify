import React, { useContext } from 'react';
import { MoodifyContext } from '../context';

function RecommendedButton() {
  const { fetchRecommendedSongs } = useContext(MoodifyContext);
  return (
    <button
      className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={fetchRecommendedSongs}
    >
      Get Songs
    </button>
  );
}

export default RecommendedButton;
