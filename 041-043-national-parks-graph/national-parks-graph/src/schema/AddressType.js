import { gql } from 'apollo-server';

export const AddressType = gql`
  type Address {
    line1: String!
    line2: String
    line3: String
    city: String!
    state: String!
    zip: String!
  }
`;

export const AddressResolvers = {
  Address: {
    line1: address => address.line1,
    line2: address => (address.line2 ? address.line2 : null),
    line3: address => (address.line3 ? address.line3 : null),
    city: address => address.city,
    state: address => address.stateCode,
    zip: address => address.postalCode,
  },
};
