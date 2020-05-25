import { gql } from 'apollo-server';

export const NewMessageInputType = gql`
  input NewMessageInput {
    text: String!
    senderId: ID!
    conversationId: String!
  }
`;
