import React from 'react';
import Navbar from './Navbar';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import ParkCard from './ParkCard';
import ParkPage from './ParkPage';
import { parkFragment } from './parkFragments';
import { Box, Grid, Button, Text, useTheme } from '@chakra-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const PARKS_QUERY = gql`
  query test($offset: Int!) {
    parks(offset: $offset) {
      ...parkFragment
    }
  }

  ${parkFragment}
`;

const App = () => {
  const theme = useTheme();
  const { data, loading, error, fetchMore } = useQuery(PARKS_QUERY, {
    variables: {
      offset: 1,
    },
    notifyOnNetworkStatusChange: true,
  });

  const getNextData = () => {
    fetchMore({
      variables: {
        offset: data.parks.length + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        return {
          parks: [...prev.parks, ...fetchMoreResult.parks],
        };
      },
    });
  };

  if (error) {
    return <p>Error...</p>;
  }

  return (
    <>
      <Navbar />
      <Router>
        <Route exact path="/">
          <Box p={theme.space[4]}>
            {!data && loading ? (
              <Text>Loading data</Text>
            ) : (
              <>
                <Box>
                  <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                    {data.parks.map(park => (
                      <ParkCard key={park.id} park={park} />
                    ))}
                  </Grid>
                </Box>
                {loading ? (
                  <Text>Loading more data...</Text>
                ) : (
                  <Box>
                    <Button onClick={() => getNextData()}>
                      Get more parks!
                    </Button>
                  </Box>
                )}
              </>
            )}
          </Box>
        </Route>
        <Route path="/:id">
          <ParkPage />
        </Route>
      </Router>
    </>
  );
};
export default App;
