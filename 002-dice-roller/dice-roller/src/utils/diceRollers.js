export const getRandomNumberUpTo = (num, randomSeed = Math.random()) => {
  if (typeof randomSeed !== "number" || randomSeed < 0 || randomSeed >= 1) {
    throw new Error(
      "Invalid argument supplied to getRandomNumberUpTo\n" +
        "\tExpected randomSeed to be a Number in range [0, 1)" +
        ` but recieved ${randomSeed}`
    );
  }

  if (typeof num !== "number" || num <= 0) {
    throw new Error(
      "Invalid argument supplied to getRandomNumberUpTo\n" +
        `\tExpected num to be a positive Number but received ${num}`
    );
  }

  return Math.floor(num * randomSeed) + 1;
};

export const rollNSidedDie = (n) => getRandomNumberUpTo(n);

export const rollD4 = () => rollNSidedDie(4);
export const rollD6 = () => rollNSidedDie(6);
export const rollD8 = () => rollNSidedDie(8);
export const rollD10 = () => rollNSidedDie(10);
export const rollD12 = () => rollNSidedDie(12);
export const rollD20 = () => rollNSidedDie(20);

export default {
  rollNSidedDie,
  rollD4,
  rollD6,
  rollD8,
  rollD10,
  rollD12,
  rollD20,
};
