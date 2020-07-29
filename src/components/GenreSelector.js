import React, { useState, useContext } from 'react';
import { MoodifyContext } from '../context';

function GenreSelector() {
  const { addGenre } = useContext(MoodifyContext);
  const listOfGenres = [
    'alternative',
    'anime',
    'chill',
    'classical',
    'country',
    'dance',
    'disco',
    'dubstep',
    'edm',
    'emo',
    'indie',
    'metal',
    'party',
    'punk',
    'rock',
    'r-n-b',
    'study',
    'techno',
    'trance',
  ];
  return (
    <div className="flex flex-wrap content-center">
      {listOfGenres.map((genre, index) => (
        <span
          className="mr-5 mb-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          key={index}
          onClick={() => addGenre(genre)}
        >
          {genre}
        </span>
      ))}
    </div>
  );
}

export default GenreSelector;
