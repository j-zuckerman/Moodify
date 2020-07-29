import React, { useEffect, useContext } from 'react';
import { MoodifyContext } from '../context';
import Login from './Login';
import MoodSlider from './MoodSlider';
import GenreSelector from './GenreSelector';
import RecommendedButton from './RecommendedButton';
import Tracks from './Tracks';

function App() {
  const { fetchAccessToken, token, tracks } = useContext(MoodifyContext);

  useEffect(() => {
    fetchAccessToken();
  }, []);

  return (
    <div className="App">
      {!token && <Login></Login>}

      {token && !tracks && (
        <>
          <MoodSlider></MoodSlider>
          <GenreSelector></GenreSelector>
          <RecommendedButton></RecommendedButton>
        </>
      )}

      {tracks && <Tracks></Tracks>}
    </div>
  );
}

export default App;
