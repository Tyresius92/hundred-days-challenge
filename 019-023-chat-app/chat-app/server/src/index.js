import 'dotenv/config';
import { ApolloServer, AuthenticationError } from 'apollo-server';
import { typeDefs, resolvers } from './schema';
import services from './services';
// import userService from './services/user';
// import messageService from './services/message';
// import conversationService from './services/conversation';
import jwt from 'jsonwebtoken';
import seedDatabase from './seedDatabase';

const getMe = async (req, secret) => {
  const token = req.headers['x-token'];

  if (token) {
    try {
      return await jwt.verify(token, secret);
    } catch (err) {
      throw new AuthenticationError('Your session expired. Sign in again');
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({
    secret: process.env.SECRET,
    me: await getMe(req, process.env.SECRET),
    services,
  }),
});

if (false) {
  seedDatabase();
}

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
