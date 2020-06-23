import React from 'react';
import { Card as MuiCard, makeStyles, CardHeader } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    width: '100%',
    paddingBottom: 10,
    marginTop: '20px',
    //marginBottom: '100px',
    textAlign: 'center',
  },
});

const Card = ({ title, children }) => {
  const classes = useStyles();

  return (
    <MuiCard raised className={classes.card}>
      <CardHeader title={title} />
      {children}
    </MuiCard>
  );
};

export default Card;
