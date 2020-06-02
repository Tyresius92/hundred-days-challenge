import { DISTANCE_UNITS, DISTANCE_CONVERSIONS } from './metricConstants';

const { INCHES, FEET, YARDS, MILES } = DISTANCE_UNITS;

const convert = (num, from, to) => inchesTo(toInches(num, from), to);

const toInches = (num, from) => {
  // in a real application, I would throw an error
  // if from was not a valid input

  if (from === FEET) {
    return feetToInches(num);
  }
  if (from === YARDS) {
    return yardsToInches(num);
  }
  if (from === MILES) {
    return milesToInches(num);
  }

  // from must be INCHES
  return num;
};

const inchesTo = (inches, to) => {
  // in a real application, I would throw an error
  // if from was not a valid input

  if (to === FEET) {
    return inchesToFeet(inches);
  }
  if (to === YARDS) {
    return inchesToYards(inches);
  }
  if (to === MILES) {
    return inchesToMiles(inches);
  }

  // to must be INCHES
  return inches;
};

const inchesToFeet = inches => inches / DISTANCE_CONVERSIONS.INCHES_PER_FOOT;

const feetToInches = feet => feet * DISTANCE_CONVERSIONS.INCHES_PER_FOOT;

const inchesToYards = inches => inches / DISTANCE_CONVERSIONS.INCHES_PER_YARD;

const yardsToInches = yards => yards * DISTANCE_CONVERSIONS.INCHES_PER_YARD;

const inchesToMiles = inches => inches / DISTANCE_CONVERSIONS.INCHES_PER_MILE;

const milesToInches = miles => miles * DISTANCE_CONVERSIONS.INCHES_PER_MILE;

export default {
  convert,
  inchesToFeet,
  feetToInches,
  inchesToYards,
  yardsToInches,
  inchesToMiles,
  milesToInches,
};
