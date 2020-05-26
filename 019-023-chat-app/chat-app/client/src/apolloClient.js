import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  headers: {
    'x-token':
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ0eXJlc2l1czFAZ21haWwuY29tIiwidXNlcm5hbWUiOiJ0eXJlc2l1czEiLCJpYXQiOjE1OTA0NDYyNTgsImV4cCI6MTU5MzAzODI1OH0.C2IqD34gFDfVwcLRCiKVIi4Bbyt8OnQzBnFuDUhSEA8',
  },
});

export default client;
