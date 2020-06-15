import { gql } from 'apollo-server';

export const ActivityType = gql`
  type Activity {
    id: ID!
    name: String!
  }
`;

export const ActivityResolvers = {};
