import React from 'react';
import { theme, ThemeProvider, Grid, CSSReset } from '@chakra-ui/core';
import { users } from './fakeData';
import ProfileCard from './ProfileCard';

const App = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <div>
      <Grid templateColumns="repeat(4, 1fr)" m={6} gap={6}>
        {users.map(user => (
          <ProfileCard
            href={user.github}
            name={`${user.firstName} ${user.lastName}`}
            avatar={user.avatar}
            birthday={user.dateOfBirth.toLocaleDateString()}
            contractRate={user.contractRate}
          />
        ))}
      </Grid>
    </div>
  </ThemeProvider>
);

export default App;
