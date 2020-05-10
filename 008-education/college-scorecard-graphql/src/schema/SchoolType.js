import 'dotenv/config';
import { gql } from 'apollo-server';
import axios from 'axios';

export const typeDef = gql`
  extend type Query {
    schools(numResults: Int, pageNum: Int): [School]
    schoolById(schoolId: Int!, numResults: Int, pageNum: Int): School
  }

  type School {
    id: Int
    name: String
    alias: String
    city: String
    state: String
    zip: String
    accreditor: String
    accreditorCode: String
    schoolUrl: String
    priceCalculatorUrl: String
    isMainCampus: Boolean
    numBranchCampuses: Int
    isAllGirls: Boolean
    isAllBoys: Boolean
    fullTimeFacultyRate: Float
    averageFacultySalaryMonthly: Int
    isOperating: Boolean
    isUnderInvestigation: Boolean
    isOnlineOnly: Boolean
    titleIv: TitleIv
    admissions: Admissions
  }
`;

const API_KEY = process.env.GOV_DATA_API_KEY;
const BASE_URL = `https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=${API_KEY}`;

export const resolvers = {
  Query: {
    schools: (parent, { numResults, pageNum }) => {
      const url = `${BASE_URL}&per_page=${numResults || '100'}&page=${
        pageNum || 0
      }&_fields=id,school,latest.admissions`;

      return axios.get(url).then(response => response.data.results);
    },
    schoolById: (parent, { schoolId }) => {
      const url = `${BASE_URL}&id=${schoolId}&_fields=id,school,latest.admissions`;

      return axios.get(url).then(response => response.data.results[0]);
    },
  },

  School: {
    name: school => school['school.name'],
    alias: school => school['school.alias'],
    city: school => school['school.city'],
    state: school => school['school.state'],
    zip: school => school['school.zip'],
    accreditor: school => school['school.accreditor'],
    accreditorCode: school => school['school.accreditor_code'],
    schoolUrl: school => school['school.school_url'],
    priceCalculatorUrl: school => school['school.price_calculator_url'],
    isMainCampus: school => school['school.main_campus'],
    numBranchCampuses: school => school['school.branches'],
    isAllGirls: school => school['school.women_only'],
    isAllBoys: school => school['school.men_only'],
    fullTimeFacultyRate: school => school['school.ft_faculty_rate'],
    averageFacultySalaryMonthly: school => school['school.faculty_salary'],
    isOperating: school => school['school.operating'],
    isUnderInvestigation: school => school['school.under_investigation'],
    isOnlineOnly: school => school['school.online_only'],
    titleIv: school => school,
    admissions: school => school,
  },
};
