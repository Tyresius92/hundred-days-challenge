import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, Checkbox, Typography } from '@material-ui/core';

const Question = ({ onChange, questionText, options, currentlySelected }) => {
  const handleChange = changedOption => {
    if (currentlySelected.includes(changedOption)) {
      onChange(currentlySelected.filter(option => option !== changedOption));
    } else {
      onChange([...currentlySelected, changedOption]);
    }
  };

  return (
    <div style={{ padding: '10px' }}>
      <Typography>{questionText}</Typography>
      {options.map(option => (
        <FormControlLabel
          key={option}
          control={
            <Checkbox
              checked={currentlySelected.includes(option)}
              onChange={() => handleChange(option)}
              name={option}
            />
          }
          label={option}
        />
      ))}
    </div>
  );
};

Question.propTypes = {
  onChange: PropTypes.func.isRequired,
  questionText: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  currentlySelected: PropTypes.array.isRequired,
};

export default Question;
