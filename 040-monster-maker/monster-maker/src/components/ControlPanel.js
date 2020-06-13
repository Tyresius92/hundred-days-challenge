import React from 'react';
import PropTypes from 'prop-types';
import SingleOptionQuestion from './SingleOptionQuestion';
import MultiSelectQuestion from './MultiSelectQuestion';
import StyledCard from './StyledCard';

const numberOptions = [0, 1, 2, 3, 4, 5, 'Many'];
const colorOptions = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Indigo',
  'Purple',
];
const abilities = [
  'Fly',
  'Invisibility',
  'Poison',
  'Super Strength',
  'Telepathy',
  'Telekinetic',
];
const dietOptions = [
  'Leaves',
  'Other monsters',
  'People',
  'Children',
  'Rocks',
  'Anything',
];

const ControlPanel = ({
  onEyeCountChange,
  onHornCountChange,
  onColorChange,
  onAbilitiesChange,
  selectedAbilities,
  onDietChange,
}) => (
  <StyledCard title="Control Panel">
    <SingleOptionQuestion
      questionText="How many eyes does your monster have?"
      onButtonClick={onEyeCountChange}
      options={numberOptions}
    />
    <SingleOptionQuestion
      questionText="How many horns does your monster have?"
      onButtonClick={onHornCountChange}
      options={numberOptions}
    />
    <MultiSelectQuestion
      questionText="What abilities does your monster have?"
      onChange={onAbilitiesChange}
      options={abilities}
      currentlySelected={selectedAbilities}
    />
    <SingleOptionQuestion
      questionText="What color is your monster?"
      onButtonClick={onColorChange}
      options={colorOptions}
    />
    <SingleOptionQuestion
      questionText="What does your monster eat?"
      onButtonClick={onDietChange}
      options={dietOptions}
    />
  </StyledCard>
);

ControlPanel.propTypes = {
  onEyeCountChange: PropTypes.func.isRequired,
  onHornCountChange: PropTypes.func.isRequired,
  onColorChange: PropTypes.func.isRequired,
  onAbilitiesChange: PropTypes.func.isRequired,
  selectedAbilities: PropTypes.array.isRequired,
  onDietChange: PropTypes.func.isRequired,
};

export default ControlPanel;
