import React, { useContext } from 'react';
import { MoodifyContext } from '../context';

function RecommendedButton() {
  const { fetchRecommendedSongs } = useContext(MoodifyContext);
  return (
    <button
      className="my-8 text-xl bg-green-800 hover:bg-green-900 text-white font-bold py-3 px-5 rounded"
      onClick={fetchRecommendedSongs}
    >
      Get Songs
    </button>
  );
}

export default RecommendedButton;
