import React, { useEffect, useContext } from 'react';
import { MoodifyContext } from '../context';
import Login from './Login';
import MoodSlider from './MoodSlider';
import GenreSelector from './GenreSelector';
import RecommendedButton from './RecommendedButton';
import Tracks from './Tracks';
import BackButton from './BackButton';
import CreatePlaylistButton from './CreatePlaylistButton';

function App() {
  const { fetchAccessToken, token, tracks } = useContext(MoodifyContext);

  useEffect(() => {
    fetchAccessToken();
  }, []);

  return (
    <div>
      {!token && (
        <div className="container mt-20 mx-auto flex flex-col items-center content-center">
          <h1 className="text-3xl p-5 lg:text-5xl">Moodify</h1>
          <h3 className="text-2xl p-5 lg:text-3xl">
            Get a recommended playlist of songs based on your mood.
          </h3>
          <h3 className="text-2xl p-5 lg:text-3xl">
            Connect to your Spotify Account to begin.
          </h3>

          <Login></Login>
        </div>
      )}

      {token && !tracks && (
        <div className="container mt-10 mx-auto flex flex-col items-center content-center">
          <h3 className="text-2xl mb-20 p-5 lg:text-3xl">
            What type of mood are you in?
          </h3>
          <MoodSlider></MoodSlider>
          <h3 className="text-2xl mb-10 p-5 lg:text-3xl">
            Pick up to 5 genres.
          </h3>
          <GenreSelector></GenreSelector>
          <RecommendedButton></RecommendedButton>
        </div>
      )}

      {tracks && (
        <div className="flex justify-center items-center flex-col">
          <h3 className="text-xl mt-20 mb-12 p-5 md:text-2xl lg: text-3xl">
            Here are your recommended songs:
          </h3>
          <Tracks></Tracks>
          <div className="flex my-10">
            <BackButton></BackButton>
            <CreatePlaylistButton></CreatePlaylistButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
