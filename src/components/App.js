import React, { useEffect, useContext } from 'react';
import { MoodifyContext } from '../context';
import Login from './Login';
import MoodSlider from './MoodSlider';
import GenreSelector from './GenreSelector';

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
    </div>
  );
}

export default App;
