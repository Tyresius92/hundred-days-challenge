import { gql } from 'apollo-server';
import { AuthenticationError, UserInputError } from 'apollo-server';

export const UserType = gql`
  extend type Query {
    me: User
    user(emailOrUsername: String): User
    users: [User!]!
  }

  extend type Mutation {
    signUp(input: NewUserInput!): UserLoginPayload!
    signIn(input: SignInInput!): UserLoginPayload!
  }

  type User {
    id: ID!
    username: String!
    email: EmailAddress!
    conversations: [Conversation!]!
    conversation(id: ID!): Conversation!
  }
`;

export const UserResolvers = {
  Query: {
    me: (parent, args, { me }) => me,
    user: (parent, { emailOrUsername }, { services: { userService } }) =>
      userService.fetchUserByLogin(emailOrUsername),
    users: (parent, args, { services: { userService } }) =>
      userService.fetchUsers(),
  },

  Mutation: {
    signUp: async (
      parent,
      { input: { username, email, password } },
      { services: { userService }, secret }
    ) => {
      const user = await userService.createUser(username, email, password);
      const token = await userService.createToken(user, secret, '30d');

      return {
        user,
        token,
      };
    },
    signIn: async (
      parent,
      { input: { login, password } },
      { services: { userService }, secret }
    ) => {
      const user = await userService.fetchUserByLogin(login);

      if (!user) {
        throw new UserInputError('No user found with that login');
      }

      const isPasswordValid = await userService.validatePassword(
        user.password_hash,
        password
      );

      if (!isPasswordValid) {
        throw new AuthenticationError('Invalid password');
      }

      const token = await userService.createToken(user, secret, '30d');

      return {
        user,
        token,
      };
    },
  },

  User: {
    conversations: (user, args, { services: { userService } }) =>
      userService.getConversationsByUserId(user.id),
  },
};
