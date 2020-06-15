import { gql } from 'apollo-server';

export const HoursType = gql`
  type Hours {
    id: ID!
    monday: String!
    tuesday: String!
    wednesday: String!
    thursday: String!
    friday: String!
    saturday: String!
    sunday: String!
    description: String!
  }
`;

export const HoursResolvers = {
  Hours: {
    id: hours => hours.name,
    monday: hours => hours.standardHours.monday,
    tuesday: hours => hours.standardHours.tuesday,
    wednesday: hours => hours.standardHours.wednesday,
    thursday: hours => hours.standardHours.thursday,
    friday: hours => hours.standardHours.friday,
    saturday: hours => hours.standardHours.saturday,
    sunday: hours => hours.standardHours.sunday,
    description: hours => hours.description,
  },
};
