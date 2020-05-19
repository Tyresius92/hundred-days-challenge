import tempConverterUtils from '../tempConverterUtils';

describe('tempConverterUtils', () => {
  const {
    convertCelsiusToFahrenheit,
    convertFahrenheitToCelsius,
    convertCelsiusToKelvin,
    convertKelvinToCelsius,
    convertFahrenheitToKelvin,
    convertKelvinToFahrenheit,
  } = tempConverterUtils;

  describe('convertCelsiusToFahrenheit', () => {
    it.each`
      degreesCelsius | expectedFahrenheit
      ${-40}         | ${-40}
      ${0}           | ${32}
      ${9}           | ${48.2}
      ${100}         | ${212}
    `(
      'can convert $degreesCelsius to $expectedFahrenheit',
      ({ degreesCelsius, expectedFahrenheit }) => {
        expect(convertCelsiusToFahrenheit(degreesCelsius)).toBe(
          expectedFahrenheit
        );
      }
    );
  });

  describe('convertFahrenheitToCelsius', () => {
    it.each`
      degreesFahrenheit | expectedCelsius
      ${-40}            | ${-40}
      ${32}             | ${0}
      ${40}             | ${4.44}
      ${212}            | ${100}
    `(
      'can convert $degreesFahrenheit to $expectedCelsius',
      ({ degreesFahrenheit, expectedCelsius }) => {
        expect(convertFahrenheitToCelsius(degreesFahrenheit)).toBe(
          expectedCelsius
        );
      }
    );
  });

  describe('convertCelsiusToKelvin', () => {
    it.each`
      degreesCelsius | expectedKelvin
      ${-273.15}     | ${0}
      ${0}           | ${273.15}
      ${100}         | ${373.15}
    `(
      'can convert $degreesCelsius to $expectedKelvin',
      ({ degreesCelsius, expectedKelvin }) => {
        expect(convertCelsiusToKelvin(degreesCelsius)).toBe(expectedKelvin);
      }
    );
  });

  describe('convertKelvinToCelsius', () => {
    it.each`
      degreesKelvin | expectedCelsius
      ${0}          | ${-273.15}
      ${273.15}     | ${0}
      ${373.15}     | ${100}
    `(
      'can convert $degreesKelvin to $expectedCelsius',
      ({ degreesKelvin, expectedCelsius }) => {
        expect(convertKelvinToCelsius(degreesKelvin)).toBe(expectedCelsius);
      }
    );
  });

  describe('convertFahrenheitToKelvin', () => {
    it.each`
      degreesFahrenheit | expectedKelvin
      ${32}             | ${273.15}
      ${212}            | ${373.15}
      ${-459.67}        | ${0}
    `(
      'can convert $degreesFahrenheit to $expectedKelvin',
      ({ degreesFahrenheit, expectedKelvin }) => {
        expect(convertFahrenheitToKelvin(degreesFahrenheit)).toBe(
          expectedKelvin
        );
      }
    );
  });

  describe('convertKelvinToFahrenheit', () => {
    it.each`
      degreesKelvin | expectedFahrenheit
      ${273.15}     | ${32}
      ${373.15}     | ${212}
      ${0}          | ${-459.67}
    `(
      'can convert $degreesKelvin to $expectedFahrenheit',
      ({ degreesKelvin, expectedFahrenheit }) => {
        expect(convertKelvinToFahrenheit(degreesKelvin)).toBe(
          expectedFahrenheit
        );
      }
    );
  });
});
