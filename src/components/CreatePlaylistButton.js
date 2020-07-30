import React, { useContext } from 'react';
import { MoodifyContext } from '../context';

function CreatePlaylistButton() {
  const { createPlaylist } = useContext(MoodifyContext);

  return (
    <button
      className="mt-10 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={createPlaylist}
    >
      Create Playlist
    </button>
  );
}

export default CreatePlaylistButton;
