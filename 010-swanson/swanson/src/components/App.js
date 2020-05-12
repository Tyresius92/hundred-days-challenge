import React, { useState } from 'react';
import { AppBar, Button, Card, Container, Typography } from '@material-ui/core';
import axios from 'axios';
import swansonPhoto from './swanson.jpg';

const cardStyle = {
  textAlign: 'center',
  margin: '15px',
  padding: '15px',
};

const App = () => {
  const [quotes, setQuotes] = useState([]);

  const onGetQuoteClick = () => {
    axios
      .get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(response => {
        setQuotes([response.data[0], ...quotes]);
      });
  };

  return (
    <>
      <AppBar position="sticky" style={{ padding: '10px' }}>
        <Typography variant="h6">The Wisdom of Ron Swanson</Typography>
      </AppBar>
      <Container>
        <Card raised style={cardStyle}>
          <div>
            <img
              src={swansonPhoto}
              alt="Ron Swanson Headshot"
              style={{
                width: '40%',
              }}
            />
          </div>
          <Button variant="contained" color="primary" onClick={onGetQuoteClick}>
            Get Some Wisdom
          </Button>
        </Card>
        {quotes.map(quote => (
          <Card raised style={cardStyle}>
            <Typography>{quote}</Typography>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default App;
