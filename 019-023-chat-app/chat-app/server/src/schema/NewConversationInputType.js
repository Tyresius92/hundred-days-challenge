import { gql } from 'apollo-server';

export const NewConversationInputType = gql`
  input NewConversationInput {
    userIds: [ID!]!
    topic: String!
  }
`;
