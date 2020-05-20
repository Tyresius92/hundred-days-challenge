export const MINE = '*';

const validateInput = (width, height, numMines) => {
  if (
    typeof width !== 'number' ||
    typeof height !== 'number' ||
    typeof numMines !== 'number'
  ) {
    throw new Error('Input must be numbers');
  }

  if (width < 1 || height < 1 || numMines < 1) {
    throw new Error('Input must be at least 1');
  }

  if (numMines > width * height) {
    throw new Error('Too many mines on too small a board');
  }
};

const getIndexForNewMine = (width, height) => [
  Math.floor(Math.random() * height),
  Math.floor(Math.random() * width),
];

const getEmptyBoard = (width, height) => {
  const board = [];

  for (let i = 0; i < height; i++) {
    board.push([]);

    for (let j = 0; j < width; j++) {
      board[i].push(0);
    }
  }

  return board;
};

const getNumNeighborsWithMines = ({ board, row, col, rowLimit, colLimit }) => {
  let numNeighborsWithMines = 0;

  const rowMin = Math.max(0, row - 1);
  const rowMax = Math.min(row + 1, rowLimit);
  const colMin = Math.max(0, col - 1);
  const colMax = Math.min(col + 1, colLimit);

  for (let x = rowMin; x <= rowMax; x++) {
    for (let y = colMin; y <= colMax; y++) {
      if (board[x][y] === MINE && (x !== row || y !== col)) {
        numNeighborsWithMines++;
      }
    }
  }

  return numNeighborsWithMines;
};

const generateBoard = (width, height, numMines) => {
  validateInput(width, height, numMines);

  const board = getEmptyBoard(width, height);

  let mineCount = 0;
  while (mineCount < numMines) {
    const [row, col] = getIndexForNewMine(width, height);

    if (board[row][col] !== MINE) {
      board[row][col] = MINE;
      mineCount++;
    }
  }

  return board.map((row, rowIndex) =>
    row.map((cell, colIndex) => {
      const value =
        cell === MINE
          ? cell
          : getNumNeighborsWithMines({
              board,
              row: rowIndex,
              col: colIndex,
              rowLimit: height - 1,
              colLimit: width - 1,
            });

      return {
        value,
        hidden: true,
      };
    })
  );
};

export default generateBoard;
