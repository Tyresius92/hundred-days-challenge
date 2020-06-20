import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const staticDemos = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const App = () => {
  const [demoPercent, setDemoPercent] = useState(10);

  const addTen = () => setDemoPercent(demoPercent + 10);
  const subtractTen = () => setDemoPercent(demoPercent - 10);

  return (
    <div>
      <div style={{ margin: 'auto', width: '50%' }}>
        <h2>Live Demo</h2>
        <ProgressBar
          percent={demoPercent}
          label={`${demoPercent} Percent Complete`}
        />
        <button onClick={subtractTen}>Subtract 10</button>
        <button onClick={addTen}>Add 10</button>

        <h2>Static Demos (some omit &ldquo;label&rdquo; prop)</h2>
        {staticDemos.map(number => (
          <div key={number}>
            <ProgressBar
              percent={number}
              label={number % 20 ? `${number} Percent Complete` : null}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
