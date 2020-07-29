import React, { createContext, useState, useEffect } from 'react';
import hash from '../util/hash';

export const MoodifyContext = createContext();

const MoodifyProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [genresPicked, setGenresPicked] = useState([]);

  function fetchAccessToken() {
    console.log(hash.access_token);
    setToken(hash.access_token);
  }

  function addGenre(genre) {
    if (genresPicked.length > 5) return;
    if (genresPicked.includes(genre)) removeGenre(genre);
    else setGenresPicked([...genresPicked, genre]);
    console.groupCollapsed(genresPicked);
  }

  function removeGenre(genre) {
    setGenresPicked(genresPicked.filter((element) => element !== genre));
  }

  return (
    <MoodifyContext.Provider
      value={{ token, fetchAccessToken, addGenre, removeGenre, genresPicked }}
    >
      {children}
    </MoodifyContext.Provider>
  );
};

export default MoodifyProvider;
