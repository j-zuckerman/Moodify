import React, { useContext } from 'react';
import { MoodifyContext } from '../context';

//{track.external_urls.spotify}
function Tracks() {
  const { tracks } = useContext(MoodifyContext);

  return (
    <div className="flex flex-wrap ">
      {tracks.map((track) => (
        <div className="flex mr-5 mb-3 align-center w-64 h-24 p-2">
          <img className="h-16 w-16" src={track.album.images[2].url} />
          <div className="p-2">
            <p>{track.artists[0].name}</p>
            <p>{track.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tracks;
