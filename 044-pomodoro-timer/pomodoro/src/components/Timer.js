import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Timer = ({ time, setTime, isRunning, onTimeEnd }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    setTimeout(() => {
      if (isRunning) {
        if (time > 0) {
          setTime(time - 1);
        } else {
          onTimeEnd();
        }
      }
    }, 1000);
  });

  return (
    <div>
      {time === 0 ? (
        <h1>Time is Up!</h1>
      ) : (
        <h1>
          Time Remaining: {minutes}:{seconds.toString().padStart(2, '0')}
        </h1>
      )}
    </div>
  );
};

Timer.propTypes = {
  time: PropTypes.number.isRequired,
  onTimeEnd: PropTypes.func.isRequired,
  setTime: PropTypes.func.isRequired,
  isRunning: PropTypes.bool.isRequired,
};

export default Timer;
