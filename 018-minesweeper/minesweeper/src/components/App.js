import React, { useState } from 'react';
import Board from './Board';
import generateBoard, { MINE } from '../utils/generateBoard';

const App = () => {
  const [cells, setCells] = useState(generateBoard(10, 10, 10));
  const [message, setMessage] = useState('');

  const handleClick = (value, row, col) => {
    if (value === MINE) {
      setCells(
        cells.map(cellsRow =>
          cellsRow.map(cell => ({ ...cell, hidden: false }))
        )
      );
      setMessage('You Lose');
      return;
    }

    const newCells = cells.map((cellsRow, rowIndex) =>
      cellsRow.map((cell, colIndex) => {
        if (row === rowIndex && col === colIndex) {
          return { ...cell, hidden: false };
        }

        return { ...cell };
      })
    );

    setCells(newCells);

    const hiddenCellCount = newCells.reduce(
      (acc, cellsRow) =>
        acc +
        cellsRow.reduce(
          (cellAcc, cell) => (cell.hidden ? cellAcc + 1 : cellAcc),
          0
        ),
      0
    );

    console.log(hiddenCellCount);

    if (hiddenCellCount === 10) {
      setCells(
        cells.map(cellsRow =>
          cellsRow.map(cell => ({ ...cell, hidden: false }))
        )
      );
      setMessage('You Win');
    }
  };

  return (
    <div className="App">
      <h1>{message}</h1>
      <Board cells={cells} onClick={handleClick} />
    </div>
  );
};

export default App;
