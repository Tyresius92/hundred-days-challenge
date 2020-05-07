import React from 'react';
import { Container, Grid } from '@material-ui/core';
import PokemonCardContainer from './PokemonCardContainer';

const range = Array.from(Array(150).keys()).map(n => n + 1);

const App = () => (
  <div>
    <Container>
      <Grid container spacing={3}>
        {range.map(num => (
          <Grid key={num} item xs={6} sm={6} md={4} lg={3} xl={2}>
            <PokemonCardContainer id={num} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </div>
);

export default App;
