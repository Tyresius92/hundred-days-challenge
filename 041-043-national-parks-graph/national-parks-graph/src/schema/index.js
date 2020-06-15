import { RootQueryType, RootQueryResolvers } from './QueryType.js';
import { ParkType, ParkResolvers } from './ParkType';
import { LocationType, LocationResolvers } from './LocationType';
import { PassType, PassResolvers } from './PassType';
import { DirectionType, DirectionResolvers } from './DirectionType';
import { ActivityType, ActivityResolvers } from './ActivityType';
import { HoursType, HoursResolvers } from './HoursType';
import { ImageType, ImageResolvers } from './ImageType';
import { AddressType, AddressResolvers } from './AddressType';

export const typeDefs = [
  RootQueryType,
  ParkType,
  LocationType,
  ActivityType,
  PassType,
  DirectionType,
  HoursType,
  ImageType,
  AddressType,
];

export const resolvers = {
  ...RootQueryResolvers,
  ...ParkResolvers,
  ...LocationResolvers,
  ...ActivityResolvers,
  ...PassResolvers,
  ...DirectionResolvers,
  ...HoursResolvers,
  ...ImageResolvers,
  ...AddressResolvers,
};
