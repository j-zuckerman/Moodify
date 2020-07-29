import React, { createContext, useState, useEffect } from 'react';
import hash from '../util/hash';

export const MoodifyContext = createContext();

const MoodifyProvider = ({ children }) => {
  const [state, setState] = useState({ x: 10, y: 10 });
  const [token, setToken] = useState(null);
  const [tracks, setTracks] = useState(null);
  const [genresPicked, setGenresPicked] = useState([]);
  const [userId, setUserId] = useState(null);

  function fetchAccessToken() {
    console.log(hash.access_token);
    setToken(hash.access_token);

    getUserId();
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

  async function fetchRecommendedSongs() {
    // Create comma separated list of genres for API call
    let tempString = '';
    for (let i = 0; i < genresPicked.length; i++) {
      tempString += genresPicked[i] + ',';
    }

    //remove last comma
    let genreListString = tempString.slice(0, tempString.length - 1);
    console.log(genreListString);

    //normalize mood to decimal values
    let valenceValue = state.x / 100;
    let energeticValue = Math.abs(state.y - 100) / 100;

    let endpoint = `https://api.spotify.com/v1/recommendations?seed_genres=${genreListString}&min_popularity=65&target_valence=${valenceValue.toFixed(
      1
    )}&target_energy=${energeticValue.toFixed(1)}`;

    const response = await fetch(endpoint, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    const data = await response.json();
    console.log(data);
    setTracks(data.tracks);
  }

  function reset() {
    setTracks(null);
    setGenresPicked([]);
  }

  async function getUserId() {
    const response = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    const data = await response.json();
    console.log(data);
    return data.id;
  }

  async function createPlaylist() {
    const userId = await getUserId();
    const response = await fetch(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: 'Moodify Recommendations' }),
      }
    );
    let data = await response.json();

    populatePlaylist(data.id);
  }

  async function populatePlaylist(playlistId) {
    const populatePlaylistUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;

    await fetch(populatePlaylistUrl, {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uris: tracks.map((track) => track.uri),
      }),
    });

    const playlistUrl = `https://open.spotify.com/playlist/${playlistId}`;
    window.open(playlistUrl);
  }

  return (
    <MoodifyContext.Provider
      value={{
        token,
        fetchAccessToken,
        addGenre,
        removeGenre,
        genresPicked,
        state,
        setState,
        fetchRecommendedSongs,
        tracks,
        reset,
        createPlaylist,
      }}
    >
      {children}
    </MoodifyContext.Provider>
  );
};

export default MoodifyProvider;
