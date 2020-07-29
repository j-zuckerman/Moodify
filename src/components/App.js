import React, { useEffect, useContext } from 'react';
import { MoodifyContext } from '../context';
import Login from './Login';
import MoodSlider from './MoodSlider';
import GenreSelector from './GenreSelector';
import RecommendedButton from './RecommendedButton';

function App() {
  const { fetchAccessToken, token } = useContext(MoodifyContext);

  useEffect(() => {
    fetchAccessToken();
  }, []);

  return (
    <div className="App">
      {!token && <Login></Login>}

      <MoodSlider></MoodSlider>
      <GenreSelector></GenreSelector>
      <RecommendedButton></RecommendedButton>
    </div>
  );
}

export default App;
