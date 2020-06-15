import { gql } from 'apollo-server';

export const DirectionType = gql`
  type Direction {
    id: ID!
    directions: String!
    webpage: String!
  }
`;

export const DirectionResolvers = {};
