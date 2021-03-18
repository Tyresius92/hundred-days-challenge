const isInRange = (start, end, testVal) => testVal >= start && testVal <= end;

const isValidInput = ({ red, green, blue }, steps) =>
  typeof red === 'number' &&
  typeof green === 'number' &&
  typeof blue === 'number' &&
  isInRange(0, 255, red) &&
  isInRange(0, 255, green) &&
  isInRange(0, 255, blue) &&
  steps >= 1;

const generatePallet = ({ red, green, blue }, steps = 10) => {
  if (!isValidInput({ red, green, blue }, steps)) {
    return [];
  }

  const maxColorVal = Math.max(red, green, blue, 1);

  const step = 255 / (maxColorVal * steps);

  const seedArray = [...Array(steps).keys()];

  return seedArray.map(stepNumber => {
    const r = Math.floor(red * step * stepNumber);
    const g = Math.floor(green * step * stepNumber);
    const b = Math.floor(blue * step * stepNumber);

    return `rgb(${r},${g},${b})`;
  });
};

export default generatePallet;
