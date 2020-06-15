import React from 'react';
import { Link as ReactRouterLink, useParams } from 'react-router-dom';
import {
  Box,
  Text,
  Link as ChakraLink,
  Image,
  Tag,
  Grid,
  useTheme,
} from '@chakra-ui/core';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { parkFragment } from './parkFragments';

const parkQuery = gql`
  query parkQuery($id: ID!) {
    park(id: $id) {
      ...parkFragment
    }
  }

  ${parkFragment}
`;

const ParkPage = () => {
  const { id } = useParams();
  const theme = useTheme();

  const { data, loading, error } = useQuery(parkQuery, {
    variables: {
      id: id,
    },
  });

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  const park = data.park;

  return (
    <Box p={theme.space[4]}>
      <ChakraLink as={ReactRouterLink} to="/">
        Back to the home page
      </ChakraLink>
      <Box>
        <Text fontSize="5xl" mb={theme.space[2]}>
          {park.name}
        </Text>
        <Text as="i">{park.parkType}</Text>

        <Box>
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {park.images.map(image => (
              <Box key={image.src}>
                <Text>{image.title}</Text>
                <Image width="100%" alt={image.altText} src={image.src}></Image>
                <Text>Credit: {image.credit}</Text>
              </Box>
            ))}
          </Grid>
        </Box>

        <Text>{park.description}</Text>
        {park.activities.map(activity => (
          <Tag key={activity.id} m={theme.space[1]} variantColor="turquoise">
            {activity.name}
          </Tag>
        ))}
        <Box
          p={theme.space[4]}
          mt={theme.space[2]}
          mb={theme.space[2]}
          bg={theme.colors.gray[50]}
        >
          <Text fontSize="2xl" mt={0}>
            Directions
          </Text>
          <Text>{park.directions.directions}</Text>
          <ChakraLink href={park.directions.webpage}>
            Directions webpage
          </ChakraLink>
        </Box>
        <Box
          p={theme.space[4]}
          mt={theme.space[2]}
          mb={theme.space[2]}
          bg={theme.colors.gray[50]}
        >
          <Text fontSize="2xl" mt={0}>
            Hours
          </Text>
          <Text>Monday: {park.hours.monday}</Text>
          <Text>Tuesday: {park.hours.tuesday}</Text>
          <Text>Wednesday: {park.hours.wednesday}</Text>
          <Text>Thursday: {park.hours.thursday}</Text>
          <Text>Friday: {park.hours.friday}</Text>
          <Text>Saturday: {park.hours.saturday}</Text>
          <Text>Sunday: {park.hours.sunday}</Text>
        </Box>
        <ChakraLink href={park.website}>
          View this park on the NPS website
        </ChakraLink>
      </Box>
    </Box>
  );
};

export default ParkPage;
