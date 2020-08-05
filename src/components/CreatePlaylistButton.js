import React, { useContext } from 'react';
import { MoodifyContext } from '../context';
import { FaSpotify } from 'react-icons/fa';

function CreatePlaylistButton() {
  const { createPlaylist } = useContext(MoodifyContext);

  return (
    <button
      className="flex items-center mt-10  bg-green-800 hover:bg-green-900 text-white font-bold py-3 px-5 rounded"
      onClick={createPlaylist}
    >
      <FaSpotify className="mx-2" />
      Create Playlist
    </button>
  );
}

export default CreatePlaylistButton;
