import generateBoard, { MINE } from '../generateBoard';

describe('generateBoard', () => {
  describe('input validation', () => {
    it('throws an error if not given 3 integers', () => {
      expect(() => generateBoard('hello')).toThrow();
      expect(() => generateBoard(1, 'hello')).toThrow();
      expect(() => generateBoard(1, 2, 'hello')).toThrow();
    });

    it('throws an error if not given 3 positive integers', () => {
      expect(() => generateBoard(-1, 2, 3)).toThrow();
      expect(() => generateBoard(1, -2, 3)).toThrow();
      expect(() => generateBoard(1, 2, -3)).toThrow();
      expect(() => generateBoard(0, 2, 3)).toThrow();
      expect(() => generateBoard(1, 0, 3)).toThrow();
      expect(() => generateBoard(1, 2, 0)).toThrow();
    });

    it('throws an error if numMines is greater than width * height', () => {
      expect(() => generateBoard(1, 1, 10)).toThrow();
    });
  });

  describe('output', () => {
    it('returns a 2D array', () => {
      const generated = generateBoard(1, 1, 1);

      expect(Array.isArray(generated)).toBe(true);
      expect(generated.length).toBeGreaterThanOrEqual(1);
      generated.forEach(elem => {
        expect(Array.isArray(elem)).toBe(true);
        expect(elem.length).toBeGreaterThanOrEqual(1);
      });
    });

    it('returns a 2D array of the correct length', () => {
      const width = 1;
      const height = 2;
      const numMines = 1;

      const generated = generateBoard(width, height, numMines);

      expect(generated.length).toBe(height);
      generated.forEach(elem => {
        expect(elem.length).toBe(width);
      });
    });

    it('populates a board with the correct number of mines', () => {
      const width = 3;
      const height = 3;
      const numMines = 2;

      const generated = generateBoard(width, height, numMines);

      const mineCount = generated.reduce(
        (acc, row) =>
          acc +
          row.reduce(
            (rowAcc, cell) => (cell.value === MINE ? rowAcc + 1 : rowAcc),
            0
          ),
        0
      );

      expect(mineCount).toBe(numMines);
    });

    it('populates a board with the correct number of mines', () => {
      const width = 10;
      const height = 5;
      const numMines = 5;

      const generated = generateBoard(width, height, numMines);

      const mineCount = generated.reduce(
        (acc, row) =>
          acc +
          row.reduce(
            (rowAcc, cell) => (cell.value === MINE ? rowAcc + 1 : rowAcc),
            0
          ),
        0
      );

      expect(mineCount).toBe(numMines);
    });

    it('does the same thing again as a sanity check', () => {
      const width = 10;
      const height = 10;
      const numMines = 10;

      const generated = generateBoard(width, height, numMines);

      console.log(generated);

      const mineCount = generated.reduce(
        (acc, row) =>
          acc +
          row.reduce(
            (rowAcc, cell) => (cell.value === MINE ? rowAcc + 1 : rowAcc),
            0
          ),
        0
      );

      expect(mineCount).toBe(numMines);
    });
  });
});
