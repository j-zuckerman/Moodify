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
      {!token && (
        <div className="container mt-20 mx-auto flex flex-col items-center content-center">
          <h1 className="text-5xl">Moodify</h1>
          <h3 className="text-3xl">
            Get a recommended playlist of songs based on your mood.
          </h3>
          <h3 className="text-3xl">
            Connect to your Spotify Account to begin.
          </h3>

          <Login></Login>
        </div>
      )}

      {token && !tracks && (
        <div className="container mt-10 mx-auto flex flex-col items-center content-center">
          <h3 className="text-3xl mb-20">What type of mood are you in?</h3>
          <MoodSlider></MoodSlider>
          <h3 className="text-3xl mb-10">Pick up to 5 genres.</h3>
          <GenreSelector></GenreSelector>
          <RecommendedButton></RecommendedButton>
        </div>
      )}

      {tracks && <Tracks></Tracks>}
    </div>
  );
}

export default App;
