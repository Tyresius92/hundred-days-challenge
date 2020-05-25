import { gql } from 'apollo-server';

export const ConversationType = gql`
  extend type Query {
    conversations: [Conversation!]!
    conversation(id: ID!): Conversation
  }

  extend type Mutation {
    createConversation(input: NewConversationInput!): CreateConversationPayload!
  }

  type Conversation {
    id: ID!
    topic: String!
    participants: [User!]!
    messages: [Message!]!
  }
`;

export const ConversationResolvers = {
  Query: {
    conversations: (parent, args, { services: { conversationService } }) =>
      conversationService.getConversations(),
    conversation: (parent, { id }, { services: { conversationService } }) =>
      conversationService.getConversationById(id),
  },

  Mutation: {
    createConversation: (
      parent,
      { input: { topic, userIds } },
      { services: { conversationService } }
    ) => conversationService.createConversation(topic, userIds),
  },

  Conversation: {
    topic: (conversation, args, { services: { conversationService } }) =>
      conversation.topic,
    participants: (conversation, args, { services: { conversationService } }) =>
      conversationService.getUsersByConversationId(conversation.id),
    messages: (conversation, args, { services: { conversationService } }) =>
      conversationService.getMessagesByConversationId(conversation.id),
  },
};
