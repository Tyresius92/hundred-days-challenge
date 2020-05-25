import { gql } from 'apollo-server';

export const MessageType = gql`
  extend type Query {
    messages: [Message!]!
    message(id: ID!): Message
  }

  extend type Mutation {
    createMessage(input: NewMessageInput!): CreateMessagePayload!
  }

  type Message {
    id: ID!
    text: String!
    sender: User!
    conversation: Conversation!
    sendTime: DateTime!
  }
`;

export const MessageResolvers = {
  Query: {
    message: (parent, { id }, { services: { messageService } }) =>
      messageService.fetchMessageById(id),
    messages: (parent, args, { me, services: { messageService } }) =>
      messageService.fetchMessages(),
  },

  Mutation: {
    createMessage: (parent, { input: { conversationId, text } }, { me }) =>
      messageService.createMessage(me.id, conversationId, text),
  },

  Message: {
    sendTime: (message, args, context) => message.send_time,
    sender: (message, args, { services: { messageService } }) =>
      messageService.fetchUserByMessageId(message.id),
    conversation: (message, args, { services: { messageService } }) =>
      messageService.fetchConversationByMessageId(message.id),
  },
};
