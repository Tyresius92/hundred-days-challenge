import React from 'react';
import SchoolList from './SchoolList';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const schoolsListQuery = gql`
  query schoolsListQuery($numResults: Int, $pageNum: Int) {
    schools(numResults: $numResults, pageNum: $pageNum) {
      id
      name
      alias
      city
      state
      zip
    }
  }
`;

const SchoolListContainer = () => {
  const { loading, error, data } = useQuery(schoolsListQuery, {
    variables: {
      numResults: 20,
      pageNum: 1,
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  console.log(data);

  const { schools } = data;

  const schoolData = schools.map(school => ({
    id: school.id,
    name: school.name,
    cityState: `${school.city}, ${school.state}`,
    website: school.schoolUrl,
  }));

  return <SchoolList schools={schoolData} />;
};

export default SchoolListContainer;
