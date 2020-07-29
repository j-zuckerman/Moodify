import React, { useContext } from 'react';
import { MoodifyContext } from '../context';

function RecommendedButton() {
  const { fetchRecommendedSongs } = useContext(MoodifyContext);
  return <button onClick={fetchRecommendedSongs}>Get Songs</button>;
}

export default RecommendedButton;
