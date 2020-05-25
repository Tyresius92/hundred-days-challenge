import { gql } from 'apollo-server';

export const CreateMessagePayloadType = gql`
  type CreateMessagePayload {
    message: Message!
  }
`;
