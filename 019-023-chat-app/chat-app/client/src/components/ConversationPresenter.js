import React from 'react';
import { Grid } from '@material-ui/core';
import Message from './Message';

const ConversationPresenter = ({ messages, currentUser }) => {
  console.log('asdf mess', messages);

  return (
    <>
      {messages.map(({ id, text, sender, sendTime }) => (
        <Grid
          key={id}
          container
          justify={sender.id === currentUser.id ? 'flex-end' : 'flex-start'}
        >
          <Grid item xs={8}>
            <Message text={text} sender={sender} sendTime={sendTime} />
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default ConversationPresenter;
