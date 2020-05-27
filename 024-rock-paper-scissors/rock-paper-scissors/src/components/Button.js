import React from 'react';
import { Button as MuiButton } from '@material-ui/core';

const Button = ({ children, disabled, onClick }) => (
  <MuiButton
    onClick={onClick}
    disabled={disabled}
    variant="contained"
    color="primary"
    style={{ margin: '0 5px' }}
  >
    {children}
  </MuiButton>
);

export default Button;
