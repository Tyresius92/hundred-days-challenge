import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import VideoPlayerCard from './VideoPlayerCard';
import MonsterSummaryCard from './MonsterSummaryCard';
import ControlPanel from './ControlPanel';

const App = () => {
  const [eyeCount, setEyeCount] = useState(null);
  const [hornCount, setHornCount] = useState(null);
  const [color, setColor] = useState(null);
  const [abilities, setAbilities] = useState([]);
  const [diet, setDiet] = useState(null);

  const isOneEyedOneHornedFlyingPurplePeopleEater =
    eyeCount === 1 &&
    hornCount === 1 &&
    color === 'Purple' &&
    abilities.includes('Fly') &&
    diet === 'People';

  const hasSomeValueSet =
    eyeCount !== null ||
    hornCount !== null ||
    color !== null ||
    abilities.length !== 0 ||
    diet !== null;

  return (
    <Container>
      <ControlPanel
        onEyeCountChange={setEyeCount}
        onHornCountChange={setHornCount}
        onColorChange={setColor}
        onAbilitiesChange={setAbilities}
        selectedAbilities={abilities}
        onDietChange={setDiet}
      />
      {hasSomeValueSet && (
        <MonsterSummaryCard
          eyeCount={eyeCount}
          hornCount={hornCount}
          color={color}
          abilities={abilities}
          diet={diet}
        />
      )}
      {isOneEyedOneHornedFlyingPurplePeopleEater && <VideoPlayerCard />}
    </Container>
  );
};

export default App;
