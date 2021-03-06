import React, { useContext } from 'react';
import { MoodifyContext } from '../context';
import { FaArrowRight } from 'react-icons/fa';

function RecommendedButton() {
  const { fetchRecommendedSongs } = useContext(MoodifyContext);
  return (
    <button
      className="flex items-center my-8 text-xl bg-green-800 hover:bg-green-900 text-white font-bold py-3 px-5 rounded"
      onClick={fetchRecommendedSongs}
    >
      Get Songs
      <FaArrowRight className="mx-2" />
    </button>
  );
}

export default RecommendedButton;
