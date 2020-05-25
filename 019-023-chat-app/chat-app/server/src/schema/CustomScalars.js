import { gql } from 'apollo-server';
import { DateTimeResolver, EmailAddressResolver } from 'graphql-scalars';

export const CustomScalars = gql`
  scalar DateTime
  scalar EmailAddress
`;

export const CustomScalarsResolvers = {
  DateTime: DateTimeResolver,
  EmailAddress: EmailAddressResolver,
};
