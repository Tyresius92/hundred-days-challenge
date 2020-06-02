import React from 'react';
import { Card } from '@material-ui/core';

const ProfileCard = ({ name }) => (
  <Card
    raised
    style={{
      margin: '40px 0',
      padding: '40px',
    }}
  >
    {name}
  </Card>
);

export default ProfileCard;
