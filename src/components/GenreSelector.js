import React, { useState } from 'react';
import styled from 'styled-components';

const Genre = styled.p`
  margin-right: 5px;
`;

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
    <div>
      {listOfGenres.map((genre) => (
        <Genre>{genre}</Genre>
      ))}
    </div>
  );
}

export default GenreSelector;
