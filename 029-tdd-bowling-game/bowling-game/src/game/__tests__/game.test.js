import Game from '../game';

describe('game', () => {
  let game;

  beforeEach(() => {
    game = new Game(0);
  });

  const rollMany = (numRolls, pins) => {
    for (let i = 0; i < numRolls; i++) {
      game.roll(pins);
    }
  };

  const rollSpare = () => {
    game.roll(5);
    game.roll(5);
  };

  const rollStrike = () => {
    game.roll(10);
  };

  describe('score', () => {
    it('can score gutter game', () => {
      rollMany(20, 0);
      expect(game.score()).toBe(0);
    });

    it('can score all ones', () => {
      rollMany(20, 1);
      expect(game.score()).toBe(20);
    });

    it('scores consistently if scores is called more than once', () => {
      rollMany(20, 1);
      expect(game.score()).toBe(20);
      expect(game.score()).toBe(20);
    });

    it('can score one spare', () => {
      rollSpare();
      game.roll(3);
      rollMany(17, 0);

      expect(game.score()).toBe(16);
      expect(game.score()).toBe(16);
    });

    it('can roll one strike', () => {
      rollStrike();
      game.roll(3);
      game.roll(4);
      rollMany(16, 0);

      expect(game.score()).toBe(24);
    });
  });

  describe('roll validation', () => {
    it('throws an error if a negative number is rolled', () => {
      expect(() => game.roll(-1)).toThrow();
    });

    it('throws an error if a number greater than 10 is rolled', () => {
      expect(() => game.roll(11)).toThrow();
    });

    it('throws an error if we roll a 5 then a 7', () => {
      game.roll(5);
      expect(() => game.roll(7)).toThrow();
    });

    it("doesn't throw an error if the second roll of a frame is 5, and the first roll of the next frame is 7", () => {
      game.roll(0);
      game.roll(5);
      expect(() => game.roll(7)).not.toThrow();
    });

    it('throws an error if given a non number value', () => {
      expect(() => game.roll('hello')).toThrow();
    });
  });
});
