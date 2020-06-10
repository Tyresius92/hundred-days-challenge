import React, { useState, useEffect, useRef } from 'react';
import Drawing from './Drawing';
import './DrawingCanvas.css';

const DrawingCanvas = () => {
  const [lines, setLines] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const drawArea = useRef(null);

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  });

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const getNewPoint = mouseEvent => {
    const boundingRect = drawArea.current.getBoundingClientRect();

    return {
      x: mouseEvent.clientX - boundingRect.left,
      y: mouseEvent.clientY - boundingRect.top,
    };
  };

  const handleMouseDown = mouseEvent => {
    if (mouseEvent.button === 0) {
      const point = getNewPoint(mouseEvent);
      const newLine = [point];

      setIsDrawing(true);
      setLines([...lines, newLine]);
    }
  };

  const handleMouseMove = mouseEvent => {
    if (isDrawing) {
      const point = getNewPoint(mouseEvent);
      const currentLine = lines[lines.length - 1];
      const newCurrentLine = [...currentLine, point];
      const allLinesExceptCurrent = lines.slice(0, lines.length - 1);

      setLines([...allLinesExceptCurrent, newCurrentLine]);
    }
  };

  return (
    <>
      <div
        className="drawArea"
        ref={drawArea}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      >
        <Drawing lines={lines} />
      </div>
      <button onClick={() => setLines([])}>Reset</button>
    </>
  );
};

export default DrawingCanvas;
