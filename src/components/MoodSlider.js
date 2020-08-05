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
    <div
      style={{ display: 'flex', justifyContent: 'center' }}
      className="mb-20"
    >
      <MoodContainer>
        <VerticalLabelTop>Energetic</VerticalLabelTop>
        <VerticalLabelBottom>Peaceful</VerticalLabelBottom>
        <HorizontalLabelLeft>Sad</HorizontalLabelLeft>
        <HorizontalLabelRight>Happy</HorizontalLabelRight>
        <Slider
          styles={{
            track: {
              backgroundColor: '#26A36D',
            },
          }}
          axis="xy"
          x={state.x}
          y={state.y}
          onChange={setState}
        />
      </MoodContainer>
    </div>
  );
}

export default MoodSlider;
