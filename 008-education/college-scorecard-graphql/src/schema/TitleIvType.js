import { gql } from 'apollo-server';

export const typeDef = gql`
  enum TitleIvEligibility {
    PARTICIPATES_IN_TITLE_IV
    BRANCH_CAMPUS_OF_MAIN_CAMPUS_THAT_PARTICIPATES_IN_TITLE_IV
    DEFERMENT_ONLY_LIMITED_PARTICIPATION
    NOT_CURRENTLY_PARTICIPATING_HAS_OPE_ID_NUMBER
    NOT_CURRENTLY_PARTICIPATING_DOES_NOT_HAVE_OPE_ID_NUMBER
    STOPPED_PARTICIPATING_DURING_COLLECTION_YEAR
    NEW_PARTICIPANT_BECAME_ELIGIBLE_DURING_COLLECTION_YEAR
    NOT_ELIGIBLE
  }

  type TitleIv {
    schoolId: Int
    approvalDate: String
    eligibility: TitleIvEligibility
  }
`;

export const resolvers = {
  TitleIv: {
    schoolId: school => school.id,
    approvalDate: school => school['school.title_iv.approval_date'],
    eligibility: school => {
      switch (school['school.title_iv.eligibility_type']) {
        case 1:
          return 'PARTICIPATES_IN_TITLE_IV';
        case 2:
          return 'BRANCH_CAMPUS_OF_MAIN_CAMPUS_THAT_PARTICIPATES_IN_TITLE_IV';
        case 3:
          return 'DEFERMENT_ONLY_LIMITED_PARTICIPATION';
        case 5:
          return 'NOT_CURRENTLY_PARTICIPATING_HAS_OPE_ID_NUMBER';
        case 6:
          return 'NOT_CURRENTLY_PARTICIPATING_DOES_NOT_HAVE_OPE_ID_NUMBER';
        case 7:
          return 'STOPPED_PARTICIPATING_DURING_COLLECTION_YEAR';
        case 8:
          return 'NEW_PARTICIPANT_BECAME_ELIGIBLE_DURING_COLLECTION_YEAR';
        case 19:
          return 'NOT_ELIGIBLE';
        default:
          return null;
      }
    },
  },
};
