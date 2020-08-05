import React, { useState, useContext } from 'react';
import { MoodifyContext } from '../context';

function GenreButton({ data }) {
  const { addGenre, genresPicked } = useContext(MoodifyContext);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (genresPicked.length < 5) setIsClicked(!isClicked);
    addGenre(data);
  };
  return (
    <button
      className={`${
        isClicked
          ? 'bg-green-800 text-white border-transparent hover:bg-transparent hover: text-green-700 hover:border-green-800'
          : 'bg-transparent hover:bg-green-800 text-green-500 hover:text-white  border border-green-800 hover:border-transparent'
      } mr-5 mb-3  font-semibold text-white py-2 px-4  rounded`}
      onClick={handleClick}
    >
      {data}
    </button>
  );
}

export default GenreButton;
