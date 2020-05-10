import { gql } from 'apollo-server';

export const typeDef = gql`
  type Admissions {
    schoolId: Int
    admissionRate: Float
    satScores: SatScores
    actScores: ActScores
  }
`;

export const resolvers = {
  Admissions: {
    schoolId: school => school.id,
    admissionRate: school => school['latest.admissions.admission_rate.overall'],
    satScores: school => ({
      schoolId: school.id,
      ...school,
    }),
    actScores: school => ({
      schoolId: school.id,
      ...school,
    }),
  },
};
