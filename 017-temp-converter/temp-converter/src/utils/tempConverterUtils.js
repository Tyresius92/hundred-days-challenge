const toTwoDecimalPlaces = num =>
  Math.round((num + Number.EPSILON) * 100) / 100;

const convertCelsiusToFahrenheit = degreesCelsius =>
  toTwoDecimalPlaces((degreesCelsius * 9) / 5 + 32);

const convertFahrenheitToCelsius = degreesFahrenheit =>
  toTwoDecimalPlaces(((degreesFahrenheit - 32) * 5) / 9);

const convertCelsiusToKelvin = degreesCelsius =>
  toTwoDecimalPlaces(degreesCelsius + 273.15);

const convertKelvinToCelsius = degreesKelvin =>
  toTwoDecimalPlaces(degreesKelvin - 273.15);

const convertFahrenheitToKelvin = degreesFahrenheit =>
  convertCelsiusToKelvin(convertFahrenheitToCelsius(degreesFahrenheit));

const convertKelvinToFahrenheit = degreesKelvin =>
  convertCelsiusToFahrenheit(convertKelvinToCelsius(degreesKelvin));

export default {
  convertCelsiusToFahrenheit,
  convertFahrenheitToCelsius,
  convertCelsiusToKelvin,
  convertKelvinToCelsius,
  convertFahrenheitToKelvin,
  convertKelvinToFahrenheit,
};
