import { gql } from 'apollo-server';

export const SignInInputType = gql`
  input SignInInput {
    login: String!
    password: String!
  }
`;
