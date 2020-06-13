import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './StyledButton';
import { Typography } from '@material-ui/core';

const SingleOptionQuestion = ({ onButtonClick, questionText, options }) => (
  <div style={{ padding: '10px' }}>
    <Typography>{questionText}</Typography>
    {options.map(option => (
      <StyledButton key={option} onClick={() => onButtonClick(option)}>
        {option}
      </StyledButton>
    ))}
  </div>
);

SingleOptionQuestion.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  questionText: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default SingleOptionQuestion;
