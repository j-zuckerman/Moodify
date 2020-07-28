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

  return (
    <MoodifyContext.Provider value={{ token, fetchAccessToken }}>
      {children}
    </MoodifyContext.Provider>
  );
};

export default MoodifyProvider;
