import React from 'react';
import { Container, Card, CardHeader, Typography } from '@material-ui/core';
import Spinner from './Spinner';

const cardStyle = {
  margin: '20px',
  textAlign: 'center',
  padding: '10px',
};

const App = () => (
  <Container>
    <Card style={cardStyle} raised>
      <CardHeader title="Basic Example"></CardHeader>
      <Spinner />
      <hr />
      <Typography>{'<Spinner />'}</Typography>
    </Card>
    <Card style={cardStyle} raised>
      <CardHeader title="With Text Example"></CardHeader>
      <Spinner loadingText={'Loading...'} />
      <hr />
      <Typography>{"<Spinner loadingText={'Loading...'} />"}</Typography>
    </Card>
    <Card style={cardStyle} raised>
      <CardHeader title="With Custom Color Example"></CardHeader>
      <Spinner color="blue" />
      <hr />
      <Typography>{'<Spinner color="blue" />'}</Typography>
    </Card>
  </Container>
);

export default App;
