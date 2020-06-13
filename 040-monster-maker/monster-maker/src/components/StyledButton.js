import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const StyledButton = ({ children, onClick }) => (
  <Button
    variant="contained"
    color="primary"
    onClick={onClick}
    style={{ margin: '0 4px' }}
  >
    {children}
  </Button>
);

StyledButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default StyledButton;
