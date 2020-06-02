import distanceUtils from '../distance';
import { DISTANCE_UNITS } from '../metricConstants';

const { INCHES, FEET, YARDS, MILES } = DISTANCE_UNITS;

describe('distanceUtils', () => {
  const {
    convert,
    inchesToFeet,
    feetToInches,
    inchesToYards,
    yardsToInches,
    feetToYards,
    yardsToFeet,
    inchesToMiles,
    milesToInches,
    feetToMiles,
    milesToFeet,
    yardsToMiles,
    milesToYards,
  } = distanceUtils;

  describe('convert', () => {
    it.each`
      num          | from      | to        | expected
      ${10}        | ${INCHES} | ${INCHES} | ${10}
      ${36}        | ${INCHES} | ${FEET}   | ${3}
      ${36}        | ${INCHES} | ${YARDS}  | ${1}
      ${5280 * 12} | ${INCHES} | ${MILES}  | ${1}
      ${3}         | ${FEET}   | ${INCHES} | ${36}
      ${3}         | ${FEET}   | ${FEET}   | ${3}
      ${3}         | ${FEET}   | ${YARDS}  | ${1}
      ${5280}      | ${FEET}   | ${MILES}  | ${1}
      ${3}         | ${YARDS}  | ${INCHES} | ${108}
      ${3}         | ${YARDS}  | ${FEET}   | ${9}
      ${3}         | ${YARDS}  | ${YARDS}  | ${3}
      ${5280}      | ${YARDS}  | ${MILES}  | ${3}
      ${1}         | ${MILES}  | ${INCHES} | ${5280 * 12}
      ${1}         | ${MILES}  | ${FEET}   | ${5280}
      ${1}         | ${MILES}  | ${YARDS}  | ${1760}
      ${1}         | ${MILES}  | ${MILES}  | ${1}
    `(
      'can convert $num $from to $expected $to',
      ({ num, from, to, expected }) => {
        expect(convert(num, from, to)).toBe(expected);
      }
    );
  });

  describe('inchesToFeet', () => {
    it('multiplies by 12', () => {
      expect(inchesToFeet(36)).toBe(3);
    });
  });

  describe('feetToInches', () => {
    it('divides by 12', () => {
      expect(feetToInches(3)).toBe(36);
    });
  });

  describe('inchesToYards', () => {
    it('divides inches by 36', () => {
      expect(inchesToYards(360)).toBe(10);
    });
  });

  describe('yardsToInches', () => {
    it('multiplies by 36', () => {
      expect(yardsToInches(10)).toBe(360);
    });
  });

  describe('inchesToMiles', () => {
    it('converts inches to miles', () => {
      expect(inchesToMiles(5280 * 12)).toBe(1);
    });
  });

  describe('milesToInches', () => {
    it('converts inches to miles', () => {
      expect(milesToInches(1)).toBe(5280 * 12);
    });
  });
});
