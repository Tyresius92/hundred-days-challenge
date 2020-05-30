import React, { useState } from 'react';
import { Motion, spring } from 'react-motion';
import './App.css';

const App = () => {
  const [isOnLeftSide, setIsOnLeftSide] = useState(true);

  const handleClick = () => {
    setIsOnLeftSide(!isOnLeftSide);
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle the Thing</button>
      <Motion
        style={{
          x: spring(isOnLeftSide ? 0 : 300),
          height: spring(isOnLeftSide ? 50 : 150),
          width: spring(isOnLeftSide ? 50 : 150),
        }}
      >
        {style => (
          <div className="toggleBoard" style={{ height: style.height }}>
            <div
              className="toggleDial"
              style={{
                transform: `translateX(${style.x}px)`,
                height: style.height,
                width: style.width,
              }}
            />
          </div>
        )}
      </Motion>
    </div>
  );
};
export default App;
