import React from 'react';
import { Card as MuiCard, CardHeader, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    margin: '20px',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
  },
}));

const Card = ({ title, children }) => {
  const classes = useStyles();

  return (
    <MuiCard className={classes.card}>
      <CardHeader className={classes.header} title={title} />
      {children}
    </MuiCard>
  );
};

export default Card;
