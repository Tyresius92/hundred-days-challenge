import { gql } from 'apollo-server';

export const PassType = gql`
  type Pass {
    id: ID!
    cost: Float!
    description: String!
    title: String!
  }
`;

export const PassResolvers = {};
