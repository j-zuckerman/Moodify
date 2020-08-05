import React, { useContext } from 'react';
import { MoodifyContext } from '../context';

function CreatePlaylistButton() {
  const { createPlaylist } = useContext(MoodifyContext);

  return (
    <button
      className="mt-10  mr-5 bg-green-800 hover:bg-green-900 text-white font-bold py-3 px-5 rounded"
      onClick={createPlaylist}
    >
      Create Playlist
    </button>
  );
}

export default CreatePlaylistButton;
