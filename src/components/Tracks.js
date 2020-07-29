import React, { useContext } from 'react';
import { MoodifyContext } from '../context';

function Tracks() {
  const { tracks } = useContext(MoodifyContext);

  return (
    <div>
      {tracks.map((track) => (
        <div>{track.name}</div>
      ))}
    </div>
  );
}

export default Tracks;
