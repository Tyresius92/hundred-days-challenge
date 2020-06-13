import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader } from '@material-ui/core';

const StyledCard = ({ title, children }) => (
  <Card
    raised
    style={{ textAlign: 'center', paddingBottom: '50px', margin: '40px' }}
  >
    <CardHeader title={title} />
    {children}
  </Card>
);

StyledCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default StyledCard;
