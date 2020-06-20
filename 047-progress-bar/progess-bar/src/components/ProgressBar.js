import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.css';

const ProgressBar = ({ percent, backgroundColor, label }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(percent);
  }, [percent]);

  return (
    <>
      <div className="progress-container">
        <div
          className="progress"
          style={{
            width: `${value}%`,
            backgroundColor,
          }}
        />
      </div>
      {label && <p>{label}</p>}
    </>
  );
};

ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string,
  label: PropTypes.string,
};

ProgressBar.defaultProps = {
  backgroundColor: 'rgb(62, 122, 235)',
  label: null,
};

export default ProgressBar;
