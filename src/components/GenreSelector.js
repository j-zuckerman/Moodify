import React, { useState, useContext } from 'react';
import GenreButton from './GenreButton';

function GenreSelector() {
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
        <GenreButton data={genre} key={index}></GenreButton>
      ))}
    </div>
  );
}

export default GenreSelector;
