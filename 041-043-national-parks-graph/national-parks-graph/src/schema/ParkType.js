import 'dotenv/config';
import { gql } from 'apollo-server';
import axios from 'axios';

export const ParkType = gql`
  extend type Query {
    parks(offset: Int): [Park!]!
    park(id: ID!): Park
  }

  type Park {
    id: ID!
    name: String!
    description: String!
    website: String!
    location: Location!
    parkType: String!
    directions: Direction!
    passes: [Pass!]!
    activities: [Activity!]!
    hours: Hours
    images: [Image!]!
    physicalAddress: Address
    mailingAddress: Address
  }
`;

export const ParkResolvers = {
  Query: {
    parks: (root, { offset = 1 }) =>
      axios
        .get(
          `https://developer.nps.gov/api/v1/parks?limit=10&start=${offset}&api_key=${process.env.NPS_API_KEY}`
        )
        .then(response => response.data.data),
    park: (root, { id }) =>
      axios
        .get(
          `https://developer.nps.gov/api/v1/parks?api_key=${process.env.NPS_API_KEY}&parkCode=${id}`
        )
        .then(response => response.data.data[0]),
  },

  Park: {
    id: park => park.parkCode,
    name: park => park.fullName,
    website: park => park.url,
    location: park => ({
      id: park.latLong,
      latitude: park.latitude ? park.latitude : null,
      longitude: park.longitude ? park.longitude : null,
    }),
    parkType: park => park.designation,
    directions: park => ({
      id: park.directionsInfo,
      directions: park.directionsInfo,
      webpage: park.directionsUrl,
    }),
    passes: park =>
      park.entrancePasses.map(entrancePass => ({
        id: entrancePass.title,
        cost: entrancePass.cost,
        description: entrancePass.description,
        title: entrancePass.title,
      })),
    hours: park => park.operatingHours[0],
    physicalAddress: park =>
      park.addresses.find(address => address.type === 'Physical'),
    mailingAddress: park =>
      park.addresses.find(address => address.type === 'Mailing'),
  },
};
