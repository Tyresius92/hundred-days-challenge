import { gql } from 'apollo-boost';

export const parkFragment = gql`
  fragment parkFragment on Park {
    id
    name
    description
    website
    location {
      id
      latitude
      longitude
    }
    parkType
    directions {
      directions
      webpage
    }
    passes {
      id
      cost
      description
      title
    }
    activities {
      id
      name
    }
    hours {
      id
      monday
      tuesday
      wednesday
      thursday
      friday
      saturday
      sunday
    }
    images {
      id
      src
      altText
      caption
      title
      credit
    }
    physicalAddress {
      line1
      line2
      line3
      city
      state
      zip
    }
    mailingAddress {
      line1
      line2
      line3
      city
      state
      zip
    }
  }
`;
