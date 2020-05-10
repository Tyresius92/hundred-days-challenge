import { gql } from 'apollo-server';

export const typeDef = gql`
  type ActScores {
    schoolId: Int
    cumulativeMidpoint: Int
    cumulativeTwentyFifthPercentile: Int
    cumulativeSeventyFifthPercentile: Int
    mathMidpoint: Int
    mathTwentyFifthPercentile: Int
    mathSeventyFifthPercentile: Int
    englishMidpoint: Int
    englishTwentyFifthPercentile: Int
    englishSeventyFifthPercentile: Int
    writingMidpoint: Int
    writingTwentyFifthPercentile: Int
    writingSeventyFifthPercentile: Int
  }
`;

export const resolvers = {
  ActScores: {
    cumulativeMidpoint: school =>
      school['latest.admissions.act_scores.midpoint.cumulative'],
    cumulativeTwentyFifthPercentile: school =>
      school['latest.admissions.act_scores.25th_percentile.cumulative'],
    cumulativeSeventyFifthPercentile: school =>
      school['latest.admissions.act_scores.75th_percentile.cumulative'],
    mathMidpoint: school =>
      school['latest.admissions.act_scores.midpoint.math'],
    mathTwentyFifthPercentile: school =>
      school['latest.admissions.act_scores.25th_percentile.math'],
    mathSeventyFifthPercentile: school =>
      school['latest.admissions.act_scores.75th_percentile.math'],
    englishMidpoint: school =>
      school['latest.admissions.act_scores.midpoint.english'],
    englishTwentyFifthPercentile: school =>
      school['latest.admissions.act_scores.25th_percentile.english'],
    englishSeventyFifthPercentile: school =>
      school['latest.admissions.act_scores.75th_percentile.english'],
    writingMidpoint: school =>
      school['latest.admissions.act_scores.midpoint.writing'],
    writingTwentyFifthPercentile: school =>
      school['latest.admissions.act_scores.25th_percentile.writing'],
    writingSeventyFifthPercentile: school =>
      school['latest.admissions.act_scores.75th_percentile.writing'],
  },
};
