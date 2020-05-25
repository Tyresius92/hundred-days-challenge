import { gql } from 'apollo-server';

export const CreateConversationPayloadType = gql`
  type CreateConversationPayload {
    conversation: Conversation!
  }
`;
