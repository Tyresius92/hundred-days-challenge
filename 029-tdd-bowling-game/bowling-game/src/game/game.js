class Game {
  _currentRoll = 0;

  _rolls = [];

  roll = pins => {
    if (this.isValidRoll(pins)) {
      this._rolls[this._currentRoll] = pins;
      this._currentRoll++;
    } else {
      throw new Error();
    }
  };

  isValidRoll = pins => {
    let currentFrame = 1;
    let isFirstBall = true;

    for (let i = 0; i < this._currentRoll; i++) {
      if (this.isStrike(i)) {
        currentFrame++;
        isFirstBall = true;
      } else {
        if (!isFirstBall) {
          currentFrame++;
        }
        isFirstBall = !isFirstBall;
      }
    }

    const isFrameTotalLessThanTen = !isFirstBall
      ? this._rolls[this._currentRoll - 1] + pins <= 10
      : true;

    return (
      typeof pins === 'number' &&
      pins >= 0 &&
      pins <= 10 &&
      isFrameTotalLessThanTen
    );
  };

  score = () => {
    let score = 0;
    let firstInFrame = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(firstInFrame)) {
        score += 10 + this.nextTwoBallsForStrike(firstInFrame);
        firstInFrame++;
      } else if (this.isSpare(firstInFrame)) {
        score += 10 + this.nextBallForSpare(firstInFrame);
        firstInFrame += 2;
      } else {
        score += this.twoBallsInFrame(firstInFrame);
        firstInFrame += 2;
      }
    }

    return score;
  };

  isSpare = firstInFrame =>
    this._rolls[firstInFrame] + this._rolls[firstInFrame + 1] === 10;

  nextBallForSpare = firstInFrame => this._rolls[firstInFrame + 2];

  isStrike = firstInFrame => this._rolls[firstInFrame] === 10;

  nextTwoBallsForStrike = firstInFrame =>
    this._rolls[firstInFrame + 1] + this._rolls[firstInFrame + 2];

  twoBallsInFrame = firstInFrame =>
    this._rolls[firstInFrame] + this._rolls[firstInFrame + 1];
}

export default Game;
