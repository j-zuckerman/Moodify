import React, { useState, useContext } from 'react';
import { MoodifyContext } from '../context';
import styled from 'styled-components';

const Genre = styled.span`
  margin-right: 5px;
`;

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
    <div>
      {listOfGenres.map((genre, index) => (
        <Genre key={index} onClick={() => addGenre(genre)}>
          {genre}
        </Genre>
      ))}
    </div>
  );
}

export default GenreSelector;
