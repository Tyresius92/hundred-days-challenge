import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  message: {
    margin: '8px',
    padding: '4px',
  },
});

// {
//   id: '3',
//   text: "I've got a topic",
//   sendTime: '2020-05-25T14:22:39.389Z',
//   sender: { id: '3', username: 'tyresius2' },
// },

const Message = ({ text, sender, sendTime }) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.message}>
      <Typography variant="h6">{sender.username}</Typography>
      <Typography>{text}</Typography>
      <Typography align="right" variant="caption">
        {new Date(sendTime).toLocaleTimeString()}
      </Typography>
    </Paper>
  );
};

export default Message;
