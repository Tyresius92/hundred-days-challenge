import faker from 'faker';

export const users = [
  {
    id: 1,
    username: 'tyresius92',
    firstName: 'Tyrel',
    lastName: 'Clayton',
    avatar: faker.image.avatar(),
    dateOfBirth: new Date('January 25, 1992'),
    contractRate: 100,
    github: 'https://github.com/tyresius92',
  },
  {
    id: 2,
    username: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    avatar: faker.image.avatar(),
    dateOfBirth: faker.date.past(25),
    contractRate: 85,
  },
  {
    id: 3,
    username: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    avatar: faker.image.avatar(),
    dateOfBirth: faker.date.past(25),
    contractRate: 225,
  },
  {
    id: 4,
    username: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    avatar: faker.image.avatar(),
    dateOfBirth: faker.date.past(25),
    contractRate: 300,
  },
  {
    id: 5,
    username: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    avatar: faker.image.avatar(),
    dateOfBirth: faker.date.past(25),
    contractRate: 120,
  },
  {
    id: 6,
    username: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    avatar: faker.image.avatar(),
    dateOfBirth: faker.date.past(25),
    contractRate: 150,
  },
];
