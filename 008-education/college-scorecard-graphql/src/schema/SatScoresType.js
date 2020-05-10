import { gql } from 'apollo-server';

export const typeDef = gql`
  type SatScores {
    schoolId: Int
    overallAverage: Int
    mathMidpoint: Int
    mathTwentyFifthPercentile: Int
    mathSeventyFifthPercentile: Int
    writingMidpoint: Int
    writingTwentyFifthPercentile: Int
    writingSeventyFifthPercentile: Int
    criticalReadingMidpoint: Int
    criticalReadingTwentyFifthPercentile: Int
    criticalReadingSeventyFifthPercentile: Int
  }
`;

export const resolvers = {
  SatScores: {
    overallAverage: school =>
      school['latest.admissions.sat_scores.average.overall'],
    mathMidpoint: school =>
      school['latest.admissions.sat_scores.midpoint.math'],
    mathTwentyFifthPercentile: school =>
      school['latest.admissions.sat_scores.25th_percentile.math'],
    mathSeventyFifthPercentile: school =>
      school['latest.admissions.sat_scores.75th_percentile.math'],
    writingMidpoint: school =>
      school['latest.admissions.sat_scores.midpoint.writing'],
    writingTwentyFifthPercentile: school =>
      school['latest.admissions.sat_scores.25th_percentile.writing'],
    writingSeventyFifthPercentile: school =>
      school['latest.admissions.sat_scores.75th_percentile.writing'],
    criticalReadingMidpoint: school =>
      school['latest.admissions.sat_scores.midpoint.critical_reading'],
    criticalReadingTwentyFifthPercentile: school =>
      school['latest.admissions.sat_scores.25th_percentile.critical_reading'],
    criticalReadingSeventyFifthPercentile: school =>
      school['latest.admissions.sat_scores.75th_percentile.critical_reading'],
  },
};
