import {
  typeDef as RootQueryType,
  resolvers as RootQueryResolvers,
} from './QueryType.js';
import {
  typeDef as SchoolType,
  resolvers as SchoolResolvers,
} from './SchoolType';
import {
  typeDef as TitleIvType,
  resolvers as TitleIvResolvers,
} from './TitleIvType';
import {
  typeDef as AdmissionsType,
  resolvers as AdmissionsResolvers,
} from './AdmissionsType';
import {
  typeDef as SatScoresType,
  resolvers as SatScoresResolvers,
} from './SatScoresType';
import {
  typeDef as ActScoresType,
  resolvers as ActScoresResolvers,
} from './ActScoresType';

export const typeDefs = [
  RootQueryType,
  SchoolType,
  TitleIvType,
  AdmissionsType,
  SatScoresType,
  ActScoresType,
];

export const resolvers = {
  ...RootQueryResolvers,
  ...SchoolResolvers,
  ...TitleIvResolvers,
  ...AdmissionsResolvers,
  ...SatScoresResolvers,
  ...ActScoresResolvers,
};
