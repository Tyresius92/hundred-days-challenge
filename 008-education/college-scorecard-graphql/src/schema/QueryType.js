import { gql } from 'apollo-server';

export const typeDef = gql`
  type Query {
    _empty: String
  }
`;

export const resolvers = {};
