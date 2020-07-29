import React, { useContext } from 'react';
import { MoodifyContext } from '../context';
import Slider from 'react-input-slider';
import styled from 'styled-components';
import {
  VerticalLabelBottom,
  VerticalLabelTop,
  HorizontalLabelLeft,
  HorizontalLabelRight,
} from '../styles/Label';

const MoodContainer = styled.div`
  display: inline-block;
  position: relative;
`;

function MoodSlider() {
  const { state, setState } = useContext(MoodifyContext);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <MoodContainer>
        <VerticalLabelTop>Energetic</VerticalLabelTop>
        <VerticalLabelBottom>Peaceful</VerticalLabelBottom>
        <HorizontalLabelLeft>Sad</HorizontalLabelLeft>
        <HorizontalLabelRight>Happy</HorizontalLabelRight>
        <Slider axis="xy" x={state.x} y={state.y} onChange={setState} />(
        {state.x}, {state.y})
      </MoodContainer>
    </div>
  );
}

export default MoodSlider;
