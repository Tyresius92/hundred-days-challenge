import { gql } from 'apollo-server';

export const LocationType = gql`
  type Location {
    id: ID!
    latitude: Float
    longitude: Float
  }
`;

export const LocationResolvers = {};
