import { gql } from 'apollo-server';

export const ImageType = gql`
  type Image {
    id: ID!
    src: String!
    altText: String!
    caption: String!
    title: String!
    credit: String!
  }
`;

export const ImageResolvers = {
  Image: {
    id: image => image.altText,
    src: image => image.url,
  },
};
