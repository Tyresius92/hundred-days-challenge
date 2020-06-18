import React, { useState } from 'react';
import Timer from './Timer';

const WORK_TIME_LIMIT = 25; //25 * 60;
const BREAK_TIME_LIMIT = 5; //5 * 60;

const App = () => {
  const [isWorkTime, setIsWorkTime] = useState(true);
  const [time, setTime] = useState(WORK_TIME_LIMIT);

  const [isClockRunning, setIsClockRunning] = useState(false);

  const resetClock = () => {
    //setIsClockRunning(false);
    setTime(isWorkTime ? BREAK_TIME_LIMIT : WORK_TIME_LIMIT);
    setIsWorkTime(!isWorkTime);
  };

  return (
    <>
      <div>
        {isWorkTime ? <h1>Work Time</h1> : <h1>Break Time</h1>}
        <Timer
          time={time}
          setTime={setTime}
          isRunning={isClockRunning}
          onTimeEnd={resetClock}
        />
        {!isClockRunning && (
          <button onClick={() => setIsClockRunning(true)}>Start Timer</button>
        )}
      </div>
    </>
  );
};

export default App;
