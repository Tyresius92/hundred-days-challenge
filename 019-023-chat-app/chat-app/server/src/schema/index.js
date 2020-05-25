import { merge } from 'lodash';

// Root Types
import { RootQueryType, RootQueryResolvers } from './QueryType';
import { RootMutationType, RootMutationResolvers } from './MutationType';

// Custom types from 'graphql-scalars' package
import { CustomScalars, CustomScalarsResolvers } from './CustomScalars';

// User Types
import { UserType, UserResolvers } from './UserType';
import { NewUserInputType } from './NewUserInputType';
import { UserLoginPayloadType } from './UserLoginPayloadType';
import { SignInInputType } from './SignInInputType';

// Message Types
import { MessageType, MessageResolvers, MessageModel } from './MessageType';
import { NewMessageInputType } from './NewMessageInputType';
import { CreateMessagePayloadType } from './CreateMessagePayloadType';

// Conversation Types
import { ConversationType, ConversationResolvers } from './ConversationType';
import { NewConversationInputType } from './NewConversationInputType';
import { CreateConversationPayloadType } from './CreateConversationPayloadType';

export const typeDefs = [
  RootQueryType,
  RootMutationType,
  CustomScalars,

  // User Types
  UserType,
  NewUserInputType,
  SignInInputType,
  UserLoginPayloadType,

  // Message Types
  MessageType,
  NewMessageInputType,
  CreateMessagePayloadType,

  // Conversation Types
  ConversationType,
  NewConversationInputType,
  CreateConversationPayloadType,
];

export const resolvers = merge(
  RootQueryResolvers,
  RootMutationResolvers,
  CustomScalarsResolvers,
  UserResolvers,
  MessageResolvers,
  ConversationResolvers
);
