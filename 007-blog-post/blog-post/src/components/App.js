import React from 'react';
import { Card, Container, Grid } from '@material-ui/core';
import PostSideBar from './PostSideBar';
import Post from './Post';

const App = () => (
  <Container
    style={{
      padding: '40px',
    }}
  >
    <Card raised>
      <Grid container>
        <Grid item md={3}>
          <PostSideBar
            title="Test Driven Development is Awesome"
            author="Tyrel Clayton"
          />
        </Grid>
        <Grid item md={9}>
          <Post />
        </Grid>
      </Grid>
    </Card>
  </Container>
);

export default App;
