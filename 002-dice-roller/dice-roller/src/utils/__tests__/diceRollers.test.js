import rollers, { getRandomNumberUpTo } from "../diceRollers";

describe("diceRollers", () => {
  it("runs successfully", () => {
    expect(true).toBe(true);
  });

  describe("getRandomNumberUpTo", () => {
    describe("boundary conditions", () => {
      it("uses Math.random() to get a random seed if only one arg passed", () => {
        const mathRandomSpy = jest.spyOn(Math, "random");
        getRandomNumberUpTo(20);
        expect(mathRandomSpy).toHaveBeenCalled();
      });

      it("throws an error if negative number is passed for randomSeed", () => {
        expect(() => getRandomNumberUpTo(20, -1)).toThrow();
      });

      it("throws an error if 1 is passed for randomSeed", () => {
        expect(() => getRandomNumberUpTo(20, 1)).toThrow();
      });

      it("throws an error if number > 1 is passed for randomSeed", () => {
        expect(() => getRandomNumberUpTo(20, 4)).toThrow();
      });

      it("throws an error if non-number is passed for randomSeed", () => {
        expect(() => getRandomNumberUpTo(20, "hello")).toThrow();
      });

      it("throws an error if non number passed as first argument", () => {
        expect(() => getRandomNumberUpTo("hello")).toThrow();
      });

      it("throws an error if negative number passed as first argument", () => {
        expect(() => getRandomNumberUpTo(-5)).toThrow();
      });

      it("throws an error if 0 passed as first argument", () => {
        expect(() => getRandomNumberUpTo(0)).toThrow();
      });
    });

    describe("output", () => {
      it.each`
        num    | randomSeed         | expected
        ${1}   | ${0}               | ${1}
        ${6}   | ${0}               | ${1}
        ${20}  | ${0}               | ${1}
        ${100} | ${0}               | ${1}
        ${1}   | ${0.123}           | ${1}
        ${6}   | ${0.123}           | ${1}
        ${20}  | ${0.123}           | ${3}
        ${100} | ${0.123}           | ${13}
        ${1}   | ${0.5}             | ${1}
        ${6}   | ${0.5}             | ${4}
        ${20}  | ${0.5}             | ${11}
        ${100} | ${0.5}             | ${51}
        ${1}   | ${0.9999999999999} | ${1}
        ${6}   | ${0.9999999999999} | ${6}
        ${20}  | ${0.9999999999999} | ${20}
        ${100} | ${0.9999999999999} | ${100}
      `(
        `returns $expected when num=$num and randomSeed=$randomSeed`,
        ({ num, randomSeed, expected }) => {
          expect(getRandomNumberUpTo(num, randomSeed)).toBe(expected);
        }
      );
    });
  });

  describe("WARNING: THESE TESTS ARE NON-DETERMINISTIC; specific dice", () => {
    describe("rollNsidedDie", () => {
      it("throws if passed no args", () => {
        expect(() => rollers.rollNsidedDie()).toThrow();
      });

      it("throws if passed negative or invalid arg", () => {
        expect(() => rollers.rollNsidedDie(-4)).toThrow();
        expect(() => rollers.rollNsidedDie("hello")).toThrow();
      });

      it.each`
        n
        ${5}
        ${156}
        ${1000000000}
      `("returns a number between 1 and n", ({ n }) => {
        for (let i = 0; i < 100; i++) {
          const result = rollers.rollNSidedDie(n);
          expect(result).toBeGreaterThanOrEqual(1);
          expect(result).toBeLessThanOrEqual(n);
        }
      });
    });

    describe("rollD4", () => {
      it("returns a number between 1 and 4", () => {
        for (let i = 0; i < 100; i++) {
          const result = rollers.rollD4();
          expect(result).toBeGreaterThanOrEqual(1);
          expect(result).toBeLessThanOrEqual(4);
        }
      });
    });

    describe("rollD6", () => {
      it("returns a number between 1 and 6", () => {
        for (let i = 0; i < 100; i++) {
          const result = rollers.rollD6();
          expect(result).toBeGreaterThanOrEqual(1);
          expect(result).toBeLessThanOrEqual(6);
        }
      });
    });

    describe("rollD8", () => {
      it("returns a number between 1 and 8", () => {
        for (let i = 0; i < 100; i++) {
          const result = rollers.rollD8();
          expect(result).toBeGreaterThanOrEqual(1);
          expect(result).toBeLessThanOrEqual(8);
        }
      });
    });

    describe("rollD10", () => {
      it("returns a number between 1 and 10", () => {
        for (let i = 0; i < 100; i++) {
          const result = rollers.rollD10();
          expect(result).toBeGreaterThanOrEqual(1);
          expect(result).toBeLessThanOrEqual(10);
        }
      });
    });

    describe("rollD12", () => {
      it("returns a number between 1 and 12", () => {
        for (let i = 0; i < 100; i++) {
          const result = rollers.rollD12();
          expect(result).toBeGreaterThanOrEqual(1);
          expect(result).toBeLessThanOrEqual(12);
        }
      });
    });

    describe("rollD20", () => {
      it("returns a number between 1 and 20", () => {
        for (let i = 0; i < 100; i++) {
          const result = rollers.rollD20();
          expect(result).toBeGreaterThanOrEqual(1);
          expect(result).toBeLessThanOrEqual(20);
        }
      });
    });
  });
});
